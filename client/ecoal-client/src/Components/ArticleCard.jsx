import React from "react";

const ArticleCard = ({ title, media }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={media}></img>
        </div>
    );
};

export default ArticleCard;
