import React, { useState } from "react"

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

    // State Object variables that corresponding to messages that will display if non-valid information is entered
    const [emailMessage, setEmailMessage] = useState("Email Address")
    const [phoneMessage, setPhoneMessage] = useState("Phone Number")

    // All of the various validation functions
    function validateEmail(emailAddress) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailAddress);
    }






    function formSubmission(event) {
        event.preventDefault();

        // Getting the respective values from the form submission
        const firstName = event.target.formGridFirstName.value.trim();
        const lastName = event.target.formGridLastName.value.trim();
        const emailAddress = event.target.formGridEmail.value.trim();
        const phoneNumber = event.target.formGridPhone.value.trim();
        const birthdayMonth = event.target.formGridBirthdayMonth.value.trim();
        const birthdayDay = event.target.formGridBirthdayDay.value.trim();
        const birthdayYear = event.target.formGridBirthdayYear.value.trim();
        const zipCode = event.target.formGridZipCode.value.trim();

        // Calling the various validation functions for each piece of user information
        const isEmailValid = validateEmail(emailAddress);



        // If any of the validation efforts FAIL, update corresponding messages
        if(isEmailValid === false) {
            setEmailMessage("Please enter a valid email")
        }




        // If ALL of the criteria have been validated...
        if (isEmailValid) {
            // Creating a SINGLE user object (JSON - Javascript Object Notation) for ease of file transfer purposes
            const finalUserObject = {
                firstName: firstName,
                lastName: lastName,
                emailAddress: emailAddress,
                phoneNumber: phoneNumber,
                birthdayMonth: birthdayMonth,
                birthdayDay: birthdayDay,
                birthdayYear: birthdayYear,
                zipCode: zipCode
            }
            // This user object JSON would be sent to a backend route for database file storage
            // For the sake of this project, simply console log for record
            console.log(finalUserObject)




            // HIDE THE FORM UPON SUCCESS



        }
    }

    return (
        <div>
            <Container>

                <div id="postcardContainer"
                    style={{
                        backgroundImage: `url(${Airmail})`,

                    }}
                >

                    <Container>
                        <Form onSubmit={formSubmission}>
                            <Form.Row as={Col}>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Jane" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Smith" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>{emailMessage}</Form.Label>
                                <Form.Control type="text" placeholder="jane.smith@email.com" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>{phoneMessage}</Form.Label>
                                <Form.Control type="text" placeholder="123-456-7890" />
                            </Form.Group>

                            <Col>
                                Birthday
                            </Col>

                            <Form.Row as={Col}>

                                <Form.Group as={Col} controlId="formGridBirthdayMonth">
                                    <Form.Label>Month</Form.Label>
                                    <Form.Control type="text" placeholder="06" />
                                </Form.Group>


                                <Form.Group as={Col} controlId="formGridBirthdayDay">
                                    <Form.Label>Day</Form.Label>
                                    <Form.Control type="text" placeholder="10" />
                                </Form.Group>


                                <Form.Group as={Col} controlId="formGridBirthdayYear">
                                    <Form.Label>Year</Form.Label>
                                    <Form.Control type="text" placeholder="1971" />
                                </Form.Group>

                            </Form.Row>

                            <Form.Group as={Col} controlId="formGridZipCode">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="60614" />
                            </Form.Group>

                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Container>

                </div>
            </Container>
        </div>
    );
}

export default Contact;
