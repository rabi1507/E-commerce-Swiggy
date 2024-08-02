import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/url";
import RestaurantCategory from './RestaurantCategory'
import { useState } from "react";

const RestaurantMenu = () => {
    const {restId} = useParams(); 
    const resData = useRestaurantMenu(restId);
    const [ showIntex, setIndex ] = useState(null)
    if(!resData) return <Shimmer/>
    const categories = resData.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(( item )=> 
        item.card.card["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    const {name, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.cards[2]?.card?.card?.info; 

    return (
        <div className=" bg-slate-300">
            <h1 className="text-center font-bold">{name}</h1>
            <h3 className="text-center font-normal">{ sla.slaString }</h3>
            <div className="text-center font-bold"> Rating {avgRating} Stars</div>
            <div> 
                {/* <img src={CDN_URL + cloudinaryImageId }></img> */}
            </div>
            <h2 className="text-center"> DeliveryTime :-  {sla.deliveryTime} Minutes </h2>
            {
                categories.map((tems, index)=> (
                    <RestaurantCategory key ={index} data = {tems?.card?.card}
                    showItem = {index === showIntex ? true : false}
                    setShowIndex = {() => setIndex(index)}

                    />
                ))
            }
        </div>
    );
};

export default RestaurantMenu;
