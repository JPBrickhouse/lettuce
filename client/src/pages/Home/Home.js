import React from "react"

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Importing the images
import LOGO from "./Asap-Poke.jpg"


const Home = () => {
    return (
        <div>
            <Container>
                <div>
                    <Row>
                        <Col>
                            <h1>Aloha</h1>
                            <h2>and welcome to</h2>
                        </Col>
                    </Row>
                </div>
                <br />
                <div>
                    <Row>
                        <Col>
                            <Image src={LOGO} alt="ASAP Poke Cover Logo" fluid />
                        </Col>
                    </Row>
                </div>
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
                            Check out our menu
                        </p>
                        <p>
                            Place your order
                        </p>
                        <p>
                            Get in touch
                        </p>
                        <p>
                            Earn rewards!
                        </p>
                    </Row>
                </div>

            </Container>
        </div>
    );
}

export default Home;
