import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <h1 className="fw-bold">About us</h1>
                <p className="text-center w-50 mx-auto"></p>

                <div className="py-5">
                    <h3 className="text-warning">HOME_DOC, Inc. - Owned and Operated by WebMD and part of the WebMD Network</h3>
                    <p>MedicineNet is an online, healthcare media publishing company. We provide easy-to-read, in-depth, authoritative medical information for consumers via its robust, user-friendly, interactive website.
                    Founded in 1996, MedicineNet.com has had a highly accomplished, uniquely experienced team of qualified executives in the fields of medicine, healthcare, Internet technology, and business to bring you the most comprehensive, sought-after healthcare information anywhere. Nationally recognized, doctor-produced by a network of more than 70 U.S. board-certified physicians, MedicineNet.com and onhealth.com are trusted sources Webster's New World Medical Dictionary - authored by MedicineNet  for online health and medical information. The doctors of   MedicineNet are also proud to author Webster's New World™   Medical Dictionary First, Second and Third Editions (May, 2008)   John Wiley & Sons, Inc.; ISBN-10: 0470189282.</p>
                    <img src="https://st2.depositphotos.com/1017986/5785/i/950/depositphotos_57858405-stock-photo-team-or-group-of-doctors.jpg" alt="" className="w-100" />
                </div>
                <div className="row py-5">
                    <div className="col-12 col-md-8">
                        <h3>Corrections Policy</h3>
                        <p className="jstfy">MedicineNet.com, a WebMD Company, is committed to making corrections or clarifications to original content when it deems necessary. We take prompt action to edit even minor errors like spelling, grammar, or stylistic changes. Because style changes do not change the meaning of the content, those kinds of "style" changes will be updated on our site without notice.

                        If we identify errors that are material to the content, we will update the content and note those corrections on this page for sixty (60) days after the correction by linking to the corrected version of the original article and note the correction here for your reference. This corrections policy only applies to MedicineNet.com original content, including, but not limited to, news, feature articles, or original medical reference material. Any corrections to licensed or third party content are the responsibility of the publisher.

                        If you believe you have found an error in any of our content, let us know by sending an email to our Customer Service team using the "Contact Us" links in the footer section of our Site.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4>Editorial Policy</h4>
                        <p className="text-primary">MedicineNet.com is an Internet site designed to provide educational health information for the general public. The aim of MedicineNet.com is to ensure that this information is reliable, integrated, and easy to access, read, and understand. MedicineNet.com's health information, or content, intended to provide the viewer with a better understanding of health issues.</p>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12 col-md-4">
                        <h5>Health Categories</h5>
                        <p>We are a network of physicians and Allied Health Professionals working together to provide the public with current, comprehensive medical information, written in easy to understand language. Our role is that of educator. To learn more about MedicineNet, Inc., please visit our About Us section.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <img className="w-100" src="https://nationaltoday.com/wp-content/uploads/2020/03/Doctors-1.jpg" alt="" />
                    </div>
                    <div className="col-12 col-md-4">
                        <h5>Corrections Policy</h5>
                        <p>MedicineNet.com, a WebMD Company, is committed to making corrections or clarifications to original content when it deems necessary. We take prompt action to edit even minor errors like spelling, grammar, or stylistic changes. Because style changes do not change the meaning of the content, those kinds of "style" changes will be updated on our site without notice.</p>
                    </div>
                </div>

                <div className="py-5">
                    <h1>Contact Us</h1>
                    <div className="row">
                        <div className="col-12 col-md-5">
                        <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Number</Form.Label>
                            <Form.Control type="phone" placeholder="Mobile Number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <img src="https://photos.healthgrades.com/homeimages/find-a-doctor.png" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;