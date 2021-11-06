import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FaPlusCircle } from "react-icons/fa";

const Service = ({service}) => {
    const history = useHistory()
    const {id,name,des,img} = service

    const viewDetails = () =>{
        history.push(`/details/${id}`)
    }
    return (
        <Col>
            <Card className="mx-auto" style={{border:'2px solid white shadow-lg',width:'95%'}}>
                <Card.Img style={{height:'220px'}} variant="top" src={img} />
                <Card.Body className="position-relative pt-5">
                <div className="position-absolute cardIcon"><FaPlusCircle/></div>
                <Card.Title>{name?.slice(0,30)}</Card.Title>
                {/* <Card.Text className="fw-bold fs-6">${cost}</Card.Text> */}
                <Card.Text>{des?.slice(0,70)}</Card.Text>
                <Button onClick={()=>viewDetails(id)} className="btn-primary">View Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;