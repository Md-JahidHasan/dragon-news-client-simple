import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const {image_url, details, title, author, category_id} = news;
    return (
        <div>
            <h2>This is news</h2>
            <Card style={{ width: 'full' }}>
                <Card.Img variant="top" src={image_url} />
                 <div className='d-flex justify-content-between mt-2'>
                    <div className='d-flex '>
                        <div className="image me-2">
                            <img width='50px' className='rounded' src={author.img} alt="" />
                        </div>
                        <div className="name">
                            <h6 className='mb-0'>{author?.name}</h6>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div className='icon d-flex align-items-center'>
                        <FaShareAlt></FaShareAlt>
                        <FaBookmark></FaBookmark>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news like this category</Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;