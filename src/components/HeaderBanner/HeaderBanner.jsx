import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./HeaderBanner.css";

function HeaderBanner() {
  return (
    <div className="headerBanner">
      <div className="headerBanner_menu">
        <MenuIcon className="headerBanner_menuIcon" />
        <p className="headerBanner_menuAll">All</p>
      </div>

      <ul className="HeaderBanner_option" id="backToTop">
        <li id="1" className="headerBanner_menu">
          Fresh
        </li>
        <li id="2" className="headerBanner_menu">
          MX Player
        </li>
        <li id="3" className="headerBanner_menu">
          Sell
        </li>
        <li id="4" className="headerBanner_menu">
          Bestsellers
        </li>
        <li id="5" className="headerBanner_menu">
          Mobile
        </li>
        <li id="6" className="headerBanner_menu">
          Today's Deals
        </li>
        <li id="7" className="headerBanner_menu">
          Prime
        </li>
        <li id="8" className="headerBanner_menu">
          Customer Service
        </li>
        <li id="9" className="headerBanner_menu">
          New Releases
        </li>
        <li id="10" className="headerBanner_menu">
          Electronics
        </li>
        <li id="11" className="headerBanner_menu">
          Electronics
        </li>
        <li id="12" className="headerBanner_menu">
          Fashion
        </li>
        <li id="13" className="headerBanner_menu">
          Amazon Pay
        </li>
        <li id="14" className="headerBanner_menu">
          Home & Kitchen
        </li>
        <li id="15" className="headerBanner_menu">
          Computers
        </li>
        <li id="16" className="headerBanner_menu">
          Books
        </li>
        <li id="17" className="headerBanner_menu">
          Car & Moterbike
        </li>
        <li id="18" className="headerBanner_menu">
          Toys & Games
        </li>
        <li id="19" className="headerBanner_menu">
          Beauty & Personal Care
        </li>
      </ul>
    </div>
  );
}

export default HeaderBanner;
