import { HEADER_URL } from "../utils/url";
import About from "./About";
const Header = () => {
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
                    <li className=" px-4">Home</li>
                    <li className=" px-4">About Us</li>
                    <li className=" px-4">Contact Us</li>
                    <li className=" px-4">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;