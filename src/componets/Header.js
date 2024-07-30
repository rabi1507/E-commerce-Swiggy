import { useState } from "react";
import { HEADER_URL } from "../utils/url";
import { Link } from "react-router-dom";
const Header = () => {

    const [btn_name, setBtn_name] = useState('Login')
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
                    <li className=" px-4" > 
                        <Link to ="/"> Home </Link>
                    </li>
                    <li className=" px-4" > 
                        <Link to = "/About"> About </Link>
                    </li>
                    <li className=" px-4" > 
                        <Link to ="/Contact"> Contact Us </Link>
                    </li>
                    <li className=" px-4" >  
                        <Link to ="/Cart"> Cart </Link>
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