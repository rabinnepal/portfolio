import ContactForm from "./ContactForm";
import contactImg from "../../Assets/contact.svg";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="contact-section">
      <Row
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "3rem",
        }}
      >
        <p className="purple">Let's Connect</p>
      </Row>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col md={6}>
          <ContactForm />
        </Col>
        <Col md={6} style={{ textAlign: "center" }}>
          <img
            src={contactImg}
            alt="contact"
            className="img-fluid"
            width={300}
            height={300}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
