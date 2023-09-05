import "../styles/global.scss"
import Head from "next/head"
import Card from "@/components/Card/Card"
import Header from "@/components/Header"
import Overlay from "@/components/Overlay"
import { useState, useEffect } from "react"




export default function App(){
    const [basket, setBasket] = useState(false);
    const [items, setItems] = useState([]);
    const [basketItems, setBasketItems] = useState([]);


    useEffect(()=>{
        fetch("item.json")
        .then(res=>{
            return res.json();
        })
        .then(item=>{
            setItems(item);
        })
    },[]);


    const onAddTocard = (obj)=>{
        const isItemInBasket = basketItems.some((item)=>item.src === obj.src);//nahodim peremennyy gde estb takoy ze src  
        if(!isItemInBasket){
            setBasketItems((prev)=>[...prev, obj])
        }
    }
    

    const cards = items.map(card=>
        <Card 
        key ={card.key}
        name={card.name}
        price={card.price}
        src={card.src}
        onFavorite ={()=>console.log("heart")}
        onPlus ={(obj)=>onAddTocard(obj)}
        />
    )
    
    
    return(
        
        <div onDragStart={(e)=>e.preventDefault()}>
            
            <Head>
                <title> sneakers-shop</title>
            </Head>
            <div className="wrapper">
            
                {basket && <Overlay items ={basketItems} onClickClose ={()=>setBasket(false)}/>}
                <Header
                    onClickBacket ={()=>setBasket(true)}
                />         
                <div className="slider"></div>
                <div className="contant">
                    <div className="contant_top">
                        <h3 className="contant_top-info">All sneakers</h3>
                        <input type="search" className="contant_top-searc" placeholder="Search..."/>
                    </div>
                    
                    <ul className="contant_items">
                        {cards}                 
                    </ul>
                </div>
            </div>
        </div>
         
    )
}