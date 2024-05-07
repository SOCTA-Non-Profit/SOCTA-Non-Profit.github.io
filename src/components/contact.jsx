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
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
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
