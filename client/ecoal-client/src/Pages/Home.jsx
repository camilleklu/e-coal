import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import { Carousel, Button } from "antd";
// import ArticleCard from "../Components/ArticleCard";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
    const [leadStories, setLeadStories] = useState([]);

    async function getLeadStories() {
        try {
            const response = await axios.get(
                "http://localhost:8000/api/lead-stories"
            );
            setLeadStories(response.data);
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des articles :",
                error
            );
        }
    }

    useEffect(() => {
        getLeadStories();
    }, []);

    return (
        <div className="">
            <section className={styles.top}>
                <div className={styles.red_text} >
                    <p >Issue nº143</p>
                    <p >March 4, 2025</p>
                </div>
                <hr className={styles.line_separation_1}></hr>
                <hr className={styles.line_separation}></hr>
                <h2 className={styles.title}>NEWS</h2>
                <hr className={styles.line_separation}></hr>
                <div className={styles.carousel}>
                    {leadStories.map((article) => (
                        <Link
                            to={`/articles/${article.id}`}
                            key={article.id}
                            className={styles.carousel_item}
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
                <hr className={styles.line_separation}></hr>
                    <Link className={styles.button} to="/articles">Show more</Link>
                <hr className={styles.line_separation_bottom}></hr>
                
            </section>
        </div>
    );
};

export default Home;
