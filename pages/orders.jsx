import Card from "@/components/Card/Card"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios";

const delay =(ms)=>  new Promise((resolve)=> setTimeout(resolve, ms));
export default function Orders(){
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:3001/order')
        .then((res)=>setOrder(res.data));
    },[]);
    
    
    const items = [];
    for (let i=0; i<order.length; i++){
        const item = order[i].order;
        for(let b=0; b<item.length;b++){
            const item2 = item[b];
            items.push(item2);
        }
    }
    const clearOrders = async ()=>{
        setIsLoading(true);
        for( let i=0; i<order.length;i++){
            const item = order[i];
            await axios.delete(`http://localhost:3001/order/`+ item.id);
            
        }
        setOrder([]);
        setIsLoading(false);
    }
    const Cards = ()=>{
        return(
            <>
            <div className=" order">
                <Link href = "/"><img src="buttonFavorite.svg" alt="" /></Link>
                <h3 className="order_top ">My Order</h3>
                <button disabled={isLoading} onClick={()=>clearOrders()} className="order_btn"><img src="clear.png" alt="" /></button>     
            </div>
            
            <ul className="contant_items">
            {items.map((card)=>
                <Card
                {...card}
                />
            )}
            </ul>
            </>
        )
    }
    const Clear = ()=>{
        return(
            <>
            <div className="orders_clear">
            <img className="clear_img" src="orderClear.png" alt="" />
                <p className="clear_top">You have no orders</p>
                <p className="clear_bot">Are you poor? Place at least one order.</p>
                <Link href="/">
                <button className="clear_btn"><img className="clear_btnImg"src="arrowLeft.svg" alt="" />Come back</button>
                </Link>
            </div>
            </>
        )
    }
    return (
        <div className="contant">
            {items.length>0?<Cards/>
            :<Clear/>}
            
        </div>
        
        
    )
}