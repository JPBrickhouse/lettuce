import React, { useState } from "react"

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

// Importing the custom stylesheet
import "./ContactStyles.css"

// Importing the postcard and thank you images
import postCardTwo from "./postcard2.jpg"
import formThankYou from "./formThanks.jpg"

const Contact = () => {

    // State object corresponding to the success of the form submission
    // (Validation will prevent an improper form submission, so this only gets set to true when the form is submitted correctly)
    const [formSubmitted, setFormSubmitted] = useState(false);

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
        console.log(zipCode)
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

        // A function that runs the style updates to provide feedback messages on form submission
        // It takes in an element ID and desired hex code color
        function styleUpdate(elementID, msgHEXcolor) {
            document.getElementById(elementID).style.color = msgHEXcolor;
        }

        // A function that runs switch cases for each of the validation checks
        // It takes in a validation check, corresponding element ID, associated stateMessageFunction, and relevant success and fail messages
        // Upon true, green success messages are returned
        // Upon false, red error messages are returned
        function checkTheSwitchCase(validationCheck, elementID, stateMessageFunction, successMsg, failMsg) {
            switch (validationCheck) {
                case true:
                    styleUpdate(elementID, "#028A0F");
                    stateMessageFunction(successMsg);
                    break;
                case false:
                    styleUpdate(elementID, "#FF0000");
                    stateMessageFunction(failMsg);
                    break;
            }
        }

        // If ALL of the criteria have been validated as true...
        if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isMonthValid && isDateValid && isYearValid && isZipValid) {
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

            // Hide the form and associated content
            let divsToHide = document.getElementsByClassName("hideOnSubmit")
            for (let i=0; i<divsToHide.length; i++) {
                divsToHide[i].style.display = "none";
            }

            // Set the formSubmitted variable to true, which will trip the ternary operator check
            setFormSubmitted(true)
        }
        // the else statement runs if any of the validations has been found to be false
        else {
            // Running the switch cases for each of the validation checks
            checkTheSwitchCase(isFirstNameValid, "firstNameID", setFirstNameMessage, "First name - success!", "*Please enter valid first name*");
            checkTheSwitchCase(isLastNameValid, "lastNameID", setLastNameMessage, "Last name - success!", "*Please enter valid last name*");
            checkTheSwitchCase(isEmailValid, "emailID", setEmailMessage, "Email - success!", "*Please enter a valid email*");
            checkTheSwitchCase(isPhoneValid, "phoneID", setPhoneMessage, "Phone number - success!", "*Please enter a valid phone*");
            checkTheSwitchCase(isMonthValid, "monthID", setMonthMessage, "Month - success!", "*Valid month 01-12*")
            checkTheSwitchCase(isDateValid, "dateID", setDateMessage, "Date - success!", "*Valid date 01-31*")
            checkTheSwitchCase(isYearValid, "yearID", setYearMessage, "Year - success!", "*Enter valid year*")
            checkTheSwitchCase(isZipValid, "zipCodeID", setZipCodeMessage, "Zip - success!", "*Enter valid zip*")
        }
    }

    return (
        <div>
            <Container className="animateTwo">

                {/* Div for the top of the contact page */}
                <div className="hideOnSubmit" id="topOfContactPage">
                    <Row>
                        <Col md={8} className="smallBotBuffer">
                            <h1 className="ralewayDefault">Fill out a postcard!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>The ASAP Poke Newsletter is your firsthand source for fresh deals on our fresh meals!</p>
                        </Col>
                    </Row>
                </div>

                {/* Div with the form and postcard image */}
                <div className="hideOnSubmit" id="postcardImage" style={{ backgroundImage: `url(${postCardTwo})` }}>
                    <br />
                    <br />
                    <Col>
                        <Form onSubmit={formSubmission}>

                            <Form.Row as={Col}>
                                <Col sm={3}>
                                    <Form.Group controlId="formGridFirstName">
                                        <Form.Label id="firstNameID">{firstNameMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="Jane" />
                                    </Form.Group>
                                </Col>

                                <Col sm={3}>
                                    <Form.Group controlId="formGridLastName">
                                        <Form.Label id="lastNameID">{lastNameMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="Smith" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row as={Col}>
                                <Col sm={4}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label id="emailID">{emailMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="jane.smith@email.com" />
                                    </Form.Group>
                                </Col>

                                <Col sm={4}>
                                    <Form.Group controlId="formGridPhone">
                                        <Form.Label id="phoneID">{phoneMessage}</Form.Label>
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
                                        <Form.Label id="monthID">{monthMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="06" />
                                    </Form.Group>
                                </Col>

                                <Col sm={2}>
                                    <Form.Group controlId="formGridBirthdayDay">
                                        <Form.Label id="dateID">{dateMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="10" />
                                    </Form.Group>
                                </Col>

                                <Col sm={2}>
                                    <Form.Group controlId="formGridBirthdayYear">
                                        <Form.Label id="yearID">{yearMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="1971" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row as={Col}>
                                <Col sm={2}>
                                    <Form.Group controlId="formGridZipCode">
                                        <Form.Label id="zipCodeID">{zipCodeMessage}</Form.Label>
                                        <Form.Control type="text" placeholder="60614" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Col>
                                <Button size="lg" type="submit" className="sBtn">SIGN UP</Button>
                            </Col>

                        </Form>
                    </Col>
                    <br />
                    <br />
                    <br />
                </div>
                <br />

                {/* Bottom disclaimers on the contact page */}
                <div className="hideOnSubmit" id="bottomOfContactPage">
                    <Row>
                        <Col>
                            <p>Why do we need your birthday? For your annual birthday rewards, of course!</p>
                            <p>Why do we need your zip code? To let you know about other Lettuce restaurants in your neighborhood!</p>
                        </Col>
                    </Row>
                </div>

                {/* Ternary operator to display a "Success" message if formSubmitted is true */}
                {formSubmitted ?
                    <div>
                        {/* Success image! */}
                        <Image src={formThankYou} alt="Thank you message for successful form submission" fluid />
                    </div>
                    :
                    <div>
                        {/* Display nothing */}
                    </div>
                }

            </Container>
        </div>
    );
}

export default Contact;
