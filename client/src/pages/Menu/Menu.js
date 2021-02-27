import React from "react"

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

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
            <Container>
                {/* -------------------------------------------------- */}
                {/* Headline */}
                <Row>
                    <Col>
                        <h1>Seasoned pro? Let's get you ordering ASAP!</h1>
                        <br />
                        <h1>New to ASAP? Welcome! Here's how to build your custom creation!</h1>
                    </Col>
                </Row>
                {/* -------------------------------------------------- */}
                {/* Hero Image */}
                <Row>
                    <Col>
                        <Image src={BYO} alt="Custom bowl surrounded by ingredients" fluid />
                    </Col>
                </Row>
                {/* -------------------------------------------------- */}
                {/* Step 1 */}
                {/* Headline */}
                <Row>
                    <Col>
                        <h1>Step 1 - Choose your bowl!</h1>
                    </Col>
                </Row>
                {/* Content */}
                <Row>
                    {/* Description */}
                    <Col>
                        <Row>
                            <Col>
                                <h2>Regular Bowl - 12.95</h2>
                                <h3>24 oz. Perfect for lunch or dinner!</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2>Shorty Bowl - 9.95</h2>
                                <h3>18 oz. Great for a snack or light meal!</h3>
                            </Col>
                        </Row>
                    </Col>
                    {/* Image */}
                    <Col>
                        <Image className="wiggleImg" src={Bowl} alt="Empty bowl awaiting ingredients" fluid />
                    </Col>
                </Row>
                {/* -------------------------------------------------- */}
                {/* Step 2 */}
                {/* Headline */}
                <Row>
                    <Col>
                        <h1>Step 2 - Choose your base!</h1>
                    </Col>
                </Row>
                {/* Content */}
                <Row>
                    {/* Image */}
                    <Col>
                        <Image className="wiggleImg" src={ChooseBase} alt="Base options of rice, quiona, and greens" fluid />
                    </Col>
                    {/* Description */}
                    <Col>
                        <h2>Brown Rice</h2>
                        <h2>Greens</h2>
                        <h2>Quinoa Tabouli</h2>
                        <h2>Sushi Rice</h2>
                    </Col>
                </Row>
                {/* -------------------------------------------------- */}
                {/* Step 3 */}
                {/* Headline */}
                <Row>
                    <Col>
                        <h1>Step 3 - Choose your poke!</h1>
                    </Col>
                </Row>
                {/* Content - Images and Description */}
                <Row>
                    <Col>
                        <h2>Ahi Tuna</h2>
                        <Image className="wiggleImg" src={Tuna} alt="Ahi Tuna" fluid />
                    </Col>
                    <Col>
                        <h2>Atlantic Salmon</h2>
                        <Image className="wiggleImg" src={Salmon} alt="Salmon" fluid />
                    </Col>
                    <Col>
                        <h2>Gingered Beets</h2>
                        <Image className="wiggleImg" src={Beets} alt="Gingered Beets" fluid />
                    </Col>
                </Row>
                {/* -------------------------------------------------- */}
                {/* Step 4 */}
                <Row>
                    <Col>
                        <h1>Step 4 - Choose your style!</h1>
                    </Col>
                </Row>
                <Row>
                    {/* Classic Avocado */}
                    <Col>
                        <h3>{styleOptions[0].name}</h3>
                        <ul>
                            {styleOptions[0].ingredients.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </Col>
                    {/* Big Island Spicy */}
                    <Col>
                        <h3>{styleOptions[1].name}</h3>
                        <ul>
                            {styleOptions[1].ingredients.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </Col>
                    {/* Maui Crunch */}
                    <Col>
                        <h3>{styleOptions[2].name}</h3>
                        <ul>
                            {styleOptions[2].ingredients.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </Col>
                    {/* Ginger-Yuzu */}
                    <Col>
                        <h3>{styleOptions[3].name}</h3>
                        <ul>
                            {styleOptions[3].ingredients.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </Col>
                </Row>
                {/* -------------------------------------------------- */}
                {/* FINAL Image - Let's order! */}
                <Row>
                    <Col>
                        <h1>That's it! You've built your very own ASAP Poke Bowl</h1>
                        <br />
                        <Image src={FinalBowl} alt="Final Poke bowl" fluid />
                        <br />
                        <h1>Ready to order? Let's roll!</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Menu;
