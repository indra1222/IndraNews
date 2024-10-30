// src/pages/News.js
import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const newsData = [
    {
        id: 1,
        title: "Floods in Spain's Valencia Region Kill Dozens",
        description: "Over 1,000 soldiers from Spain's emergency response units were deployed to the devastated areas in the eastern part of the country.",
        content: "In Spain, heavy rainfall has caused severe flooding, resulting in the deaths of many individuals. Emergency services have been deployed to assist in the rescue efforts..."
    },
    {
        id: 2,
        title: "Democratic Lawyer Stymied Trump in 2020.",
        description: "Marc Elias helped to pave the way for big money in politics.",
        content: "Marc Elias, a prominent attorney, played a significant role in the 2020 election. His efforts were focused on ensuring fairness and transparency..."
    },
    // Tambahkan berita lainnya di sini
];

const News = () => {
    return (
        <div className="news-container">
            <h1>Berita Terbaru</h1>
            {newsData.map(article => (
                <div key={article.id} className="news-card">
                    <Link to={`/news/${article.id}`}>
                        <h2>{article.title}</h2>
                    </Link>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default News;
