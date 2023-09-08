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


export default function App(){
    const [basket, setBasket] = useState(false);
    const [items, setItems] = useState([]);
    const [basketItems, setBasketItems] = useState([]);
    const [searchValue, setSearcValue] = useState("");
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [favorite, setFavorite] = useState(false);
    const [suma, setSuma] = useState(0);
    const router = useRouter();
    
    
    


    useEffect(()=>{
        async function data (){
            const cartResponse = await axios.get("https://64f732139d775408495346e8.mockapi.io/basketItems");
            const favoriteResponse = await axios.get("https://64f732139d775408495346e8.mockapi.io/favoriteItems");
            const itemsResponse = await axios.get("item.json");
            
            setBasketItems(cartResponse.data);
            setFavoriteItems(favoriteResponse.data);
            setItems(itemsResponse.data);
            
            const calcSum = cartResponse.data.reduce((acum, obj)=>{
                return acum+obj.price;
            }, 0);
            setSuma(calcSum);
        }
       
        data();
    },[]);

    
    const onAddToCard = async (obj)=>{
        
        if(basketItems.find(favObj =>favObj.preid == obj.preid)){
             await axios.delete(`https://64f732139d775408495346e8.mockapi.io/basketItems/${obj.preid}`) 
            setBasketItems((prev)=>prev.filter((item)=>item.preid != obj.preid));
            
              
                 
        }else{
            const {data} = await axios.post("https://64f732139d775408495346e8.mockapi.io/basketItems", obj);
            setBasketItems((prev)=>[...prev, data]);
            
        }   
        updateSuma();      
    }
    
    const onRemoveCard = (preid)=>{
        axios.delete(`https://64f732139d775408495346e8.mockapi.io/basketItems/${preid}`);
        setBasketItems((prev)=>prev.filter((item)=>item.preid != preid));
        updateSuma();
        

    }
    const updateSuma = () => {
        const newSuma = basketItems.reduce((acum, obj) => {
          return acum + obj.price;
        }, 0);
        setSuma(newSuma);
        
      };
      useEffect(() => {
        updateSuma();
      }, [basketItems]);
    

    const onAddToFavorite =  async (obj)=>{
        
        if(favoriteItems.find(favObj=>favObj.preid == obj.preid)){
        axios.delete(`https://64f732139d775408495346e8.mockapi.io/favoriteItems/${obj.preid}`);
        setFavoriteItems((prev)=>prev.filter((item)=>item.preid != obj.preid))
        } else{
            const {data} = await axios.post("https://64f732139d775408495346e8.mockapi.io/favoriteItems", obj)
            setFavoriteItems((prev)=>[...prev, data]);
            
        }
    }

   
     
    const onChangeSearchInput =(event)=>{
        
        setSearcValue(event.target.value);
    }
    const route = ()=>{
        if(router.pathname === "/favorite"){
            return <Favorites
                items={favoriteItems}
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
                />
        }
    }
    
    return(
        
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
        
    )
}