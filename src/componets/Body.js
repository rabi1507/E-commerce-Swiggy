import { useEffect, useState } from 'react';
import RestaurantCart from './RestaurantCard';
import { swiggyUrl } from '../utils/url';
const Body = () => {

    const [ listOfRestraunt, setListOfRestraunt] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async()=>{
        const swiggyData = await fetch(swiggyUrl);
        const swiggyJson = await swiggyData.json();
        setListOfRestraunt(swiggyJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    
        console.log("listOfRestraunt", listOfRestraunt);
    return (
        <div className="rest-body flex flex-wrap p-4 m-4 justify-between">
            <div className="top-resto">
                <button className='filter-btn m-2 p-2 font-bold text-lg bg-slate-100 rounded-lg hover:bg-slate-200' 
                onClick={()=>{
                   const filterListOfRestraunt = listOfRestraunt.filter((restaurant)=> restaurant.info.avgRating > 4)
                    setListOfRestraunt(filterListOfRestraunt)
                }}> Top Rated Restaurants </button>
                <div className="resto-container  flex flex-wrap">
                {
                    listOfRestraunt.map((element)=> <  RestaurantCart restObj1 = {element} key = {element.info.id}/>)
                }
                </div>
            </div>
        </div>
    );
};

export default Body;