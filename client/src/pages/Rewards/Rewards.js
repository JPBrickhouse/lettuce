import React from "react"

// Importing the ExternalLink component
import ExternalLink from "../../components/ExternalLink/ExternalLink"

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Importing the images
import leyeLogo from "./leyeLogo.jpg"
import ASAPlogo from "./Asap-Poke.png"
import Apple from "./AppStore.png"
import Google from "./GooglePlay.png"

// Importing the custom stylesheet
import "./rewardStyles.css"

const Rewards = () => {
    return (
        <div>
            <Container>
                {/* Header Row with Lettuce and ASAP logos */}
                <Row className="justVert">
                    <Col md={5}>
                        <Image src={leyeLogo} alt="Lettuce Entertain You Logo" fluid />
                    </Col>
                    <Col md={2}>
                        <h2 className="alohaFont">and</h2>
                    </Col>
                    <Col md={5}>
                        <Image src={ASAPlogo} alt="ASAP Poke Logo" fluid />
                    </Col>
                </Row>
                <br />

                {/* Headline description of the rewards program */}
                <Row>
                    <Col>
                        <h2>Earn Lettuce Entertain You Frequent Diner points with every ASAP Poke meal!</h2>
                        <br />
                        <h2>Simply add your Frequent Diner number to the comment section of every order!</h2>
                    </Col>
                </Row>
                <br />

                <Row>
                    {/* Join column */}
                    <Col md={6}>
                        <Row>
                            <Col>
                                <h2>Join</h2>
                                <h3>Join today by downloading the LettuceEats App</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="justVert">
                                <ExternalLink urlContent={"https://apps.apple.com/us/app/lettuceeats/id351174022"} linkContent={<Image src={Apple} alt="Apple App Store Logo" fluid />} />
                            </Col>
                            <Col className="justVert">
                                <ExternalLink urlContent={"https://play.google.com/store/apps/details?id=com.cellit.flexilist.leye&hl=en"} linkContent={<Image src={Google} alt="Google Play Store Logo" fluid />} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="justVert">
                                <ExternalLink urlContent={"https://leye.myguestaccount.com/guest/enroll?card-template=HQnpQ690V4o%3d&_ga=2.61614821.87858280.1614527462-1197833121.1613424668"} linkContent={"To join without downloading the app, click here"} />
                            </Col>
                        </Row>
                    </Col>

                    {/* Already a member column */}
                    <Col md={6}>
                        <Row>
                            <Col>
                                <h2>Already a member?</h2>
                                <h3>Log in to earn and redeem Dining Rewards</h3>
                                <p>https://leye.myguestaccount.com/guest/</p>
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                    </Col>
                </Row>


                <p>
                    For more information about program benefits, visit the Frequent Diner website (https://www.leye.com/frequent-diner/), or read our FAQs (https://www.leye.com/frequent-diner/faq/)
                </p>


                <p>
                    After you sign-up for the Frequent Diner Club, be sure to sign-up for the ASAP Poke Newsletter, for the inside scoop of ASAP deals!
                </p>

                <p>
                    Need a refresher on our menu? Checkout our fresh options!
                </p>

                <p>
                    Ready to order? Let's roll!
                </p>

            </Container>
        </div>
    );
}

export default Rewards;
