import { useEffect, useState } from "react";
import { RESTO_MANU, CDN_URL} from "../utils/url";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const {restId} = useParams(); 

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        try {
            const response = await fetch(RESTO_MANU + restId);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setResInfo(jsonData?.data?.cards[2]?.card?.card?.info || []);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    if (loading) return <Shimmer />;
    if (error) return <div>Error: {error}</div>;
    
    if (!resInfo) return <div>No restaurant data available</div>;

    const { name, avgRating, costForTwo, sla, cloudinaryImageId } = resInfo;
    console.log(resInfo);

    return (
        <div className="p-6 mt-20 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
            <h1  className="text-2xl font-bold mb-2 text-gray-800">{name}</h1>
            {/* <h3 className="text-lg text-gray-600 mb-2">{ cuisines.join(', ') }</h3> */}
            <h3 className="text-md text-gray-500 mb-2">{'Rs: '+ costForTwo/100  }</h3>
            <h3 className="text-md text-gray-500">{ sla.slaString }</h3>
            <span className="text-md text-gray-500"> Rating {avgRating} Stars</span>

            <div className="mt-10"> 
                <img src={CDN_URL + cloudinaryImageId }></img>
            </div>
        </div>
    );
};

export default RestaurantMenu;
