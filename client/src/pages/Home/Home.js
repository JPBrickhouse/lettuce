import React from "react"

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Importing the images
import LOGO from "./Asap-Poke.jpg"

// Importing the custom stylesheet
import "./homeStyles.css"

const Home = () => {
    return (
        <div>
            <Container id="animateFour">
                <div>
                    <Row>
                        <Col>
                            <h1 className="alohaFont">Aloha!</h1>
                        </Col>
                    </Row>
                    <br />
                    {/* Hero Image of ASAP Logo */}
                    <Row>
                        <Col>
                            <Image src={LOGO} alt="ASAP Poke Cover Logo" fluid />
                        </Col>
                    </Row>
                </div>



                {/* Description
                OR
                Food photo */}



                <div>
                    <Row>
                        <p>
                            ASAP Poke was born out of a single idea: bring Chicago the freshest, sushi-quality fish coupled with seasonal ingredients, as fast as possible.
                        </p>
                        <p>
                            Honoring the island tradition of sushi-quality fish and seasonal products, ASAP Poke is a chef-driven, delivery-only concept in Lincoln Park.
                        </p>
                        <p>
                            Choose from our signature poke bowls or handcraft your own from an extensive list of ingredients, toppings and sauces.
                        </p>
                        <p>
                            Check out our menu - link to menu page
                        </p>
                        <p>
                            Place your order - link to order
                        </p>
                        <p>
                            Get in touch - link to contact page
                        </p>
                        <p>
                            Earn rewards! - link to rewards page
                        </p>
                    </Row>
                </div>

            </Container>
        </div>
    );
}

export default Home;
