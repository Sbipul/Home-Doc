import React from 'react';
import {Container, Nav, Navbar,Button, Badge } from 'react-bootstrap';
import MiniNav from '../MiniNav/MiniNav';
import './Header.css'
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth'


const Header = () => {

    const {user,logOut} = useAuth()
    return (
        <div>
            <MiniNav/>

            <Navbar className="customBg text-light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className="d-flex align-items-center">
                        <h1 className="bannerHeading text-light">HOME-DOC</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} className="mx-3 text-light" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="mx-3 text-light" to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} className="mx-3 text-light" to="/blog">Blogs</Nav.Link>
                        <Nav.Link as={Link} className="mx-3 text-light" to="/about">About Us</Nav.Link>
                        <Nav.Link className="mx-3 text-dark" href="#action2"><Badge className="p-2 text-dark" bg="warning">{user?.displayName || user?.email  || 'User'}</Badge></Nav.Link>
                        <img className="rounded-circle me-3" style={{height:'50px',width:'50px',borderRadius:'50px',overflow:'hidden'}} src={user?.photoURL || 'https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png'} alt="" />
                        {
                            user.email ? <Button onClick={logOut}>Log out</Button> : <Nav.Link as={Link} className="mx-3 text-light" to="/log">Log in</Nav.Link>
                        }
                        
                        
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;