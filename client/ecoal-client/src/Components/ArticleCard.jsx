import React from "react";

const ArticleCard = ({ title, summary }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <p className="text-gray-300">{summary}</p>
    </div>
  );
};

export default ArticleCard;