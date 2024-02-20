import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Sri Rama Navami Kalyanam</h2>
            <div className="underline"></div>
          </Title>
        </Container>

        <Container className="d-flex">
        <Title>
          <h3>Event Registration Coming Soon!</h3>
        </Title>
        
        {/*<iframe title="SriRama-Navami" src="https://docs.google.com/forms/d/e/1FAIpQLSdWfKsIp_BpEk1pBendoxhIrtdvjGk3TZtYRb2kcbLcuMF40Q/viewform?embedded=true" width="1400" height="2349" display="flex" align-items="center" justify-content="center" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>*/}
        </Container>
      </StyledSection>
    </Element>
  );
}
