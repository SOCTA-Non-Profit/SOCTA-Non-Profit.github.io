import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo, moreInfo_Line2, moreInfo_Line3, moreInfo_Line4, moreInfo_Line5 } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About SOCTA</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
                {<p>{moreInfo_Line2}</p>}
                {<p>{moreInfo_Line3}</p>}
                {<p>{moreInfo_Line4}</p>}
                {<p>{moreInfo_Line5}</p>}
              </Container>
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
