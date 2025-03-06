import React, { useState } from "react";
import axios from "axios";

function Article({ isAuthenticated, cookies }) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/articles",
                    {
                        headers: isAuthenticated
                            ? {
                                  Authorization: `Bearer ${cookies.mycookie.token}`,
                              }
                            : {},
                    }
                );
                setArticles(response.data);
            } catch (error) {
                console.error("Failed to fetch articles", error);
            }
        };

        fetchArticles();
    }, [isAuthenticated, cookies]);

    return (
        <div>
            {articles.map((article) => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>
                        {isAuthenticated
                            ? article.content
                            : `${article.content.substring(0, 100)}...`}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Article;
