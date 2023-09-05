export default function Overlay({onClickClose, items = [],  }){
    
    
    
    const elem = items.map((obj, index)=>(
        <li className="rightSide_item" key={index}>
            <img src={obj.src} alt="" className="rightSide_item_img" width={70} height={70} />
            <div className="rightSide_item_info">
                <p className="rightSide_item_name">{obj.name}</p>
                <p className="rightSide_item_price">{obj.price} grn</p>
            </div>
            <img  src="clear.png" alt="" className="rightSide_item_clear" />
        </li>
    )) 
    return(
        <>
        <div className="overlay" onClick={onClickClose} > 
        </div>
        <div className="rightSide">
                <h3 className="rightSide_basket">Basket <img onClick={onClickClose} src="clear.png" alt="" className="rightSide_item_clear" /></h3>
                <ul className="rightSide_items">
                    {elem}
                </ul>
                <div className="rightSide_price">
                    <p className="rightSide_name">Total:</p>
                    <div className="rightSide_string"></div>
                    <p className="rightSide_sum">5 000 grn</p>
                </div>
                <button className="rightSide_btn">Checkout <img src="arrow.svg" alt="" className="rightSide_btn_arrow" /></button>
            </div>
        </>
        
    )
}