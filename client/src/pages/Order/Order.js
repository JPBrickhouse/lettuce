import React from "react"

// Importing the ExternalLink component
import ExternalLink from "../../components/ExternalLink/ExternalLink"

// Importing React Bootstrap components
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

// Importing the images
import Tock from "./tock.jpg"
import Chow from "./chownow.png"
import Doordash from "./doordash.jpg"
import Postmates from "./postmates.jpg"

const Order = () => {
    return (
        <div>
            <Container className="animateTwo">
                <Row>
                    <Col>
                        <h1>Already reviewed the menu? Then let's order!</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h2>Order directly from ASAP Poke</h2>
                        {/* Real link, but to a fake 555 number */}
                        <h4 className="singleLine"><a href="tel:773-555-0101">773-555-0101</a></h4>
                    </Col>
                </Row>
                <br />
                {/* All delivery service partner links will go to the "main" company website, since an ASAP poke specific one does not exist */}
                <Row>
                    {/* Preferred partners */}
                    <Col md={6} className="midRangeBuffer">
                        <Row>
                            <Col>
                                <h3>Or you can order from our preferred partners</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ExternalLink urlContent={"https://www.exploretock.com/"} linkContent={<Image className="wiggleImg" src={Tock} alt="Tock Logo" fluid />} />
                            </Col>
                            <Col>
                                <ExternalLink urlContent={"https://get.chownow.com/"} linkContent={<Image className="wiggleImg" src={Chow} alt="Chownow Logo" fluid />} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Be sure to add your Frequent Diner number to the comment section or your order!</h3>
                            </Col>
                        </Row>
                    </Col>
                    {/* Other delivery options */}
                    <Col md={6} className="midRangeBuffer">
                        <Row>
                            <Col>
                                <h3>ASAP Poke is available on other delivery services!</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ExternalLink urlContent={"https://www.doordash.com/en-US"} linkContent={<Image className="wiggleImg" src={Doordash} alt="Doordash Logo" fluid />} />
                            </Col>
                            <Col>
                                <ExternalLink urlContent={"https://postmates.com/"} linkContent={<Image className="wiggleImg" src={Postmates} alt="Postmates Logo" fluid />} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Frequent Diner Points are not earned on orders placed with these services</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Order;
