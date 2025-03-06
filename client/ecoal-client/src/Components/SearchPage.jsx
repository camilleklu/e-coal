import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <h1>Recherche d'articles</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Entrez un mot-clé..."
            />
            <button onClick={handleSearch}>Rechercher</button>

            <div>
                {results.length > 0 ? (
                    <ul>
                        {results.map((article) => (
                            <li key={article.id}>
                                <Link to={`/articles/${article.id}`}>
                                    <strong
                                        dangerouslySetInnerHTML={{
                                            __html: article.title,
                                        }}
                                    ></strong>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun résultat trouvé.</p>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
