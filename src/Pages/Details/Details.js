import React, { useEffect, useState } from 'react';
import { Badge, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const {id} = useParams()
    const [selected,setSelected] = useState({})
    useEffect(()=>{
        fetch('/services.json')
        .then(res =>res.json())
        .then(data =>setSelected(data.find(select => select.id === +id)))
    },[])
    return (
        <Container>
            <h1 className="bannerHeading text-center">{selected?.name?.toUpperCase()}</h1>
            <div className="row py-5">
                <div className="col-12 col-md-8">
                    <div className="">
                        <img style={{height:'420px'}} className="w-100" src={selected.img} alt="" />
                        <h2 className="fw-bold">How it will get improve you?</h2>
                        <p>{selected.para}</p>
                        <div className="py-5 w-100 mx-auto text-center">
                        <Link to="/home"><Button className="me-5">Back to previous page</Button></Link>
                        <Button className="me-5 bg-success">Confirm this package</Button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div>
                        
                        <h4>Service No : <Badge bg="warning">{selected.id}</Badge></h4>
                        <Badge bg="info">{selected.name}</Badge>
                        <p className="text-dark p-2">{selected.des}</p>
                        <p className="text-dark p-2 fs-3">Cost : ${selected.cost}</p>
                        <p className=" p-5 text-light bg-primary">{selected.det}</p>
                        
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Details;