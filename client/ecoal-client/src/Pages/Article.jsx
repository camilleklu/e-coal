// src/Pages/Article.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [cookies] = useCookies(["mycookie"]);

  // Fetch the article from the backend using the id
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article", error);
      }
    };

    fetchArticle();
  }, [id]);

  // Check if a user is logged in and is a normal user (not admin)
  useEffect(() => {
    if (article && cookies.mycookie && cookies.mycookie.role !== "admin") {
      // Redirect normal users to the full article on the external media URL
      window.location.href = article.mediaURL;
    }
  }, [article, cookies]);

  if (!article) return <p>Loading...</p>;

  // Determine if a user is logged in
  const isLoggedIn = !!cookies.mycookie;
  const isAdmin = isLoggedIn && cookies.mycookie.role === "admin";

  return (
    <div>
      <h2>{article.title}</h2>
      {/* If no user is logged in or if the logged in user is an admin, show thumbnail & extract */}
      {( !isLoggedIn || isAdmin ) && (
        <>
          <img
            src={article.thumbnailURL}
            alt={article.title}
            style={{ width: "200px", display: "block", marginBottom: "10px" }}
          />
          <p>{article.extract}</p>
          <p>
            <em>Login to read the full article.</em>
          </p>
        </>
      )}
      {/* For normal logged-in users, useEffect above handles the redirection.
          We include a fallback message and link in case the automatic redirect doesn't work. */}
      {isLoggedIn && !isAdmin && (
        <div>
          <p>
            Redirecting to the full article... If you are not redirected automatically,{" "}
            <a href={article.mediaURL}>click here</a>.
          </p>
        </div>
      )}
    </div>
  );
};

export default Article;
