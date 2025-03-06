import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
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
                console.error("Failed to fetch article", error);
                setError("Error loading article.");
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id, isAuthenticated, cookies.mycookie]);

    if (loading) return <p>Loading article...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!article) return <p>No article found.</p>;

    return (
        <div>
            <section className={styles.top}>
                <div className={styles.red_text}>
                    <p>Issue nº143</p>
                    <p>March 4, 2025</p>
                </div>
                <hr className={styles.line_separation_1}></hr>
                <hr className={styles.line_separation}></hr>
                <h2
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                        __html: article.title,
                    }}
                ></h2>
                <hr className={styles.line_separation}></hr>
                <div className={styles.places_text}>
                    <div className={styles.tags}>
                        {article.tags.map((tag) => (
                            <p key={tag.id}>{tag.name}</p>
                        ))}
                    </div>
                    <img src={article.mediaURL} />

                    <p
                        className={styles.text}
                        dangerouslySetInnerHTML={{
                            __html: isAuthenticated
                                ? article.content
                                : `${article.content.substring(0, 100)}...`,
                        }}
                    ></p>
                </div>
                <div className={styles.places_text}>
                    {!isAuthenticated && (
                        <p className={styles.login_read}>
                            Log in to read the full article.
                        </p>
                    )}
                </div>
                <hr className={styles.line_separation_bottom}></hr>
            </section>
        </div>
    );
}

export default Article;
