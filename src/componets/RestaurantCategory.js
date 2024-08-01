const RestaurantCategory =({data}) => {

    console.log("propsprops", data.title);
    // data.itemCards.map((item) => {console.log(item.card.info)})


    return(
        <div>
       {/* {
        data.itemCards.map((item) => { 
            <h4> {item.card.info}</h4>
        })
       } */}

       <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between cursor-pointer">
        <span className="font-bold text-lg"> {data.title} {data.itemCards.length} </span>
        <span>⬇️</span>
       </div>
        </div>
    )
}

export default RestaurantCategory;