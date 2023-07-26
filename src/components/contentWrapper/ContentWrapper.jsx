//the div/component inside will centrally allign the content.
//this component will be used throughou the application.
import React from "react";

import "./style.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>; //created this div as a higher order component.
};

export default ContentWrapper;