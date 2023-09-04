import "../styles/global.scss"
import Head from "next/head"
export default function App(){
    
    return(
        
        <div onDragStart={(e)=>e.preventDefault()}>
        <Head>
            <title> sneakers-shop</title>
        </Head>
        <div className="wrapper">
            <header className="header">
                <div className="header_left">
                    <img src="title.png" alt="" className="header_left-img" />
                    <div className="header_left_info">
                        <h3 className="header_left_info-top">REACT SNEAKERS</h3>
                        <p className="header_left_info-bot">Shop best sneakers</p>
                    </div>
                </div>
                
                <ul className="header_right">
                    <li className="header_right_elem">
                            <img src="basket.svg" alt="" className="header_right-basketImg" />
                            <p className="header_right-sum">12000 grn</p>
                    </li>
                    <li className="header_right_elem">
                        <img src="heart.svg" alt="" className="header_right-heartImg" />
                    </li>
                    <li className="header_right_elem">
                            <img src="profile.svg" alt="" className="header_right-profileImg" />
                    </li>
                </ul>
            </header>
            <div className="slider"></div>
            <div className="contant">
                <div className="contant_top">
                    <h3 className="contant_top-info">All sneakers</h3>
                    <input type="search" className="contant_top-searc" placeholder="Search..."/>
                </div>
                
                <ul className="contant_items">
                    <li className="content_item">
                        <img src="heartForSneakers1.svg" alt=""  className="contant_item-heart"/>
                        <img src="./sneakers/sneakers1.png" alt="" className="cntent_item-img" />
                        <p className="contant_item-name">Nike Blazer Mid Suede Men's Sneakers</p>
                        <div className="contant_item_any">
                            <div className="contant_item-info">
                                <p className="contant_item-top">Price:</p>
                                <p className="contant_item-price">5 000 grn.</p>
                            </div>
                            <img src="check1.svg" alt="" className="contant_item_check" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
         
    )
}