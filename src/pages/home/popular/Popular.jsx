//trending will be a carousel section and we will not create a css file for it because other sections under home folder will have similar css properties like trending.
//we will also call the API as we have to show trending movies and T.V. shows in this particular section.
import React, {useState} from "react"; //useState hook is imported to call the API.

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);
    
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange=
        {onTabChange} />
      </ContentWrapper>
      <Carousel 
      data={data?.results} 
      loading={loading}
      endpoint={endpoint}
        />
    </div>
  );
};

export default Popular;
