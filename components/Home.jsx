import Card from "@/components/Card/Card";
import { v4 as uuidv4 } from 'uuid';


export default function Home ({searchValue,onChangeSearchInput,items, onAddToCard,onAddToFavorite,basketItems, favoriteItems,isLoading}){
    
    const renderItems=()=>{
        const array = [...Array(12)];
        return( (isLoading?array: items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase())))
                .map(card=>
                    <Card
                    key ={!isLoading ? card.key: uuidv4()}
                    {...card}
                    onFavorite ={onAddToFavorite}
                    onPlus ={onAddToCard}
                    
                    isFavorite = {favoriteItems.some(obj => obj.id == card.id)}
                    loading={isLoading}
                    />
                )
        )
    }
    return(
        <div className="contant">
            <div className="slider"></div>
            <div className="contant_top">
                <h3 className="contant_top-info">{searchValue? `Search by: "${searchValue}"`: "All sneakers"}</h3>
                <input onChange={onChangeSearchInput} value={searchValue} type="search" className="contant_top-searc" placeholder="Search..."/>
            </div>
            
            <ul className="contant_items">
                {renderItems()}                 
            </ul>
        </div>
    )
}