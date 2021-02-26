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
    const [monthMessage, setMonthMessage] = useState("Month")
    const [dateMessage, setDateMessage] = useState("Day")

    // ALL of the various validation functions
    // EMAIL (text@text.text)
    function validateEmail(emailAddress) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailAddress);
    }
    // PHONE (various formats of 123-456-7890)
    function validatePhone(phoneNumber) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phoneNumber);
    }
    // MONTH (numbers 01 to 12)
    function validateMonth(month) {
        return /(^0?[1-9]$)|(^1[0-2]$)/gm.test(month);
    }
    // DATE (numbers 01 to 31)
    function validateDate(date) {
        return /(0[1-9]|[12]\d|3[01])/gm.test(date);
    }



    // OVERALL Function that runs when the "Submit" button is clicked
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
        const isPhoneValid = validatePhone(phoneNumber);
        const isMonthValid = validateMonth(birthdayMonth);
        const isDateValid = validateDate(birthdayDay);

        // If any of the validation efforts FAIL, update corresponding messages
        if(isEmailValid === false) {
            setEmailMessage("Please enter a valid email");
        }
        if(isPhoneValid === false) {
            setPhoneMessage("Please enter a valid phone");
        }
        if(isMonthValid === false) {
            setMonthMessage("Please enter valid month, 01 to 12");
        }
        if(isDateValid === false) {
            setDateMessage("Please enter valid date, 01 to 31");
        }

        // If ALL of the criteria have been validated as true...
        if (isEmailValid && isPhoneValid && isMonthValid && isDateValid) {
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
            // Nice little message and picture?!?


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
                                <Form.Control type="text" placeholder="123-456-7890 or 1234567890" />
                            </Form.Group>

                            <Col>
                                Birthday
                            </Col>

                            <Form.Row as={Col}>

                                <Form.Group as={Col} controlId="formGridBirthdayMonth">
                                    <Form.Label>{monthMessage}</Form.Label>
                                    <Form.Control type="text" placeholder="06" />
                                </Form.Group>


                                <Form.Group as={Col} controlId="formGridBirthdayDay">
                                    <Form.Label>{dateMessage}</Form.Label>
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
