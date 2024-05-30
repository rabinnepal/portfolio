import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import petAdoption from "../../Assets/Projects/petadoption.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import wabiHair from "../../Assets/Projects/wabihair.png";

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
              imgPath={chatify}
              title="Sentiment Based Movie Recommendation System"
              description="Sentiment Based Movie Recommendation System is a webapp built with React.js, Material-UI and Node.js which can recommend movie uploaded by the admin in which the users write the review of the movie, and based on that review it will give you a rating and whether the rating is positive or negative."
              ghLink="https://github.com/rabinnepal/sbmrs-react"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wabiHair}
              title="Wabi Hair"
              description="Frontend website for the clients to book the appointmets, contact their hair stylish and have a chat with them, Wabi Hair was built with Next.js and Tailwind CSS. To manage the frontend website, a backend/dashboard was also built with Vue.js."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
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

          {/*       <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
