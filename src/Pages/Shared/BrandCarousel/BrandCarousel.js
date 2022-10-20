import React from 'react';
import './BrandCarousel.css';
import { Carousel } from 'react-bootstrap';
import Image1 from '../../../assets/brands/image-1.jpeg'
import Image2 from '../../../assets/brands/image-2.jpeg'
import Image3 from '../../../assets/brands/image-3.jpeg'

const BrandCarousel = () => {
    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item>
                    <img
                    height='140px'
                    className="d-block w-100"
                    src={Image1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height='140px'
                    className="d-block w-100"
                    src={Image2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height='140px'
                    className="d-block w-100"
                    src={Image3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default BrandCarousel;