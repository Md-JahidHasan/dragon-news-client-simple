import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-5'>
                <Container>
                    <Navbar.Brand href="#home"><Link to='/'>DragonNEWS</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.photoURL ? <Image
                                style={{height:'30px'}}
                                roundedCircle
                                src={user.photoURL}
                                ></Image>: <FaUser></FaUser>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        {
                            user?.uid? <>
                            <span>{user?.displayName}</span>
                            <button onClick={handleLogOut}>Logout</button>
                            </>: <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Signin</Link>
                            </>
                        }
                        
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none text-white'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;