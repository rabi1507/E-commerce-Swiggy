import { useState, useEffect } from "react";
import { RESTO_MANU} from "../utils/url";

const useRestaurantMenu =(resId)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const restoData = await fetch(RESTO_MANU + resId);

        const jsonData = await restoData.json();
        setResInfo(jsonData.data);
    }
    return resInfo;
    

}

export default useRestaurantMenu;
