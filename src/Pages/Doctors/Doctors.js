import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Doctors = () => {
    return (
        <div>
            <Container>
                <div className="py-5">
            <h4 className="text-end">we are available in<span className="text-primary bannerHeading">MORNING SHIFT</span></h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Serial</th>
                    <th>Doctor Name</th>
                    <th>Specialist</th>
                    <th>Schedule</th>
                    <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Jhankar Mahbub</td>
                    <td>Nurology</td>
                    <td>8am-10am</td>
                    <td>04545445</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Sagor Biswas</td>
                    <td>Pain</td>
                    <td>10am-12pm</td>
                    <td>01235454</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Alamin hawladar</td>
                    <td>skin</td>
                    <td>2pm-4pm</td>
                    <td>0123645</td>
                    </tr>
                </tbody>
                </Table>
            </div>
            <div className="pb-5">
            <h4><span className="bannerHeading text-primary">EVENING SHIFT</span> any time when you need...</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Serial</th>
                    <th>Doctor Name</th>
                    <th>Specialist</th>
                    <th>Schedule</th>
                    <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Cardiology</td>
                    <td>4pm-8pm</td>
                    <td>0165445</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Dermatology</td>
                    <td>8pm-10pm</td>
                    <td>01235454</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>Lungs</td>
                    <td>10pm-2pm</td>
                    <td>0123645</td>
                    </tr>
                </tbody>
                </Table>
            </div>
            
            </Container>
        </div>
    );
};

export default Doctors;