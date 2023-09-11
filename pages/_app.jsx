import "../styles/global.scss"
import Head from "next/head"
import Header from "@/components/Header"
import Overlay from "@/components/Overlay"
import { useState, useEffect } from "react"
import axios from "axios"
import Home from "../components/Home"
import { useRouter } from "next/router"
import Favorites from "@/pages/favorite"
import Orders from "./orders"
import AppContext from "@/components/Context"




export default function App(){
    const [basket, setBasket] = useState(false);
    const [items, setItems] = useState([]);
    const [basketItems, setBasketItems] = useState([]);
    const [searchValue, setSearcValue] = useState("");
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [favorite, setFavorite] = useState(false);
    const [suma, setSuma] = useState(0);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    
    
    
    useEffect(()=>{
        async function data (){
            const cartResponse = await axios.get("http://localhost:3001/basket");
            
            
            const favoriteResponse = await axios.get("http://localhost:3001/favorite");
            const itemsResponse = await axios.get("item.json");
            
            
            setBasketItems(cartResponse.data);
            setFavoriteItems(favoriteResponse.data);
            setItems(itemsResponse.data);
            setIsLoading(false);
            
            const calcSum = cartResponse.data.reduce((acum, obj)=>{
                return acum+obj.price;
            }, 0);
            setSuma(calcSum);
        }
       
        data();
        
    },[]);

    
    const onAddToCard = async (obj)=>{
        
        if(basketItems.find(favObj =>favObj.id == obj.id)){
             await axios.delete(`http://localhost:3001/basket/${obj.id}`) 
            setBasketItems((prev)=>prev.filter((item)=>item.id != obj.id));
            
              
                 
        }else{
            const {data} = await axios.post("http://localhost:3001/basket", obj);
            setBasketItems((prev)=>[...prev, data]);
            
        }   
        updateSuma();      
    }
    
    const onRemoveCard = async (id) => {
        try {
          const response = await axios.delete(`http://localhost:3001/basket/${id}`);
          if (response.status === 200) {
            setBasketItems((prev) => prev.filter((item) => item.id !== id));
          }
          updateSuma();
        } catch (error) {
          console.error("Помилка при видаленні з кошика: ", error);
        }
      };
    const updateSuma = () => {
        const newSuma = basketItems.reduce((acum, obj) => {
          return acum + obj.price;
        }, 0);
        setSuma(newSuma);
        
      };

    useEffect(() => {
    updateSuma();
    }, [basketItems]);
    
    

    const onAddToFavorite = async (obj) => {
        try {
          if (favoriteItems.find((favObj) => favObj.id === obj.id)) {
            await axios.delete(`http://localhost:3001/favorite/${obj.id}`);
            setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id));
          } else {
            const response = await axios.post("http://localhost:3001/favorite", obj);
            if (response.status === 201) {
              setFavoriteItems((prev) => [...prev, response.data]);
            }
          }
        } catch (error) {
          console.error("Помилка при роботі з обраними елементами: ", error);
        }
      };



    const isAddedItems = (id)=>{
        return basketItems.some(obj=>obj.id == id);
    }


    const onChangeSearchInput =(event)=>{
        
        setSearcValue(event.target.value);
    }
    const route = ()=>{
        if(router.pathname === "/favorite"){
            return <Favorites
                onAddToFavorite={onAddToFavorite}
                onAddToCard={onAddToCard}
                basketItems={basketItems}/>
        }else if(router.pathname === "/orders"){
             return <Orders
                />
        }else{
            return <Home 
                favoriteItems={favoriteItems}
                basketItems={basketItems}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                items={items}
                onAddToCard={onAddToCard}
                onAddToFavorite={onAddToFavorite}
                isLoading = {isLoading}
                />
        }
    }
    
    return(
        <AppContext.Provider value={{items,basketItems,favoriteItems,isAddedItems}}>
            <div onDragStart={(e)=>e.preventDefault()}>
            
            <Head>
                <title> sneakers-shop</title>
            </Head>
            <div className="wrapper">
            
                {basket && <Overlay  items ={basketItems}  onClickClose ={()=>setBasket(false)} onRemove={onRemoveCard} />}
                
                <Header
                    suma={suma}
                    onClickBacket ={()=>setBasket(true)}
                    
                />
                
                {/* {favorite && <Favorite items = {favoriteItems} onClickClose ={()=>setFavorite(false)} onRemove={onRemoveFavorite} />}         */}
                {route()}
                
            </div>
        </div>
        </AppContext.Provider>  
    )
}