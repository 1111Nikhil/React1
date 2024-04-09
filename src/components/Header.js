import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux"

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const {loginUser} = useContext(UserContext);
  const cartitems = useSelector((store)=> store.cart.item); 
  return (
    <div className="flex justify-between bg-gray-200 shadow-lg">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="items-center pt-6">
        <ul className="flex">
          <li className="px-5">
          <Link to="/">Home</Link>
          </li>
          <li className="px-6">
          <Link to="/about">About Us</Link></li>
          <li className="px-6">
          <Link to="/contact">Contact Us</Link></li>
          <li className="px-6">
          <Link to="/cart">Cart-{cartitems.length}</Link></li>
          <button
            className="px-6"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li>
            {loginUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;