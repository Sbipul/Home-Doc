import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../../uitilities/banner.jpg'


const Banner = () => {
    return (
        <div className="bannerBg mb-5">
            <Container className="p-0">
            <div className="banner position-relative">
                <img style={{objectFit:'cover'}} className="w-100 h-100" src={banner} alt="" />
                <div className="position-absolute w-100 h-100 top-0 start-0">
                    <div className="d-flex align-items-center h-100 w-100">
                        <div className="bannerText">
                            <h1 className="bannerHeading text-primary">CHECK YOUR BODY <br /> <span>AND get FIT YOUR HEALTH</span></h1>
                            <div className="passage">
                                <p>You may suspect you have dry, oily, or sensitive skin, but do you really know your skin type? Knowing your true skin type can help the next time you’re in the cosmetics aisle. In fact, using the wrong products — or even popularized Internet hacks — for your skin type could worsen acne, dryness, or other skin problems.</p>
                            </div>
                            <button className="bannerBtn">Get Start Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Banner;