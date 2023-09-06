import Card from "@/components/Card/Card"
export default function Home ({searchValue,onChangeSearchInput,items, onAddToCard,onAddToFavorite,}){
    return(
        <div className="contant">
            <div className="slider"></div>
            <div className="contant_top">
                <h3 className="contant_top-info">{searchValue? `Search by: "${searchValue}"`: "All sneakers"}</h3>
                <input onChange={onChangeSearchInput} value={searchValue} type="search" className="contant_top-searc" placeholder="Search..."/>
            </div>
            
            <ul className="contant_items">
                {items
                .filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(card=>
                    <Card 
                    key ={card.key}
                    name={card.name}
                    price={card.price}
                    src={card.src}
                    onFavorite ={(obj)=>onAddToFavorite(obj)}
                    onPlus ={(obj)=>onAddToCard(obj)}
                    />
                )}                 
            </ul>
        </div>
    )
}