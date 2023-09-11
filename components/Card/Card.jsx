 import style from "./Card.module.scss"
 import { useState} from "react"
 import ContentLoader from "react-content-loader";
 
import AppContext from "../Context";
import { useContext } from "react";

 export default function Card({ preid, name, price, src, onPlus, onFavorite, isFavorite = false , added = false, loading }){
    const {isAddedItems} = useContext(AppContext);
    

    const [isHeart, setIsHeart] = useState(isFavorite);
    
    const check = ()=>{
        onPlus({name, price, src, preid});
        
          
    }
    
    const heart = ()=>{
        onFavorite({name, price, src, preid})
        setIsHeart(!isHeart);
    }
    
    return(
        <li className={style.item} >
            {loading? <ContentLoader 
                speed={2}
                width={210}
                height={260}
                viewBox="0 0 210 260"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                
                >
                <rect x="108" y="122" rx="0" ry="0" width="62" height="1" /> 
                <rect x="30" y="36" rx="10" ry="10" width="150" height="90" /> 
                <rect x="30" y="137" rx="5" ry="5" width="150" height="15" /> 
                <rect x="30" y="167" rx="5" ry="5" width="100" height="15" /> 
                <rect x="30" y="196" rx="5" ry="5" width="80" height="24" /> 
                <rect x="148" y="192" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>: 
            <>
            <img src={!isHeart?"heartForSneakers1.png" : "heartForSneakers2.svg" } alt=""  className={style.heart} onClick={heart}/>
                <img src={src} alt="" className={style.img} />
                <p className={style.name}>{name}</p>
                <div className={style.any}>
                    <div className={style.info}>
                        <p className={style.top}>Price:</p>
                        <p className={style.price}>{price} grn.</p>
                    </div>
                    <img src={!isAddedItems(preid)?"check1.svg" : "check2.svg"} alt="" className={style.check} onClick={check} />
                </div>
            </>}     
        </li>
    )
 }