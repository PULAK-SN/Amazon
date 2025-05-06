import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import { useStateValue } from "../Context/StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header_location">
        <div className="header_locationIcon">
          <LocationPinIcon className="header_icon" />
        </div>
        <div className="header_locationPlace">
          <small className="header_locationTop">
            Delivering to Kolkata 700001
          </small>
          <strong className="header_locationBottom">Update location</strong>
        </div>
      </div>

      {/* search box */}
      <div className="header_search">
        <div className="header_searchBoxAll">
          <div className="header_searchAll">All</div>
          <ArrowDropDownIcon />
        </div>
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 nav links */}

      {/* link 1 */}
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello, sign in</span>
            <span className="header_optionLineTwo">Accounts & Lists</span>
          </div>
        </Link>

        {/* link 2 */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders & Lists</span>
          </div>
        </Link>

        {/* link 3 */}
        <div className="header_optionBasket">
          <Link to="/checkout" className="header_link">
            <ShoppingBasketIcon className="header_basketIcon" />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
