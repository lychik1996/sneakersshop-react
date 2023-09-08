import Link from "next/link";
import { useRouter } from "next/router";
export default function Header(props){
    const router = useRouter();
    const Head = ()=>{
        return (
            <div className="header_left">
                <img src="title.png" alt="" className="header_left-img" />
                <div className="header_left_info">
                    <h3 className="header_left_info-top">REACT SNEAKERS</h3>
                    <p className="header_left_info-bot">Shop best sneakers</p>
                </div>
            </div>
        )
    }
    return(
        <header className="header">
            
            {(router.pathname !== "/favorite" && router.pathname !== "/orders" )? <Head/> : <Link href="/"><Head/></Link>}
                
                <ul className="header_right">
                    <li onClick={props.onClickBacket} className="header_right_elem">
                            <img src="basket.svg" alt="" className="header_right-basketImg" />
                            <p className="header_right-sum">{props.suma} grn</p>
                    </li>
                    <li className="header_right_elem" onClick={props.onClickFavorite}>
                        <Link href="/favorite"><img src="heart.svg" alt="" className="header_right-heartImg" /></Link>
                        
                    </li>
                    <li className="header_right_elem">
                        <Link href="/orders">
                        <img src="profile.svg" alt="" className="header_right-profileImg" />
                        </Link>
                            
                    </li>
                </ul>
            </header>
    )
}