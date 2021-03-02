import React from "react"

// Importing reacter router dom
import { Link } from 'react-router-dom'

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Importing the images
import LOGO from "./Asap-Poke.jpg"
import HERO from "./asap-poke-hero.jpg"

// Importing the custom stylesheet
import "./homeStyles.css"

const Home = () => {
    return (
        <div>
            <Container className="animateFour">
                <div>
                    <Row>
                        <Col>
                            <h1 className="alohaFont">Welcome!</h1>
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
                <br />
                <div>
                    <Row>
                        <Col>
                            <h3 className="ralewayHomepage">ASAP Poke was born out of a single idea: bring Chicago the freshest, sushi-quality fish coupled with seasonal ingredients, as fast as possible.</h3>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Image src={HERO} alt="Hero image of delicious ASAP poke" fluid/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <h3 className="ralewayHomepage">Honoring the island tradition of sushi-quality fish and seasonal products, ASAP Poke is a chef-driven, delivery-only concept in Lincoln Park.</h3>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <h3 className="ralewayHomepage">Choose from our signature poke bowls or handcraft your own from an extensive list of ingredients, toppings and sauces.</h3>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6} className="smallBotBuffer">
                            <h4 className="singleLine ralewayDefault">New to ASAP? Welcome! Check out our <Link to="/menu">menu</Link> for all of our fresh favorites!</h4>
                        </Col>
                        <Col md={6}>
                            <h4 className="singleLine ralewayDefault">Seasoned pro? Let's get you <Link to="/order">ordering ASAP</Link>!</h4>
                        </Col>
                    </Row>
                    <br />
                    <Row className="smallBotBuffer">
                        <Col md={6} className="smallBotBuffer">
                            <h1 className="justVert"><Link to="/contact">Get in touch</Link></h1>
                        </Col>
                        <Col md={6} className="smallBotBuffer">
                            <h1 className="justVert"><Link to="/rewards">Earn rewards</Link></h1>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
}

export default Home;
