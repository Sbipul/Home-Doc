import React from 'react';
import { Badge, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Container>
            <div style={{height:'70vh',objectFit:'cover',width:'100%',position:'relative'}}>
                <img className="w-100 h-100" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
                <div className="position-absolute top-0 start-0 h-100 w-100 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 style={{fontSize:'10rem'}} className="text-center">404</h1>
                        <h2 className="text-center"><Badge bg="danger" className="text-light">Page not found</Badge></h2><br />
                        <Link className="text-center" to="/home">
                        <Button className="w-100">Back to home</Button>
                        </Link>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default ErrorPage;