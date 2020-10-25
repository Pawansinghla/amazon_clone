import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "../StateProvider";

function Header() {
    const[{basket}]= useStateValue();
    console.log(basket);


    return (
    <nav className="header">
        <Link to="/">
            <img className="header_logo"
                src="../.././logo.png"
                alt="logo" />
        </Link>{" "}
        <div className="header_search" >
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />

        </div>{" "}
        <div className="header_Nav  ">
      {/*1st link video youtube 1:22:35*/}
      <Link to="/" className="header_link">
        <div  className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Pawan</span>
        </div>   
      </Link>

      <Link to="/" className="header_link">
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& orders</span>
        </div>   
      </Link>

      <Link to="/" className="header_link">
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>   
      </Link>

      {/*4th link*/}
      <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          <ShoppingBasketIcon/>
    <span className= "header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
      </Link>     

    </div>
    </nav>
    );
    
}

export default Header;