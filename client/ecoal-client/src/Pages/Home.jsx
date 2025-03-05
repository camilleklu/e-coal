import React from "react";
import Navbar from "../Components/Navbar";
import { Carousel, Button } from "antd";
import ArticleCard from "../Components/ArticleCard";

// const articles = [
//     {
//         id: 1,
//         title: "New Album Release",
//         summary: "Check out the latest album...",
//     },
//     {
//         id: 2,
//         title: "Live Concert Updates",
//         summary: "Upcoming events and tours...",
//     },
//     { id: 3, title: "Top 10 Songs", summary: "Trending songs this week..." },
//     {
//         id: 4,
//         title: "Interview with Artist X",
//         summary: "Exclusive insights...",
//     },
// ];

const Home = () => {
    const data = [
        {
            id: 1,
            title: "New Album Release",
            mediaURL:
                "https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-9.jpg",
        },
        {
            id: 2,
            title: "New Album Release",
            mediaURL:
                "https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-9.jpg",
        },
        {
            id: 3,
            title: "New Album Release",
            mediaURL:
                "https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-9.jpg",
        },
    ];
    return (
        <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center p-4 max-w-sm mx-auto">
            <section className="mt-6 text-center w-full">
                <p className="text-sm text-gray-600 border-b border-black pb-1 flex justify-between px-4">
                    <span className="text-red-500">Issue nº143</span>
                    <span className="text-red-500">March 4, 2025</span>
                </p>
                <h2 className="text-3xl font-extrabold italic mt-4">NEWS</h2>
                {/* Carrossel de notícias
                <Carousel
                    autoplay
                    className="mt-6 w-full max-w-xs border-2 border-black rounded-lg overflow-hidden"
                >
                    {articles.map((article) => (
                        <div key={article.id} className="p-2">
                            <ArticleCard
                                title={article.title}
                                summary={article.summary}
                            />
                        </div>
                    ))}
                </Carousel> */}

                {/* <Button
                    type="primary"
                    className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-600"
                >
                    VOIR PLUS
                </Button> */}
                {data.map((d) => (
                    <div key={d.id} className="p-2">
                        <ArticleCard title={d.title} media={d.mediaURL} />
                    </div>
                ))}

                <hr className="mt-6 border-black" />
            </section>
        </div>
    );
};

export default Home;
