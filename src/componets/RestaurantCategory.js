import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory =({data, showItem, setShowIndex}) => {
    const handler = ()=>{
        setShowIndex();
    }
    return(
        <div className=" bg-slate-300">
       <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 break-words ">
        <div className="flex justify-between cursor-pointer " onClick = {handler} >
        <span className="font-bold text-lg"> {data.title} {data.itemCards.length} </span>
        <span>⬇️</span>
        </div>

       { showItem &&  <ItemList itemList = {data.itemCards}/>}
       </div>
        </div>
    )
}

export default RestaurantCategory;