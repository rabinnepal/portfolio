import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import petAdoption from "../../Assets/Projects/petadoption.jpg";
import ecotable from "../../Assets/Projects/ecotable.png";
import wabiHair from "../../Assets/Projects/wabihair.png";
import movie from "../../Assets/Projects/movie.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecotable}
              title="EcoTable"
              description="EcoTable is a social community platform for networking, job marketplace, and branding & growth. On a mission to create a Food Community & System that is Reliable, Trustworthy, Credible, & Sustainably Structured."
              demoLink="https://ecotable.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              title="Sentiment Based Movie Recommendation System"
              description="Sentiment Based Movie Recommendation System is a webapp built with React.js, Material-UI and Node.js which can recommend movie uploaded by the admin in which the users write the review of the movie, and based on that review it will give you a rating and whether the rating is positive or negative."
              ghLink="https://github.com/rabinnepal/sbmrs-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wabiHair}
              title="Wabi Hair"
              description="Frontend website for the clients to book the appointmets, contact their hair stylish and have a chat with them, Wabi Hair was built with Next.js and Tailwind CSS. To manage the frontend website, a backend/dashboard was also built with Vue.js."
              demoLink="https://wabihair.uniconsults.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petAdoption}
              title="Pet Adoption App"
              description="Personal pet project built with Node.js, it was developed by me while learning Node. In this app, one can fill the form and request/apply for the pets such as cats and dogs which were up for adoption by another user or a pet rescue facility."
              ghLink="https://github.com/rabinnepal/pet-adoption-node"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
