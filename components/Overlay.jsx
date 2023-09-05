export default function Overlay(){
    return(
        <div className="overlay" style={{display: "none"}}>
                <div className="rightSide">
                    <h3 className="rightSide_basket">Basket <img src="clear.png" alt="" className="rightSide_item_clear" /></h3>
                    <ul className="rightSide_items">
                        <li className="rightSide_item">
                            <img src="./sneakers/sneakers1.png" alt="" className="rightSide_item_img" width={70} height={70} />
                            <div className="rightSide_item_info">
                                <p className="rightSide_item_name">Nike Blazer Mid Suede Men's Sneakers</p>
                                <p className="rightSide_item_price">5 000 grn</p>
                            </div>
                            <img src="clear.png" alt="" className="rightSide_item_clear" />
                        </li>
                    </ul>
                    <div className="rightSide_price">
                        <p className="rightSide_name">Total:</p>
                        <div className="rightSide_string"></div>
                        <p className="rightSide_sum">5 000 grn</p>
                    </div>
                    <button className="rightSide_btn">Checkout <img src="arrow.svg" alt="" className="rightSide_btn_arrow" /></button>
                </div>
            </div>
    )
}