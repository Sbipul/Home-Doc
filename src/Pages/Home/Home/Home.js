import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Review/>
            <Feature/>
        </div>
    );
};

export default Home;