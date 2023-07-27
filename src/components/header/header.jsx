import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi"; //search icon
import { SlMenu } from "react-icons/sl"; //hamburger menu icon
import { VscChromeClose } from "react-icons/vsc"; //close icon
import { useNavigate, useLocation } from "react-router-dom"; //useNavigate method is imported for redirecting purpose.

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top"); //this state will be used for creating scrolling effect.
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate(); //instance of useNavigate method.
  const location = useLocation(); //when we go to a different route, the useLocation value changes. This tells us our current location in the URL section.

  useEffect(() => { //as it is a single page application browser doesn't refreshes.So, whenever we route from one page to another this method will bring our cursor to top.
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    console.log(window.scrollY); //this property will show how many pixels we have scrolled in the browser.
    if(window.scrollY > 200) {
      if(window.scrollY > lastScrollY && !mobileMenu) { //lastScrolly is a state and initialy it is 0.
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll",controlNavbar ) //whenever we add an event in ReactJs, it is a good practice to write code to remove it.
    return () => {
      window.removeEventListener("scroll",controlNavbar ) //removing the event here otherwise there are chances for memory leaking.
    }
  }, [lastScrollY])
  const searchQueryHandler = (event) => {
    if (event.key == "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() =>{
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type == "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false); //after we click on 'Movie' or 'T.V. shows' from the hamburger menu it will close the hamburger menu after we get redirected to that particular page
  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}> 
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() =>
          navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={() =>
          navigationHandler("tv")}>T.V. Shows</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch}/>
          {
            mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <SlMenu onClick={openMobileMenu} />
            ) //if mobileMenu state will be true, it will show the close button. If not then it will show hamburgen menu icon.
          }
        </div>
      </ContentWrapper>
      {showSearch && (
      <div className="searchBar">
        <ContentWrapper>
        <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or T.V. show."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>
      )}
    </header>
  );
};

export default Header;
