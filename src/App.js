import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/Body";
import { restoData } from './utils/restoData'
import { useEffect, useState } from 'react';

// import { RESTOBJ } from "./utils/url";

const AppLayout = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const swiggyData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const swiggyJson = await swiggyData.json();
        setListOfRestraunt(swiggyJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="app-layout">
            <Header />
            <div className="bodypart">
                {
                    listOfRestaurants.map((element)=> <Body restObj1 = {element}/>)
                }
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
