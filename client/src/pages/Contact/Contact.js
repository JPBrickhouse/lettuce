import React, { useState } from "react"

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

// Importing the custom stylesheet
import "./ContactStyles.css"

// Importing the airmail image
import Airmail from "./airmail.jpg"


const Contact = () => {

    // State Object variables that corresponding to messages that will display if non-valid information is entered
    const [firstNameMessage, setFirstNameMessage] = useState("First Name")
    const [lastNameMessage, setLastNameMessage] = useState("Last Name")
    const [emailMessage, setEmailMessage] = useState("Email Address");
    const [phoneMessage, setPhoneMessage] = useState("Phone Number");
    const [monthMessage, setMonthMessage] = useState("Month");
    const [dateMessage, setDateMessage] = useState("Day");
    const [yearMessage, setYearMessage] = useState("Year");
    const [zipCodeMessage, setZipCodeMessage] = useState("Zip Code")

    // ALL of the various validation functions
    // NAMES (A to Z case-insensitive)
    function validateName(name) {
        return /^[a-zA-Z]+$/g.test(name);
    }

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
    // YEAR (numbers 0000 to 9999)
    function validateYear(year) {
        return /^\d{4}$/gm.test(year);
    }
    // ZIP CODE (numbers 00000 to 99999)
    function validateZipcode(zipCode) {
        return /^\d{5}$/gm.test(zipCode);
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
        const isFirstNameValid = validateName(firstName);
        const isLastNameValid = validateName(lastName);
        const isEmailValid = validateEmail(emailAddress);
        const isPhoneValid = validatePhone(phoneNumber);
        const isMonthValid = validateMonth(birthdayMonth);
        const isDateValid = validateDate(birthdayDay);
        const isYearValid = validateYear(birthdayYear);
        const isZipValid = validateZipcode(zipCode)

        // If any of the validation efforts FAIL, update corresponding messages
        if (isFirstNameValid === false) {
            setFirstNameMessage("Please enter valid first name")
        }
        if (isLastNameValid === false) {
            setLastNameMessage("Please enter valid last name")
        }
        if (isEmailValid === false) {
            setEmailMessage("Please enter a valid email");
        }
        if (isPhoneValid === false) {
            setPhoneMessage("Please enter a valid phone");
        }
        if (isMonthValid === false) {
            setMonthMessage("Valid month 01-12");
        }
        if (isDateValid === false) {
            setDateMessage("Valid date 01-31");
        }
        if (isYearValid === false) {
            setYearMessage("Please enter valid year")
        }
        if (isZipValid === false) {
            setZipCodeMessage("Please enter valid zip code")
        }

        // If ALL of the criteria have been validated as true...
        if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isMonthValid && isDateValid && isYearValid) {
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

                <div>
                    Fill out a postcard below and we'll let you know about fresh deals on our fresh meals, along with other breaking news about ASAP Poke!

                    Why do we need your birthday? For your annual birthday rewards, of course!

                    Why do we need your zip code? To let you know about other Lettuce restaurants in your neighborhood!
                </div>


                <div id="postcardImage" style={{ backgroundImage: `url(${Airmail})` }}>
                    <br />
                    <br />
                    <Container>
                        <Form onSubmit={formSubmission}>

                            <Form.Row as={Col}>
                                <Col sm={4}>
                                    <Form.Group controlId="formGridFirstName">
                                        <Form.Label>{firstNameMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="Jane" />
                                    </Form.Group>
                                </Col>

                                <Col sm={4}>
                                    <Form.Group controlId="formGridLastName">
                                        <Form.Label>{lastNameMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="Smith" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row as={Col}>
                                <Col sm={4}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label>{emailMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="jane.smith@email.com" />
                                    </Form.Group>
                                </Col>

                                <Col sm={4}>
                                    <Form.Group controlId="formGridPhone">
                                        <Form.Label>{phoneMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="123-456-7890 or 1234567890" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Col>
                                Birthday
                            </Col>

                            <Form.Row as={Col}>
                                <Col sm={2}>
                                    <Form.Group controlId="formGridBirthdayMonth">
                                        <Form.Label>{monthMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="06" />
                                    </Form.Group>
                                </Col>

                                <Col sm={2}>
                                    <Form.Group controlId="formGridBirthdayDay">
                                        <Form.Label>{dateMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="10" />
                                    </Form.Group>
                                </Col>

                                <Col sm={2}>
                                    <Form.Group controlId="formGridBirthdayYear">
                                        <Form.Label>{yearMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="1971" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row as={Col}>
                                <Col sm={2}>
                                    <Form.Group controlId="formGridZipCode">
                                        <Form.Label>{zipCodeMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="60614" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Col>
                                <Button type="submit" className="sBtn">SIGN UP</Button>
                            </Col>

                        </Form>
                    </Container>
                    <br />
                    <br />
                    <br />
                </div>

            </Container>
        </div>
    );
}

export default Contact;
