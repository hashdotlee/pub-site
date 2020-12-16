import React from 'react';
import { Card, CardBody, Row, Col, Button, CardHeader } from 'reactstrap';
import img1 from '../../assets/images/small/img-8.jpg';


const Cards = () => {

    return (
        <React.Fragment>
            <Card>
                    <CardHeader><h4 className="mb-3 mt-0 header-title">Chiến dịch của tuần</h4></CardHeader>
                    <CardBody>
                    <Row className="bg-light">
                        <Col xl={3} lg={6}>
                            <Card className="mb-4 mb-xl-0">
                                <img className="card-img-top img-fluid" src={img1} alt="" />
                                <CardBody>
                                    <h5 className="card-title font-size-16">Card title</h5>
                                    <p className="card-text text-muted">Some quick example text to build on the card title and make
                                        up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.</p>
                                    <Button className="btn btn-link nav-link right-bar-toggle" color="primary" onClick = {()=>{document.body.classList.toggle("right-bar-enabled")}}>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Card className="mb-4 mb-xl-0">
                                <img className="card-img-top img-fluid" src={img1} alt="" />
                                <CardBody>
                                    <h5 className="card-title font-size-16">Card title</h5>
                                    <p className="card-text text-muted">Some quick example text to build on the card title and make
                                        up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.</p>
                                    <Button color="primary">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Card className="mb-4 mb-xl-0">
                                <img className="card-img-top img-fluid" src={img1} alt="" />
                                <CardBody>
                                    <h5 className="card-title font-size-16">Card title</h5>
                                    <p className="card-text text-muted">Some quick example text to build on the card title and make
                                        up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.</p>
                                    <Button color="primary">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Card className="mb-4 mb-xl-0">
                                <img className="card-img-top img-fluid" src={img1} alt="" />
                                <CardBody>
                                    <h5 className="card-title font-size-16">Card title</h5>
                                    <p className="card-text text-muted">Some quick example text to build on the card title and make
                                        up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.</p>
                                    <Button color="primary">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card><CardHeader><h4 className="mb-3 mt-2 header-title">Chiến dịch được đánh giá cao</h4></CardHeader>
                        <CardBody>
                        <Row>
                        <Col xl={3} lg={6}>
                            <Card className="mb-4 mb-xl-0">
                                <img className="card-img-top img-fluid" src={img1} alt="" />
                                <CardBody>
                                    <h5 className="card-title font-size-16">Card title</h5>
                                    <p className="card-text text-muted">Some quick example text to build on the card title and make
                                        up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.</p>
                                    <Button color="primary">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        
                        <Col xl={3} lg={6}>
                            <Card className="mb-4 mb-xl-0">
                                <img className="card-img-top img-fluid" src={img1} alt="" />
                                <CardBody>
                                    <h5 className="card-title font-size-16">Card title</h5>
                                    <p className="card-text text-muted">Some quick example text to build on the card title and make
                                        up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.</p>
                                    <Button color="primary">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Card className="mb-4 mb-xl-0">
                                <img className="card-img-top img-fluid" src={img1} alt="" />
                                <CardBody>
                                    <h5 className="card-title font-size-16">Card title</h5>
                                    <p className="card-text text-muted">Some quick example text to build on the card title and make
                                        up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.</p>
                                    <Button color="primary">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} lg={6}>
                            <Card className="mb-4 mb-xl-0">
                                <img className="card-img-top img-fluid" src={img1} alt="" />
                                <CardBody>
                                    <h5 className="card-title font-size-16">Card title</h5>
                                    <p className="card-text text-muted">Some quick example text to build on the card title and make
                                        up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.</p>
                                    <Button color="primary">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    </CardBody>
                    </Card>
        </React.Fragment>
    );
};

export default Cards;
