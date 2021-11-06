import React from 'react';
import { Container } from 'react-bootstrap';
import drImg from '../../../uitilities/long-company-name-logo-design-3.jpg'
import { BsCheckLg } from "react-icons/bs";
const Feature = () => {
    return (
        <Container className="py-2">
            <h2 className="fw-bold text-center bannerHeading">Why We are <span className="text-danger">Unique</span></h2>
            <div className="row align-items-center py-3">
                <div className="col-12 col-md-6">
                    <div>
                        <img style={{height:'430px'}} className="w-100" src="https://images.theconversation.com/files/59470/original/bmc3zndq-1411073854.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="text-center border-bottom border-2 p-3 shadow-lg">
                        <p>Why Choose Us?</p>
                        <h1 className="fw-bold">WE CARE TO YOU</h1>
                        <p className="py-2">Obtain Health Insurance With a Variety of Options Based on Your Needs. At Pennie, We Focus on Connecting PA Residents </p>
                        <div className="d-flex align-items-center justify-content-around">
                            <h5>Dr.Goerge De-Costa</h5>
                            <div className="featureImg">
                                <img className="w-100 h-100" src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" />
                            </div>
                            <div className="featureImg2">
                                <img className="w-100 h-100" src={drImg} alt="" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-around py-3">
                            <div className="text-start">
                                <p><BsCheckLg className="me-2 fw-bold text-success"/>24 hour available</p>
                                <p><BsCheckLg className="me-2 fw-bold text-success"/>Online service</p>
                                <p><BsCheckLg className="me-2 fw-bold text-success"/>With lowcost</p>
                            </div>
                            <div className="text-start">
                                <p><BsCheckLg className="me-2 fw-bold text-success"/>Amazing environment</p>
                                <p><BsCheckLg className="me-2 fw-bold text-success"/>ofessional doctors</p>
                                <p><BsCheckLg className="me-2 fw-bold text-success"/>Free booking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Feature;