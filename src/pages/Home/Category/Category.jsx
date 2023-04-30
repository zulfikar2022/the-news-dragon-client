// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Category.css';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCart/NewsCard';

const Category = () => {
    // eslint-disable-next-line no-unused-vars
    const {id} = useParams();
    const categoryNews = useLoaderData();
    console.log(categoryNews);

    return (
        <div>
        {id && <h2>This Category news: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard key={news._id} news= {news} ></NewsCard>)
            }
        </div>
    );
};

export default Category;