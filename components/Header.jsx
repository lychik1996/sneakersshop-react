export default function Header(){
    return(
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
    )
}