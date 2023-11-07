// make content centre aligned give it a max width of 1200px and a margin of 0 auto
import React from "react";
import "./style.scss";
import "./style.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
