import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./SearchPage.module.css";

function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!query) return;

        try {
            const response = await axios.get(
                "http://localhost:8000/api/search",
                {
                    params: { q: query },
                }
            );
            setResults(response.data);
        } catch (error) {
            console.error("Erreur:", error);
            setResults([]);
        }
    };

    return (
        <div>
            <section className={styles.top}>
                <div className={styles.red_text}>
                    <p>Issue nº143</p>
                    <p>March 4, 2025</p>
                </div>
                <hr className={styles.line_separation_1}></hr>
                <hr className={styles.line_separation}></hr>
                <h1 className={styles.title}>Search Articles</h1>
                <hr className={styles.line_separation}></hr>
                <div className={styles.bar_search}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Put a key word..."
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div>
                    {results.length > 0 ? (
                        <div className={styles.result_search}>
                            {results.map((article) => (
                                <Link
                                    to={`/articles/${article.id}`}
                                    key={article.id}
                                    className={styles.search_item}
                                >
                                    <h2
                                        className={styles.title_article}
                                        dangerouslySetInnerHTML={{
                                            __html: article.title,
                                        }}
                                    ></h2>
                                    <img src={article.thumbnailURL} />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className={styles.no_result}>No result find</p>
                    )}
                </div>
                <hr className={styles.line_separation_bottom}></hr>
            </section>
        </div>
    );
}

export default SearchPage;
