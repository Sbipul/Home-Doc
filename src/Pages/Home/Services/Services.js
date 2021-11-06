import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const {services} = useAuth()

    return (
        <Container>
            <div className="text-center w-100 mx-auto py-5 service">
                <h1 className="servicesHeading"><span className="hoverStyle">OUR</span> <span className="hoverStyle">CARING</span> <span className="hoverStyle">MENU</span></h1>
                <p className="w-75 mx-auto">There are 4 categories of health insurance plans: Bronze, Silver, Gold, and Platinum.These categories show how you and your plan share costs. The 4 “metal” categories: There are 4 categories of health insurance plans: Bronze, Silver, Gold, and Platinum.These categories show how you and your plan share costs.</p>
            </div>
            <Row xs={1} md={3} className="g-4 pt-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;