import React from "react"

// Importing reacter router dom
import { Link } from 'react-router-dom'

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Importing the custom stylesheet
import "./MenuStyles.css"

// Importing the images
import Bowl from "./bowl.jpg"
import BYO from "./build-your-own.jpg"
import ChooseBase from "./choose-base.jpg"
import Beets from "./beets.jpg"
import Salmon from "./salmon.jpg"
import Tuna from "./tuna.jpg"
import FinalBowl from "./final-bowl.jpg"

// Importing the "choose your style" ingredients
import styleOptions from "./styleOptions.json"

const Menu = () => {
    return (
        <div>
            <Container className="animateTwo">
                {/* -------------------------------------------------- */}
                {/* Headline */}
                <div className="smallBotBuffer">
                    <Row>
                        <Col>
                            <br />
                            <h4 className="singleLine ralewayDefault">Seasoned pro? Let's get you <Link to="/order">ordering ASAP</Link>!</h4>
                            <br />
                            <h4 className="singleLine ralewayDefault">New to ASAP? Welcome! Here's how to build your custom creation!</h4>
                        </Col>
                    </Row>
                </div>
                {/* -------------------------------------------------- */}
                {/* Hero Image */}
                <div className="bottomBuffer">
                    <Row>
                        <Col className="justVert">
                            <Image src={BYO} alt="Custom bowl surrounded by ingredients" style={{ width: "75%" }} fluid />
                        </Col>
                    </Row>
                </div>
                {/* -------------------------------------------------- */}
                {/* Step 1 */}
                {/* Headline */}
                <div className="bottomBuffer">
                    <Row className="smallBotBuffer">
                        <Col>
                            <h1 className="ralewayDefault">Step 1 - Choose your bowl!</h1>
                        </Col>
                    </Row>
                    {/* Content */}
                    <Row className="justVert">
                        {/* Description */}
                        <Col md={6}>
                            <Row>
                                <Col>
                                    <h2 className="ralewayDefault">Regular Bowl - 12.95</h2>
                                    <h3 className="ralewayDefault">24 oz. Perfect for lunch or dinner!</h3>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <h2 className="ralewayDefault">Shorty Bowl - 9.95</h2>
                                    <h3 className="ralewayDefault">18 oz. Great for a snack or light meal!</h3>
                                </Col>
                            </Row>
                        </Col>
                        {/* Image */}
                        <Col md={6}>
                            <Image className="zoomImg" src={Bowl} alt="Empty bowl awaiting ingredients" fluid />
                        </Col>
                    </Row>
                </div>
                {/* -------------------------------------------------- */}
                {/* Step 2 */}
                {/* Headline */}
                <div className="bottomBuffer">
                    <Row className="smallBotBuffer">
                        <Col>
                            <h1 className="ralewayDefault">Step 2 - Choose your base!</h1>
                        </Col>
                    </Row>
                    {/* Content */}
                    <Row className="justVert">
                        {/* Image */}
                        <Col md={6} className="smallBotBuffer">
                            <Image className="zoomImg" src={ChooseBase} alt="Base options of rice, quiona, and greens" fluid />
                        </Col>
                        {/* Description */}
                        <Col md={6}>
                            <h3 className="ralewayHomepage">Brown Rice</h3>
                            <br />
                            <h3 className="ralewayHomepage">Greens</h3>
                            <br />
                            <h3 className="ralewayHomepage">Quinoa Tabouli</h3>
                            <br />
                            <h3 className="ralewayHomepage">Sushi Rice</h3>
                        </Col>
                    </Row>
                </div>
                {/* -------------------------------------------------- */}
                {/* Step 3 */}
                {/* Headline */}
                <div className="bottomBuffer">
                    <Row className="smallBotBuffer">
                        <Col>
                            <h1 className="ralewayDefault">Step 3 - Choose your poke!</h1>
                        </Col>
                    </Row>
                    {/* Content - Images and Description */}
                    <Row>
                        <Col md={4}>
                            <h2 className="ralewayDefault">Ahi Tuna</h2>
                            <Image className="zoomImg" src={Tuna} alt="Ahi Tuna" fluid />
                        </Col>
                        <Col md={4}>
                            <h2 className="ralewayDefault">Atlantic Salmon</h2>
                            <Image className="zoomImg" src={Salmon} alt="Salmon" fluid />
                        </Col>
                        <Col md={4}>
                            <h2 className="ralewayDefault">Gingered Beets</h2>
                            <Image className="zoomImg" src={Beets} alt="Gingered Beets" fluid />
                        </Col>
                    </Row>
                </div>
                {/* -------------------------------------------------- */}
                {/* Step 4 */}
                <div className="bottomBuffer">
                    <Row className="smallBotBuffer">
                        <Col>
                            <h1 className="ralewayDefault">Step 4 - Choose your style!</h1>
                        </Col>
                    </Row>
                    <Row>
                        {/* Classic Avocado */}
                        <Col md={3}>
                            <h3 className="ralewayDefault">{styleOptions[0].name}</h3>
                            <ul>
                                {styleOptions[0].ingredients.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Col>
                        {/* Big Island Spicy */}
                        <Col md={3}>
                            <h3 className="ralewayDefault">{styleOptions[1].name}</h3>
                            <ul>
                                {styleOptions[1].ingredients.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Col>
                        {/* Maui Crunch */}
                        <Col md={3}>
                            <h3 className="ralewayDefault">{styleOptions[2].name}</h3>
                            <ul>
                                {styleOptions[2].ingredients.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Col>
                        {/* Ginger-Yuzu */}
                        <Col md={3}>
                            <h3 className="ralewayDefault">{styleOptions[3].name}</h3>
                            <ul>
                                {styleOptions[3].ingredients.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Col>
                    </Row>
                </div>
                {/* -------------------------------------------------- */}
                {/* FINAL Image - Let's order! */}
                <div className="smallBotBuffer">
                    <Row>
                        <Col>
                            <h1 className="ralewayDefault">That's it! You've built your very own ASAP Poke Bowl</h1>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col className="justVert">
                            <Image src={FinalBowl} alt="Final Poke bowl" style={{ width: "60%" }} fluid />
                        </Col>
                    </Row>
                </div>
                <div className="smallBotBuffer">
                    <Row>
                        <Col>
                            <h1 className="justVert"><Link to="/order">Ready to order? Let's roll</Link></h1>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Menu;
