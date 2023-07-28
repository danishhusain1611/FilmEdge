import React, { useState, useEffect } from "react"; //to get random background image on our home page we are using useEffect hook.
import { useNavigate } from "react-router-dom"; //useNavigate is a method for redirecting to another page on an event.
import { useSelector } from "react-redux";

import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home); //we will have url inside home, and we destructured it.
  const { data, loading } = useFetch("/movie/upcoming"); //this endpoint will show all the upcoming movies for now using useFetch method.

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg); //there is a random path inside bg variable which we are saving in setBackground.
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key == "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} alt="" />{" "}
          {/*using img from lazyLoadImage just like HTML and image path is in background.*/}
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">FilmEdge</span>
          <span className="subTitle">
            Millions of movies, T.V. shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or T.V. show."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;