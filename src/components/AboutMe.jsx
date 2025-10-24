import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo, moreInfo_Line2, moreInfo_Line3, moreInfo_Line4, moreInfo_Line5 } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
// Images
import soctaImage from "../images/SOCTA_Logo.jpg";

const StyledAboutMe = styled.section`
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF8F0 100%);
  padding: 4rem 0;
  
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #2C1810;
    margin-bottom: 1.5rem;
    text-align: justify;
  }
`;

const AboutImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  .about-img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
    border: 5px solid var(--primary);
    transition: transform 0.3s ease;
    object-fit: cover;
    
    &:hover {
      transform: scale(1.05) rotate(2deg);
      border-color: var(--accent-gold);
      box-shadow: 0 15px 40px rgba(255, 107, 53, 0.5);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 150px;
    height: 150px;
    background: var(--gradient-primary);
    border-radius: 50%;
    opacity: 0.2;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 200px;
    height: 200px;
    background: var(--gradient-prosperity);
    border-radius: 50%;
    opacity: 0.15;
    z-index: -1;
  }
`;

const ContentContainer = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
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
            <Col lg={7} md={12}>
              <ContentContainer>
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
                {<p>{moreInfo_Line2}</p>}
                {<p>{moreInfo_Line3}</p>}
                {<p>{moreInfo_Line4}</p>}
                {<p>{moreInfo_Line5}</p>}
              </ContentContainer>
            </Col>
            <Col lg={5} md={12}>
              <AboutImageContainer>
                <img 
                  src={soctaImage} 
                  alt="SOCTA Organization" 
                  className="about-img"
                />
              </AboutImageContainer>
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
