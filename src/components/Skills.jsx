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
            <h2>Upcoming Events</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
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
