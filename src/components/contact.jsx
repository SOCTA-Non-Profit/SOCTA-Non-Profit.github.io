import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ImageGallery from "react-image-gallery";
import ContactForm from "./ContactForm";
import "react-image-gallery/styles/css/image-gallery.css";


const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

const images = [
  {
    original: "1.png",
    thumbnail: "1.png",
  },
  {
    original: "2.png",
    thumbnail: "2.png",
  },
  {
    original: "4.png",
    thumbnail: "4.png",
  },
  {
    original: "5.png",
    thumbnail: "5.png",
  },
  {
    original: "6.png",
    thumbnail: "6.png",
  },
  {
    original: "7.png",
    thumbnail: "7.png",
  },
  {
    original: "18.png",
    thumbnail: "18.png",
  },
  {
    original: "21.png",
    thumbnail: "21.png",
  },
  {
    original: "26.png",
    thumbnail: "26.png",
  },
  {
    original: "30.png",
    thumbnail: "30.png",
  },
];

const GalleryContainer = styled(Container)`
  max-width: 100%;
  overflow: hidden;
`;
export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>SOCTA 2024 - Sri Rama Navami Kalyanam Gallery</h2>
            <div className="underline"></div>
          </Title>
        
        </Container>
      
        
        {/* <Title>
          <h3> - Sri Rama Navami Event Gallery</h3>
        </Title> */}
        
          
        {/*<iframe title="SriRama-Navami" src="https://docs.google.com/forms/d/e/1FAIpQLSdWfKsIp_BpEk1pBendoxhIrtdvjGk3TZtYRb2kcbLcuMF40Q/viewform?embedded=true" width="1400" height="2349" display="flex" align-items="center" justify-content="center" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>*/}
        
      </StyledSection>
      <ImageGallery items={images} />
    </Element>
  );
}
