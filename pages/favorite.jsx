import Link from "next/link";
import Card from "@/components/Card/Card";
import AppContext from "@/components/Context";
import { useContext } from "react";

export default function Favorites ({onAddToFavorite, onAddToCard,basketItems}){
 const {favoriteItems} = useContext(AppContext);
 
 
    const Clear = ()=>{
        return (
            <>
            <div className="favorite_clear">
                <img className="clear_img" src="favoriteClear.png" alt="" />
                <p className="clear_top">No Favorite </p>
                <p className="clear_bot">You havent bookmarked anything</p>
                <Link href="/">
                <button className="clear_btn"><img className="clear_btnImg"src="arrowLeft.svg" alt="" />Come back</button>
                </Link>
                

            </div>
            </>
        )
    }
    const Cards = ()=>{
        return(
            <>
            <div className=" favorite">
                <Link href = "/"><img src="buttonFavorite.svg" alt="" /></Link>
                <h3 className="favorite_top ">My Favorites</h3>     
            </div>
            
            <ul className="contant_items">
            {favoriteItems
                .map(card=>
                    <Card 
                    key ={card.key}
                    onFavorite ={onAddToFavorite}
                    onPlus ={onAddToCard}
                    isFavorite = {true}
                    added = {basketItems.some(obj=>obj.id == card.id )}
                    {...card}
                    />
                )} 
            </ul>
            </>
        )
    }
    return(
        <div className="contant">
               {favoriteItems.length>0? <Cards/>: <Clear/>}        
            
        </div>
    )
}