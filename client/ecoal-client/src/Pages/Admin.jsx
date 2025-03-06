// src/Pages/Admin.js
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const [cookies] = useCookies(["mycookie"]);
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({
    title: "",
    content: "",
    thumbnailURL: "",
    mediaType: "",
    mediaURL: "",
    author: "",
    date: "",
    extract: "",
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);

  // Redirect non-admin users
  useEffect(() => {
    if (!cookies.mycookie || cookies.mycookie.role !== "admin") {
      navigate("/");
    } else {
      fetchArticles();
    }
  }, [cookies, navigate]);

  // Fetch articles for the admin
  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/articles");
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  // Handle delete article
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this article?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8000/api/articles/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies.mycookie.token}`,
        },
      });
      alert("Article deleted successfully!");
      setArticles(articles.filter((article) => article.id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  // Submit form to create a new article
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/articles",
        article,
        {
          headers: {
            Authorization: `Bearer ${cookies.mycookie.token}`,
          },
        }
      );
      console.log("Article created successfully:", response.data);
      setArticle({
        title: "",
        content: "",
        thumbnailURL: "",
        mediaType: "",
        mediaURL: "",
        author: "",
        date: "",
        extract: "",
      });
      fetchArticles(); // Refresh articles list
      setShowAddModal(false); // Close modal after submission
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <div className="button-container">
        <button onClick={() => setShowAddModal(true)}>Add Article</button>
        <button onClick={() => setShowManageModal(true)}>Manage Articles</button>
      </div>

      {/* Add Article Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddModal(false)}>&times;</span>
            <h3>Add New Article</h3>
            <form className="form-container" onSubmit={handleSubmit}>
              <input type="text" name="title" placeholder="Title" value={article.title} onChange={handleChange} required />
              <textarea name="content" placeholder="Content" value={article.content} onChange={handleChange} required />
              <input type="text" name="thumbnailURL" placeholder="Thumbnail URL" value={article.thumbnailURL} onChange={handleChange} />
              <input type="text" name="mediaType" placeholder="Media Type" value={article.mediaType} onChange={handleChange} />
              <input type="text" name="mediaURL" placeholder="Media URL" value={article.mediaURL} onChange={handleChange} />
              <input type="text" name="author" placeholder="Author" value={article.author} onChange={handleChange} required />
              <input type="date" name="date" value={article.date} onChange={handleChange} required />
              <textarea name="extract" placeholder="Extract" value={article.extract} onChange={handleChange} />
              <button type="submit">Create Article</button>
            </form>
          </div>
        </div>
      )}

      {/* Manage Articles Modal */}
      {showManageModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowManageModal(false)}>&times;</span>
            <h3>Manage Articles</h3>
            {articles.length === 0 ? (
              <p>No articles available.</p>
            ) : (
              <div className="article-list">
                {articles.map((article) => (
                  <div className="article-item" key={article.id}>
                    <h4>{article.title}</h4>
                    <button className="delete-button" onClick={() => handleDelete(article.id)}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Styles for modals and layout */}
      <style>
        {`
          .admin-container {
            text-align: center;
            padding: 20px;
          }
          .button-container {
            margin-bottom: 20px;
          }
          .button-container button {
            margin: 5px;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
          }
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .modal-content {
            background: white;
            padding: 20px;
            border-radius: 5px;
            min-width: 350px;
            text-align: center;
          }
          .close {
            float: right;
            font-size: 20px;
            cursor: pointer;
          }
          .form-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .form-container input,
          .form-container textarea {
            width: 100%;
            padding: 8px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .form-container button {
            padding: 10px;
            font-size: 16px;
            background: green;
            color: white;
            border: none;
            cursor: pointer;
          }
          .article-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .article-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .delete-button {
            background: red;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Admin;
