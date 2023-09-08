import Card from "@/components/Card/Card"
import Link from "next/link"
export default function Orders( items =[]){
    const Cards = ()=>{
        return(
            <>
            <div className=" order">
                <Link href = "/"><img src="buttonFavorite.svg" alt="" /></Link>
                <h3 className="order_top ">My Order</h3>     
            </div>
            
            <ul className="contant_items">
            
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
            {/* {items.length>0?<Cards/>:<Clear/>} */}
            <Cards/>
        </div>
        
        
    )
}