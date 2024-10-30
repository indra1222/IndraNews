// src/pages/NewsDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const apiKey = '0eAEKTpTukoAdiWAmW5BwrDGyM6dsM1BGA8rwk1TFoXHQ0iC';

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(`https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}`);
                const newsData = response.data.news;

                // Ambil artikel berdasarkan ID
                if (newsData[id]) {
                    setArticle(newsData[id]);
                } else {
                    setError('Article not found');
                }
            } catch (err) {
                setError('Error fetching news detail');
            } finally {
                setLoading(false);
            }
        };

        fetchDetail();
    }, [id, apiKey]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="news-detail-container">
            {article ? (
                <>
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <p>{article.content || ""}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Baca Selengkapnya</a>
                </>
            ) : (
                <p>Berita tidak ditemukan.</p>
            )}
        </div>
    );
};

export default NewsDetail;
