import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"; //useNavigate is a method for redirecting to another page on an event.

import "./style.scss"

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const searchQueryHandler = (event) => {
      if(event.key == "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
      }
  }
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="title">Millions of movies, T.V. shows and people to discover.
            Explore now.</span>
            <div className="searchInput">
              <input 
                  type="text" 
                  placeholder="Search for a movie or T.V. show."
                  onChange={() => setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
              />
              <button>Search</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner