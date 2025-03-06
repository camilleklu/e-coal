import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function Article() {
    const { id } = useParams(); // Récupération de l'ID de l'article depuis l'URL
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cookies] = useCookies(["mycookie"]);

    const isAuthenticated = !!cookies.mycookie?.token;

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
                setError("Erreur lors du chargement de l'article.");
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id, isAuthenticated, cookies.mycookie]);

    if (loading) return <p>Chargement de l'article...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!article) return <p>Aucun article trouvé.</p>;

    return (
        <div>
            <h2>{article.title}</h2>
            <p>
                {isAuthenticated
                    ? article.content
                    : `${article.content.substring(0, 100)}...`}
            </p>
            {!isAuthenticated && (
                <p style={{ color: "gray" }}>
                    Log in to read the full article.
                </p>
            )}
        </div>
    );
}

export default Article;
