import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/url";
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
    const {restId} = useParams(); 
    const resData = useRestaurantMenu(restId);
    if(!resData) return <Shimmer/>
    const categories = resData.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(( item )=> 
        item.card.card["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    const {name, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.cards[2]?.card?.card?.info; 

    return (
        <div >
            <h1 className="text-center">{name}</h1>
            <h3 className="text-center">{'Rs: '+ costForTwo/100  }</h3>
            <h3 className="text-center">{ sla.slaString }</h3>
            <div className="text-center"> Rating {avgRating} Stars</div>
            <div> 
                {/* <img src={CDN_URL + cloudinaryImageId }></img> */}
            </div>
            <h2 className="text-center"> Order Now, Will get within :-  {sla.deliveryTime} Minutes </h2>
            {
                categories.map((tems, index)=> <RestaurantCategory key ={index} data = {tems?.card?.card}/>)
            }
        </div>
    );
};

export default RestaurantMenu;
