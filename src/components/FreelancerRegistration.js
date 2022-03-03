import React, { Component } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

export default class FreelancerRegistration extends Component {
  render() {
    return (
    <section>
        <h1> Registro </h1>
        <Container>
            <Form>
                <Row>
                    <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter new username" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCellphone">
                    <Form.Label>Cellphone Number</Form.Label>
                    <Form.Control type="number" placeholder="Cellphone number"/>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    </section>
    )
  }
}
