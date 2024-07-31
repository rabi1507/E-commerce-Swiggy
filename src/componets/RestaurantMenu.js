import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/url";

const RestaurantMenu = () => {
    const {restId} = useParams(); 
    const resData = useRestaurantMenu(restId);
    if(!resData) return <Shimmer/>
    const {name, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.cards[2]?.card?.card?.info; 
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <h1  className="text-2xl font-bold mb-2 text-gray-800">{name}</h1>
            {/* <h3 className="text-lg text-gray-600 mb-2">{ cuisines.join(', ') }</h3> */}
            <h3 className="text-md text-gray-500 mb-2">{'Rs: '+ costForTwo/100  }</h3>
            <h3 className="text-md text-gray-500">{ sla.slaString }</h3>
            <span className="text-md text-gray-500"> Rating {avgRating} Stars</span>

            <div className=" rounded-lg"> 
                <img src={CDN_URL + cloudinaryImageId }></img>
            </div>
            <h2 className="text-2xl mb-2 font-bold text-gray-600"> Order Now, Will get within :-  {sla.deliveryTime} Minutes </h2>
        </div>
    );
};

export default RestaurantMenu;
