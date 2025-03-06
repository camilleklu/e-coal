import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import styles from "./Article.module.css";

function Article() {
    const { id } = useParams();
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
                console.error("Erreur lors du chargement de l'article", error);
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
            {isAuthenticated ? (
                <p>{article.content}</p>
            ) : (
                <>
                    <p>{article.extract}</p>
                    <p style={{ color: "gray" }}>
                        Connectez-vous pour lire l'article en entier.{" "}
                        <Link to="/login">Se connecter</Link>
                    </p>
                </>
            )}
        </div>
    );
}

export default Article;
