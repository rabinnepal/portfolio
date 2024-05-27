import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const ContactForm = () => {
  return (
    <Container
      style={{
        borderRadius: "22px",
        transition: "all 0.3s",
        padding: "2rem",
        marginTop: "2rem",
        height: "90vh",
      }}
    >
      <Particle />
      <Form>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label className="purple my-3">Get In Touch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                required
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                required
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Subject"
                required
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                required
                className="bg-dark text-light"
              />
            </Form.Group>

            <Button
              variant="outline-secondary"
              type="submit"
              className="mt-3 purple"
              style={{
                width: "auto",
                padding: "1rem",
                borderRadius: "10px",
                fontWeight: "bold",
                transition: "all ease-in-out 0.3s",
              }}
            >
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
