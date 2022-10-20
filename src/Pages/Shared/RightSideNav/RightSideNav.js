import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button variant="outline-primary" className='mb-1'> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark" className='mb-5'><FaGithub></FaGithub>  Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;