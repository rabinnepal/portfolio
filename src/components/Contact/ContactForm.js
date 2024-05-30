import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";

const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setStatusMessage("Message sent successfully!");
        },
        (error) => {
          setStatusMessage(
            "Failed to send the message, please try again later."
          );
        }
      );

    e.target.reset();
  };

  return (
    <Container>
      <Form onSubmit={sendEmail}>
        <Row className="justify-content-left">
          <Col md={12}>
            {statusMessage && (
              <Alert
                variant={
                  statusMessage.includes("successfully") ? "success" : "danger"
                }
              >
                {statusMessage}
              </Alert>
            )}
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label className="text-light">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                required
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label className="text-light">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                required
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label className="text-light">Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                required
                className="bg-dark text-light"
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label className="text-light">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                name="message"
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
      <Particle />
    </Container>
  );
};

export default ContactForm;
