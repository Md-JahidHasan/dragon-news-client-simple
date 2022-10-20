import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummeryCard = ({news}) => {
    console.log(news);
    const {_id, author, title, total_view, details, image_url, rating} = news;
    return (
        <Card className="mb-4">
            <Card.Header>
                <div className='d-flex justify-content-between'>
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
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                {
                   details.length >200 ?
                   <p>{details.slice(0, 240) +'...'} <Link to={`/news/${_id}`}>Read More</Link></p>: <p>{details}</p>
                }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex justify-content-between'>
                    <div>
                        <FaStar className='text-danger'></FaStar> {rating.number}
                    </div>
                    <div>
                        <FaEye className='text-warning'></FaEye> {total_view}
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummeryCard;