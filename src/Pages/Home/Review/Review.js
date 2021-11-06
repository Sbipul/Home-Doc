import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { FaCcJcb,FaEbay,FaIdeal,FaHips,FaMdb,FaDev,FaCcPaypal} from "react-icons/fa";
const Review = () => {
    return (
        <div className="clipReview py-3">
            <Container className="pt-5 ">
                <h1 className="fw-bold py-2 text-center">Have a look to Our client review</h1>
                
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 p-3">
                        <div>
                            <h2>Our happy Client</h2>
                            <p>Competitively Priced Plans Offer Quality Care for Your Employees. Get a Quote in Minutes. Enroll in a Health Plan with More Savings, Access & Simplicity for You & Your Employees. SignatureValue Advantage. Plans for Small Business. Get a Quote. Small Group Health Plans. Simple Plan Details. View and Customize Plans. Built for Small Business. Health Plans for SoCal.</p>
                            <div>
                                <FaCcJcb className="fs-1 me-3"/>
                                <FaEbay className="fs-1 me-3"/>
                                <FaIdeal className="fs-1 me-3"/>
                                <FaHips className="fs-1 me-3"/>
                                <FaMdb className="fs-1 me-3"/>
                                <FaDev className="fs-1 me-3"/>
                                <FaCcPaypal className="fs-1 me-3"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-3">
                        <Carousel>
                            <Carousel.Item>
                                <div className="carouselDiv">
                                    <img
                                    style={{height:'21vh'}}
                                    className="d-block w-100"
                                    src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268"
                                    alt="First slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                <h1 className="text-dark">Maria angello</h1>
                                <p className="text-dark">Competitively Priced Plans Offer Quality Care for Your Employees. Get a Quote in Minutes. </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carouselDiv">
                                    <img
                                    style={{height:'21vh'}}
                                    className="d-block w-100"
                                    src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/05/GettyImages-1267483017_header-1-1024x575.jpg?w=1155&h=1528"
                                    alt="Second slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                <h1 className="text-dark">Jenny wilstone</h1>
                                <p className="text-dark">Simple Plan Details. View and Customize Plans. Built for Small Business. Health Plans for SoCal.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carouselDiv">
                                    <img
                                    style={{height:'21vh'}}
                                    className="d-block w-100"
                                    src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003572/img/basic/a0003572_main.jpg?20200427164901&q=80&rw=750&rh=536"
                                    alt="Third slide"
                                    />
                                </div>
                                <Carousel.Caption>
                                <h1 className="text-dark">Lora katherine</h1>
                                <p className="text-dark"> SignatureValue Advantage. Plans for Small Business. Get a Quote. Small Group Health Plans.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Review;