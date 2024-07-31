import { useEffect, useState } from 'react';
import RestaurantCart from './RestaurantCard';
import { swiggyUrl } from '../utils/url';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {

    const [ listOfRestraunt, setListOfRestraunt] = useState([]);
    const [text, setText] = useState("");
    const [rowRest, setRowRest] = useState([]);
    const onLineStaus = useOnlineStatus();
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const swiggyData = await fetch(swiggyUrl);
        const swiggyJson = await swiggyData.json();
        setListOfRestraunt(swiggyJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRowRest(swiggyJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
     
    if(!onLineStaus) return <h5>You are look like offline</h5>
    return listOfRestraunt.length === 0 ? <Shimmer/> : (
        <div className="rest-body flex flex-wrap p-4 m-4 justify-between">
            <div className="filter flex flex-wrap ">
                <div className='search flex'>
                <input type="text" className=" border-2 border-amber-950 p-2 m-2 w-80 text-black" placeholder="Type here"value={text} 
                onChange={(e)=>  setText(e.target.value)}/>
                <button className='search-btn bg-black text-white font-normal rounded p-2 m-2' onClick={()=> {
                   const filteredResto = listOfRestraunt.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(text.toLowerCase()));
                   setRowRest(filteredResto);
                }}

                >Search</button>
                </div>
                <button className='filter-btn  mx-24 p-2 font-bold text-lg bg-slate-100 rounded-lg hover:bg-slate-200' 
                onClick={()=>{
                   const filterListOfRestraunt = listOfRestraunt.filter((restaurant)=> restaurant.info.avgRating > 4.3)
                   setRowRest(filterListOfRestraunt)
                }}> Top Rated Restaurants </button>
                <div className="resto-container  flex flex-wrap">
                {
                    rowRest.map((element)=> <Link  key = {element.info.id} to ={"/restaurant/" + element.info.id }> <RestaurantCart restObj1 = {element} /> </Link>)
                }
                </div>
            </div>
        </div>
    );
};

export default Body;