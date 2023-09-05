 export default function Card(props){
    return(
        <li className="content_item">
            <img src="heartForSneakers1.png" alt=""  className="contant_item-heart"/>
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
    
    )
 }