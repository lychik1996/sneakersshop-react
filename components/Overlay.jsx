import { useState } from "react";
export default function Overlay({onClickClose, items = [],onRemove, }){
const [showOrder, setShowOrder] = useState(false);
    const elem = items
    .map((obj, index)=>(
        <li className="rightSide_item" key={index}>
            <img src={obj.src} alt="" className="rightSide_item_img" width={70} height={70} />
            <div className="rightSide_item_info">
                <p className="rightSide_item_name">{obj.name}</p>
                <p className="rightSide_item_price">{obj.price} grn</p>
            </div>
            <img onClick={()=>onRemove(obj.id)} src="clear.png" alt="" className="rightSide_item_clear" />
        </li>
    ))
    const suma = items.reduce((acum, obj)=>{
        return acum + obj.price;
    },0);
    
    const Clear = ()=>{
        return(
            <>
            <div className="rightSide_clear">
                    <img src="basketClear.png" alt="" className="rightSide_clear_img" />
                    <p className="rightSide_clear_top">Basket is empty</p>
                    <p className="rightSide_clear_bot">Add at least one pair of sneakers to place an order.</p>
                    <button className="rightSide_clear_btn" onClick={onClickClose}> <img className="rightSide_btn_arrow" src="arrowLeft.svg" alt="" /> Come back</button>
            </div> 
            </>
        )
    }
    const Order = ()=>{
        return (
            <div className="rightSide_clear">
                    <img src="basketChecked.png" alt="" className="checked_img" />
                    <p className="rightSide_clear_top checked_top">Order is processed!</p>
                    <p className="rightSide_clear_bot">Your order #18 will be delivered to courier soon</p>
                    <button className="rightSide_clear_btn" onClick={onClickClose}> <img className="rightSide_btn_arrow" src="arrow.svg" alt="" /> Come back</button>
            </div>
        )
    }
    
    const Cards = ()=>{
        return(
            <>
            <ul className="rightSide_items">
                    {elem}
            </ul>
            <div className="rightSide_price">
                <p className="rightSide_name">Total:</p>
                <div className="rightSide_string"></div>
                <p className="rightSide_sum">{suma} grn</p>
            </div>
            <button className="rightSide_btn" onClick={()=>setShowOrder(true)}>Checkout <img src="arrow.svg" alt="" className="rightSide_btn_arrow" /></button>
            </>
        )
    }
    
    return(
        <>
        <div className="overlay" onClick={onClickClose} > 
        </div>
        <div className="rightSide">
                <h3 className="rightSide_basket">Basket <img onClick={onClickClose} src="clear.png" alt="" className="rightSide_item_clear" /></h3>
                {showOrder?<Order/>:(items.length > 0? <Cards/> : <Clear/>)}
                
            </div>
        </>
        
    )
}