// src/pages/Info.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Info.css';

const Info = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const apiKey = '0eAEKTpTukoAdiWAmW5BwrDGyM6dsM1BGA8rwk1TFoXHQ0iC';

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`);
                setNews(response.data.news);
            } catch (err) {
                setError('Error fetching news');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [apiKey]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="info-container">
            <h1>Informasi Berita</h1>
            {news.map((article, index) => (
                <div key={index} className="info-card">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Baca Selengkapnya</a>
                </div>
            ))}
        </div>
    );
};

export default Info;
