 import style from "./Card.module.scss"
 import { useState} from "react"

 export default function Card({ name, price, src, onFavorite, onPlus}){
    const [isAdded, setIsAdded] = useState(false);
    const [isHeart, setIsHeart] = useState(false);
    
    const check = ()=>{
        onPlus({name, price, src});
        setIsAdded(!isAdded);
    }
    const heart = ()=>{
        onFavorite({name, price, src})
        setIsHeart(!isHeart);
    }
    
    
    return(
        <li className={style.item}>
            <img src={!isHeart?"heartForSneakers1.png" : "heartForSneakers2.svg" } alt=""  className={style.heart} onClick={heart}/>
            <img src={src} alt="" className={style.img} />
            <p className={style.name}>{name}</p>
            <div className={style.any}>
                <div className={style.info}>
                    <p className={style.top}>Price:</p>
                    <p className={style.price}>{price} grn.</p>
                </div>
                <img src={!isAdded?"./check1.svg" : "./check2.svg"} alt="" className={style.check} onClick={check} />
            </div>
        </li>
    
    )
 }