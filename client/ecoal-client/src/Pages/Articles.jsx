import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './Articles.module.css';

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getArticles() {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/articles"
            );
            setArticles(response.data);
        } catch (err) {
            setError("Failed to load articles. Check your backend.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getArticles();
    }, []);

    if (loading) return <p>Loading articles...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <section className={styles.top}>
                <div className={styles.red_text} >
                    <p >Issue nº143</p>
                    <p >March 4, 2025</p>
                </div>
                <hr className={styles.line_separation_1}></hr>
                <hr className={styles.line_separation}></hr>
                <h2 className={styles.title}>Articles</h2>
                <hr className={styles.line_separation}></hr>


            <div className={styles.grid}>
                {articles.map((article) => (
                    <Link to={`/articles/${article.id}`}
                        key={article.id}
                        className={styles.grid_item}
                    >
                        <h2 className={styles.title_article}
                            dangerouslySetInnerHTML={{
                                __html: article.title,
                            }}
                        ></h2>
                        <img src={article.thumbnailURL} />
                    </Link>
                ))}
            </div>
                <hr className={styles.line_separation_bottom}></hr>
                </section>
        </div>
    );
}

export default Articles;
