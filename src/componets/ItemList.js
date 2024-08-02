import { addItem } from "../utils/cartSlices";
import { CDN_URL } from "../utils/url";
import UserContex from "../utils/UserContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
const ItemList = ({itemList}) => {
    const data = useContext(UserContex);
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
      dispatch(addItem(item));
    };
    return (
        // <div>
        //   {
        //     itemList.map((item) => (
        //         <div key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-300 text-left"> 
        //         <img src= {CDN_URL + item.card.info.imageId} className="w-1/6 rounded-lg"></img>
        //         <div className=" py-2 font-bold">   
        //         <span className=" text-lg">{ item.card.info.name }</span>
        //         <span> ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}  </span>
        //         </div>
        //         <div className="text-sm"> {item.card.info.description} </div>
        //         </div>
                
        //     ) )
        // }
        // </div>
        


        <div>
              {itemList.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              {/* Try to explore context Api */}
              { data.logedInUser } 
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
        </div>
    )
}

export default ItemList;