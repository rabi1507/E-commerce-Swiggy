import { useSelector } from "react-redux"
import ItemList from "./ItemList"

const Card =()=>{
    const cardItem = useSelector((store) => store.carts.items)
    return (
        <div className=" p-6 mt-20 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md justify-center h-screen">
            <h4 className=" text-center font-bold text-amber-700"> Card Item </h4>
            <button className="bg-black rounded-lg text-white items-center m-4 shadow-rose-800"> Clear Card </button>
            <ItemList itemList = {cardItem}/>
        </div>
    )
}

export default Card