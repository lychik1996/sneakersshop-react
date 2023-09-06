import "../styles/global.scss"
import Head from "next/head"
import Header from "@/components/Header"
import Overlay from "@/components/Overlay"
import { useState, useEffect } from "react"
import axios from "axios"
import Home from "../components/Home"
import { useRouter } from "next/router"
import Favorite from "@/pages/favorite"


export default function App(){
    const [basket, setBasket] = useState(false);
    const [items, setItems] = useState([]);
    const [basketItems, setBasketItems] = useState([]);
    const [searchValue, setSearcValue] = useState("");
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [favorite, setFavorite] = useState(false);

    const router = useRouter();
    


    useEffect(()=>{
        axios.get("item.json")
        .then((res)=>{
            setItems(res.data);
        })
        axios.get("https://64f732139d775408495346e8.mockapi.io/basketItems")
        .then((res)=>{
            setBasketItems(res.data);
        })
        axios.get("https://64f732139d775408495346e8.mockapi.io/favoriteItems")
        .then((res)=>{
            setFavoriteItems(res.data);
        })
    },[]);

    
    const onAddToCard = (obj)=>{
        axios.post("https://64f732139d775408495346e8.mockapi.io/basketItems", obj);
        setBasketItems((prev)=>[...prev, obj]);
            
    }
    
    const onRemoveCard =(id)=>{
        axios.delete(`https://64f732139d775408495346e8.mockapi.io/basketItems/${id}`);
        setBasketItems((prev)=>prev.filter((item)=>item.id !== id));
    }


    const onAddToFavorite = (obj)=>{
        axios.post("https://64f732139d775408495346e8.mockapi.io/favoriteItems", obj)
        setFavoriteItems((prev)=>[...prev, obj]);
    }

    const onRemoveFavorite=(id)=>{
        axios.delete(`https://64f732139d775408495346e8.mockapi.io/favoriteItems/${id}`)
        setFavoriteItems((prev)=>prev.filter((item)=>item.id !== id));
    }


    const onChangeSearchInput =(event)=>{
        
        setSearcValue(event.target.value);
    }
    
    return(
        
        <div onDragStart={(e)=>e.preventDefault()}>
            
            <Head>
                <title> sneakers-shop</title>
            </Head>
            <div className="wrapper">
            
                {basket && <Overlay items ={basketItems}  onClickClose ={()=>setBasket(false)} onRemove={onRemoveCard} />}
                
                <Header
                    onClickBacket ={()=>setBasket(true)}
                    // onClickFavorite = {()=>setFavorite(true)}
                />
                
                {/* {favorite && <Favorite items = {favoriteItems} onClickClose ={()=>setFavorite(false)} onRemove={onRemoveFavorite} />}         */}
                {(router.pathname !== "/favorite")? 
                (<Home 
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                items={items}
                onAddToCard={(obj)=>onAddToCard(obj)}
                onAddToFavorite={(obj)=>onAddToFavorite(obj)}/>): 
                (<Favorite/>) }
                
            </div>
        </div>
        
    )
}