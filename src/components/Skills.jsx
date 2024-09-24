import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import video from '../images/sri-rama-navami-promo.mp4'; // Importing your video file path

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Bathukamma 2024 Event</h2>
            <p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScd7hlK2dPK0kQ1uA2MH5qXbXxG0D4iGPVk-gzXBczQ6DkppA/viewform"> 
            <Button>Register for the Event</Button>
            </a>
            </p>
            <div className="underline"></div>
          </Title>
          
          <Row className="mt-3 align-items-center">
          <h2>Past Event in April 2024: Sri Rama Navami</h2>
            <Col xs={12} className="my-md-5">
              <video controls width="100%">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}
