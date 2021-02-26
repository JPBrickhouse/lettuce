import React from "react"

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

// Importing the custom stylesheet
import "./ContactStyles.css"

// Importing the airmail image
import Airmail from "./airmail.jpg"


const Contact = () => {

    function formSubmission(event) {
        event.preventDefault();
        
        console.log("Hello");
    }

    return (
        <div>
            <Container>

                <div id="postcardContainer"
                    style={{
                        backgroundImage: `url(${Airmail})`,

                    }}
                >
                    <div>
                        <Form onSubmit={formSubmission}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Jane" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Smith" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="text" placeholder="jane.smith@email.com" />
                            </Form.Group>

                            <Form.Group controlId="formGridPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="123-456-7890" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridBirthday">
                                    <Form.Label>Birthday</Form.Label>
                                    <Form.Control type="text" placeholder="06/10/1971" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZipCode">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="text" placeholder="60614" />
                                </Form.Group>
                            </Form.Row>

                            <Button type="submit">Submit form</Button>
                        </Form>
                    </div>
                </div>

            </Container>
        </div>
    );
}

export default Contact;
