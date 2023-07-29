import React from 'react'
import { useSelector } from "react-redux";

import "./style.scss"

//in each movies object there is an id which is there in "data" below.
const Genres = ({data}) => {
    //all the genres inside store is now there in genres.
    const {genres} = useSelector((state) => state.home);
  
    return <div className='genres'>
        {data?.map((g) => {
            if(!genres[g]?.name) return;
            return (
                <div key={g} className="genre">
                    {genres[g]?.name}
                </div>
            );
        })}
    </div>
};

export default Genres;