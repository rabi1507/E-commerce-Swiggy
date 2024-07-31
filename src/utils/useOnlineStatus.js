import { useEffect, useState } from "react"

const useOnlineStatus =()=>{
    const[onLineStaus, setOnLineStaus] = useState(true)
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnLineStaus(false)
        });

        window.addEventListener("online", ()=>{
            setOnLineStaus(true)
        });
    },[])

    return (
        onLineStaus
    )
};

export default useOnlineStatus;