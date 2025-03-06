import { useState, useEffect } from "react";
import axios from "axios";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getArticles() {
        try {
            const response = await axios.get("http://localhost:8000/api/articles");
            setArticles(response.data);
        } catch (err) {
            setError("Failed to load articles.");
            console.error("Error fetching articles:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Articles</h1>

            {loading && <p className="text-center">Loading articles...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <ul className="max-w-lg mx-auto grid grid-cols-1 gap-4">
                {articles.map((article) => (
                    <li key={article.id} className="p-4 bg-white shadow-md rounded-md">
                        <img 
                            src={article.thumbnailURL} 
                            alt={article.title} 
                            className="w-full h-48 object-cover rounded-md mb-2"
                        />
                        <h2 
                            className="font-semibold text-lg" 
                            dangerouslySetInnerHTML={{ __html: article.title }}
                        ></h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Articles;
