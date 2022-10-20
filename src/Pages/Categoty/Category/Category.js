import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h2>this is category</h2>
        </div>
    );
};

export default Category;