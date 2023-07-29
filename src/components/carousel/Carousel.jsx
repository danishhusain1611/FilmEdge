import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill, //left icon in the carousel section to navigate left and right.
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs"; //the release date date from the API is in a different format. With the help of dayjs we will convert that date data according to our suitable format.

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

import "./style.scss";

const Carousel = ({ data, loading }) => {
    const carouselContainer = useRef(); //wherever we pass this variable "carouselContainer" we will get that div reference.
    const {url} = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigation = (dir) => {};

    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        )
    }
    

  return <div className="carousel">
    <ContentWrapper>
        <BsFillArrowLeftCircleFill 
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
            className="carouselRightNav arrow"
            onClick={() => navigation("right")}
        />
        {!loading ? (
            <div className="carouselItems">
                {data?.map((item) => {
                    const posterUrl = item.poster_path  //as URL is too long we passed item.poster_path in posterURL and then passed it into posterBlock.
                    ? url.poster + item.poster_path 
                    : PosterFallback; //if image in the movie card doesn't appear we passed this condtion so PosterFallback image will appear.
                    return (
                        <div 
                        key={item.id} //each movie card in the carousel section have a differnt id which we have passed here.
                        //data coming from the API is a floating number toFixed will eliminate all the values after first decimal number.
                        className="carouselItem">
                            <div className="posterBlock">
                                <Img src={posterUrl} />
                                <CircleRating rating=
                                {item.vote_average.toFixed(1)}/>
                                <Genres data={item.genre_ids.slice(0,2)}/>
                            </div>
                            <div className="textBlock">
                                <span className="title">
                                    {item.title || item.name} 
                                </span>
                                <span className="date">
                                    {dayjs(item.release_Date).format
                                    ("MMM D, YYYY")} 
                                </span> 
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : (
            <div className="loadingSkeleton">
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
            </div>
        )}
    </ContentWrapper>
  </div>; //if i want this div reference i will use "ref" tag to take its reference.
};

export default Carousel;