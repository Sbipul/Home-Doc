import React from 'react';
import { Badge, Button, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <div>
                    <h1 className="bannerHeading">WELCOME TO OUR BLOG</h1>
                </div>
                <div className="row pb-5">
                    <div className="col-12 col-md-4">
                        <div style={{height:'220px',width:'100%',objectFit:'cover'}}>
                            <img className="w-100 h-100" src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt="" />
                        </div>
                        <h3>Dr.Paulo</h3>
                        <Badge className="text-center" bg="warning" text="dark">Cemo theripist</Badge>
                        
                    </div>
                    <div className="col-12 col-md-4">
                        <div style={{height:'220px',width:'100%',objectFit:'cover'}}>
                            <img className="w-100 h-100" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg" alt="" />
                        </div>
                        <h3>Dr.Janet</h3>
                        <Badge className="text-center" bg="info" text="dark">Child specialist</Badge>
                    </div>
                    <div className="col-12 col-md-4">
                        <div style={{height:'220px',width:'100%',objectFit:'cover'}}>
                            <img className="w-100 h-100" src="https://media.istockphoto.com/photos/headshot-of-mature-50-years-old-asian-business-woman-on-grey-picture-id1317784594?b=1&k=20&m=1317784594&s=170667a&w=0&h=BV1ABS-tDluO-Qa0myWpstZFJd6navrs7OezTyNHnVg=" alt="" />
                        </div>
                        <h3>Dr.Stella morn</h3>
                        <Badge className="text-center" bg="warning" text="dark">Women specialist</Badge>
                    </div>
                </div>


                <div className="row py-5">
                    <div className="col-12 col-md-4">
                        <div style={{height:'220px',width:'100%',objectFit:'cover'}}>
                            <img className="w-100 h-100" src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div>
                            <h2>Global Leader in Insurance Risk Management</h2>
                            <p>Our consulting, brokerage, and claims advocacy services leverage data, technology, and analytics to help you better quantify and manage risk. Marsh is the world’s leading insurance broker and risk advisor. We protect and promote possibility – helping our clients dream bigger, reach further, and plan for the opportunities ahead.</p>
                            <Button>Read More</Button>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                <div className="col-12 col-md-8">
                        <div>
                            <h2>Things to know before picking insurance plan ...</h2>
                            <p>Choosing a g a health insurance plan can be complicated. Knowing just a few things before you compare plans can make it simpler.. The 4 “metal” categories: There are 4 categories of health insurance plans: Bronze, Silver, Gold, and Platinum.These categories show how you and your plan share costs. The 4 “metal” categories: There are 4 categories of health insurance plans: Bronze, Silver, Gold, and Platinum.These categories show how you and your plan share costs.</p>
                            <Button>Read More</Button>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div style={{height:'220px',width:'100%',objectFit:'cover'}}>
                            <img className="w-100 h-100" src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg" alt="" />
                        </div>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Blog;