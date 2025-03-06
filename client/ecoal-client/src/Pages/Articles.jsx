import { useState, useEffect } from 'react';
import axios from 'axios';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  async function getArticles() {
    try {
      const response = await axios.get('http://localhost:8000/api/articles'); 
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
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <strong>{article.title}</strong> - {article.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
