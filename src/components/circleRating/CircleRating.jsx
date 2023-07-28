import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";

const CircleRating = ({ rating }) => {
    return (
        <div className="circleRating">
            <CircularProgressbar //CircularProgressbar overe here is a component and we are using a library called "react-circular-progressbar" and inside it we have a css file which we are getting from the library itself.
                value={rating} //rating value coming from the API.
                maxValue={10} //max rating is out of 10. If we remove it then the default value is out of 100.
                text={rating}
                //custom styling below.
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                        //rating progressbar wrap color.
                })}
            />
        </div>
    );
};

export default CircleRating;