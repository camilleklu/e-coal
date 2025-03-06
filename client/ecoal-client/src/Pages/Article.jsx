import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Article({ isAuthenticated, cookies }) {
    const { id } = useParams(); // Récupération de l'ID de l'article depuis l'URL
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/articles/${id}`,
                    {
                        headers: isAuthenticated
                            ? {
                                  Authorization: `Bearer ${cookies.mycookie.token}`,
                              }
                            : {},
                    }
                );
                setArticle(response.data);
            } catch (error) {
                console.error("Failed to fetch article", error);
                setError("Failed to load article. Check your backend.");
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id, isAuthenticated, cookies]);

    if (loading) return <p>Loading article...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!article) return <p>No article found.</p>;

    return (
        <div>
            <h2
                dangerouslySetInnerHTML={{
                    __html: article.title,
                }}
            ></h2>
            <p
                dangerouslySetInnerHTML={{
                    __html: isAuthenticated
                        ? article.content
                        : `${article.content.substring(0, 100)}...`,
                }}
            ></p>
        </div>
    );
}

export default Article;
