import Card from "@/components/Card/Card"
export default function Home ({searchValue,onChangeSearchInput,items, onAddToCard,onAddToFavorite,basketItems, favoriteItems}){
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
                    {...card}
                    onFavorite ={onAddToFavorite}
                    onPlus ={(obj)=>onAddToCard(obj)}
                    added = {basketItems.some(obj=>obj.preid == card.preid)}
                    isFavorite = {favoriteItems.some(obj => obj.preid == card.preid)}
                    />
                )}                 
            </ul>
        </div>
    )
}