import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill,BsFillEnvelopeFill,BsGeoAltFill,BsFacebook,BsTwitter,BsWhatsapp,BsLinkedin } from "react-icons/bs";

const MiniNav = () => {
    return (
        <div className="mainMiniNav py-1 bg-primary text-light">
            <Container>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="miniNav">
                            <Link className="text-light"><BsFillTelephoneFill className="me-3"/>Call Use Now : 010***5448**7</Link>
                            <Link className="text-light"><BsFillEnvelopeFill className="me-3"/>abcd@gmail.com</Link>
                            <Link className="text-light"><BsGeoAltFill className="me-3"/>Find Our Location</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="socials text-end">
                            <Link className="text-light"><BsFacebook className="ms-3"/></Link>
                            <Link className="text-light"><BsTwitter className="ms-3"/></Link>
                            <Link className="text-light"><BsWhatsapp className="ms-3"/></Link>
                            <Link className="text-light"><BsLinkedin className="ms-3"/></Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MiniNav;