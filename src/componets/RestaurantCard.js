import { CDN_URL } from "../utils/url";

const RestaurantCart = (props)=>{

    const { cuisines, sla, cloudinaryImageId, avgRating,  name } = props.restObj1.info;
    return (
        <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img  className = "rounded-lg" src= {CDN_URL + cloudinaryImageId}/>

            <h3 className="font-bold py-4 text-lg"> {name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCart;