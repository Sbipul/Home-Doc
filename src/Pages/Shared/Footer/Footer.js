import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo4 from '../../../uitilities/three-green-leaves-flat-logo-template-vector-4317047-removebg-preview.png'
const Footer = () => {
    return (
        <div>
            <div className="py-5 footer shadow-lg">
            <Container>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div>
                            <div className="w-50 mx-auto">
                                <img src={logo4} alt="" className="w-100" />
                            </div>
                            <h2 className="text-center pt-2">HOME -DOC</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>
                            <h4>Emmergency Services</h4>
                            <Link className="text-decoration-none text-light"><p>Ambulence services</p></Link>
                            <Link className="text-decoration-none text-light"><p>Emmergency medicine</p></Link>
                            <Link className="text-decoration-none text-light"><p>Booking policy</p></Link>
                            <Link className="text-decoration-none text-light"><p>Discount offer</p></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>
                            <h4>Quick links</h4>
                            <Link className="text-decoration-none text-light"><p>update news</p></Link>
                            <Link className="text-decoration-none text-light"><p>appointment fees</p></Link>
                            <Link className="text-decoration-none text-light"><p>address and contacts</p></Link>
                            <Link className="text-decoration-none text-light"><p>usefull information</p></Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>
                            <h4>Mini gallery</h4>
                            <div className="gallery">
                                <img className="w-100" src="https://media.istockphoto.com/photos/senior-woman-with-a-walking-cane-picture-id820754302?k=20&m=820754302&s=612x612&w=0&h=-NclNQyAhONJfgPHK3_uce7N14u1UGsd5vpAVGgQD1E=" alt="" />
                                <img className="w-100" src="https://media.istockphoto.com/photos/happy-senior-man-picture-id1256061324?b=1&k=20&m=1256061324&s=170667a&w=0&h=BnjFNPYcs5yWu5w3ktfyzQt2W3gwtGpiOBWoDDDVkms=" alt="" />
                                <img className="w-100" src="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg" alt="" />
                                <img className="w-100" src="https://media.istockphoto.com/photos/fit-man-standing-outdoors-in-a-city-picture-id1299360127?b=1&k=20&m=1299360127&s=170667a&w=0&h=1Rvw_UPTnj1LkB543cuCjiLM0xbIdjjin0rw6yaL8bc=" alt="" />
                                <img className="w-100" src="https://cdn.cdnparenting.com/articles/2019/03/13145953/1301649067-H.jpg" alt="" />
                                <img className="w-100" src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </Container>
            </div>
            <div className="py-2 bg-primary">
                    <p className="text-center text-light p-0 m-0">All rights reserved by bipul chandro Roy</p>
            </div>
        </div>
    );
};

export default Footer;