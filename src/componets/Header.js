import { useState, useContext } from "react";
import { HEADER_URL } from "../utils/url";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContex from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

    const [btn_name, setBtn_name] = useState('Login')
    const onLineStaus = useOnlineStatus();
    const data = useContext(UserContex); // We can use data anywhere, we got data here without using props : Amazing right 💕
    const cartItem = useSelector((store) => store.carts.items)

    return (
        <div className="header m-4 p-4 bg-slate-100 flex justify-between box-border border to-black">
            <div className="logo-container flex items-center" >
                <img className="logo w-24"
                     src={HEADER_URL}
                     alt="Logo"
                />
            </div>
            <div className="nav-item flex items-center">
                <ul className=" flex p-4 m-4">
                    <li>Online Status {onLineStaus ? "✅" : "🔴"}</li>
                    <li className=" px-4" > 
                        <Link to ="/"> </Link>
                    </li>
                    <li className=" px-4" > 
                        <Link to = "/About"> About </Link>
                    </li>
                    <li className=" px-4" > 
                        <Link to ="/Contact"> Contact Us </Link>
                    </li>
                    <li className=" px-4" >  
                        <Link to ="/Cart"> Cart {cartItem.length} 🤷‍♂️ </Link>
                     </li>
                     <li className=" px-4" > 
                        <Link to ="/Home"> Home </Link>
                    </li>
                    <button className="px-4 bg-slate-500 rounded text-center" onClick={()=> {btn_name === "Login"? setBtn_name("Logout") : setBtn_name("Login") }}>{btn_name}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;