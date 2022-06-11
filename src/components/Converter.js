import React, {useState} from "react";
import { Button, Container, Row, Col, Form, Card, InputGroup } from "react-bootstrap";

const Converter = () =>{
    const [cel, setCel] = useState(0);
    const [far, setFar] = useState(0);

    const handleCelChange = (e) =>{
        setCel(e.target.value);
    }
    const handleFarChange = (e) =>{
        setFar(e.target.value);
    }
    const handleFarConvertion = (e) =>{
        setFar(+cel*(9/5)+32);
    }
    const handleCelConvertion = (e) =>{
        setCel(+far-(32*5)/9);
    }
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="mx-auto"><h1>Temperature Converter</h1></Card.Header>
                        <Card.Body>
                        <Form>
                            <Row>
                            <Col className="mb-3">
                            <InputGroup className="mb-3">
                                <Form.Control type="text" placeholder="C°" onChange={handleCelChange}/>
                                <InputGroup.Text className="bg-light" id="basic-addon2">{far}°F</InputGroup.Text>
                            </InputGroup>
                            </Col>
                            <Col>
                            <InputGroup className="mb-3">
                                <Form.Control type="text" placeholder="F°" onChange={handleFarChange}/>
                                <InputGroup.Text className="bg-light" id="basic-addon2">{cel}°C</InputGroup.Text>
                            </InputGroup>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                            <Button variant="outline-warning" className="btn-lg" onClick={handleFarConvertion}>Convert To Fahrenheit</Button>
                            </Col>
                            <Col>
                            <Button variant="outline-light" className="btn-lg" onClick={handleCelConvertion}>Convert To Celcius</Button>
                            </Col>
                            </Row>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default Converter;