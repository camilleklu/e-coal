import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Carousel, Button } from "antd";
import ArticleCard from "../Components/ArticleCard";
import axios from "axios";

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
            <section className="">
                <p className="">
                    <span className="">Issue nº143</span>
                    <span className="">March 4, 2025</span>
                </p>
                <h2 className="">NEWS</h2>
                <div className="carousel">
                    {leadStories.map((article) => (
                        <Link
                            to={`/articles/${article.id}`}
                            key={article.id}
                            className="carousel-item"
                        >
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: article.title,
                                }}
                            ></h2>
                            <img src={article.thumbnailURL} />
                        </div>
                    ))}
                </div>
                <hr className="" />
            </section>
        </div>
    );
};

export default Home;
