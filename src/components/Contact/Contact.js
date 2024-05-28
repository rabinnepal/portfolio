import ContactForm from "./ContactForm";
import contactImg from "../../Assets/contact.svg";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container
      style={{
        borderRadius: "22px",
        transition: "all 0.3s",
        padding: "2rem",
        // marginTop: "2rem",
        // height: "90vh",
      }}
    >
      <div
        style={{
          padding: "20px",
          //   paddingButtom: "40px",
          textAlign: "right",
        }}
        className="img-fluid"
      >
        <img src={contactImg} alt="about" className="img-fluid" />
      </div>
      <div>
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
