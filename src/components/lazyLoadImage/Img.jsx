//wherever in the application we want to use images we will lazy load from here.
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"; //using this library
import "react-lazy-load-image-component/src/effects/blur.css"; //this css file is coming from above library.

const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={src}
        />
    );
};

export default Img;