import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
import { Icon } from "@iconify/react";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";
import './Home.css';

const FeaturedSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: var(--primary);
  font-weight: bold;
  margin-bottom: 3rem;
  font-size: 2.5rem;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--primary);
    margin: 1rem auto;
    border-radius: 2px;
  }
`;

const QuickLinkCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  .icon-wrapper {
    font-size: 4rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .card-title {
    color: var(--primary);
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const EventHighlight = styled(Card)`
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  .event-image {
    height: 200px;
    object-fit: cover;
  }
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--bs-primary) 100%);
  color: white;
  padding: 4rem 0;
  margin: 4rem 0;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;

  .stat-number {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const CTASection = styled.div`
  background: white;
  padding: 4rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 4rem 0;

  h3 {
    color: var(--primary);
    margin-bottom: 1.5rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
`;

export default function Home() {
  const { name } = useSelector(selectData);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  
  React.useEffect(
    function () {
      document.title = `${name}`;
    },
    [name]
  );

  const quickLinks = [
    {
      title: "Upcoming Events",
      icon: "mdi:calendar-star",
      description: "Explore our cultural festivals and community gatherings",
      link: "/events"
    },
    {
      title: "Become a Member",
      icon: "mdi:account-heart",
      description: "Join our vibrant Telugu community",
      link: "/membership"
    },
    {
      title: "Photo Gallery",
      icon: "mdi:camera",
      description: "View memories from our past events",
      link: "/gallery"
    },
    {
      title: "Board Members",
      icon: "mdi:account-group",
      description: "Meet our dedicated leadership team",
      link: "/board"
    }
  ];

  return (
    <>
      <Hero />
      
      <div className="scrolling-banner">
        <a href="https://bit.ly/SOCTASitaRamaKalyanam" target="_blank" rel="noopener noreferrer" className="register-link">
          Update: SOCTA 2025 is Organizing Sri Rama Navami Event in The Guelph Eastgate. Click on this Scrolling Banner to Register for the Event
        </a>
      </div>

      <main>
        {/* Mission Section */}
        <AboutMe />

        {/* Quick Links Section */}
        <FeaturedSection>
          <Container>
            <SectionTitle>
              <Icon icon="mdi:compass" className="me-2" />
              Explore SOCTA
            </SectionTitle>
            <Row>
              {quickLinks.map((link, index) => (
                <Col key={index} md={6} lg={3} className="mb-4">
                  <Link to={link.link} style={{ textDecoration: 'none' }}>
                    <QuickLinkCard>
                      <Card.Body>
                        <div className="icon-wrapper">
                          <Icon icon={link.icon} />
                        </div>
                        <Card.Title>{link.title}</Card.Title>
                        <Card.Text>{link.description}</Card.Text>
                      </Card.Body>
                    </QuickLinkCard>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </FeaturedSection>

        {/* Featured Event */}
        <Container className="mb-5">
          <SectionTitle>
            <Icon icon="mdi:star-circle" className="me-2" />
            Featured Event
          </SectionTitle>
          <Row className="justify-content-center">
            <Col lg={8}>
              <EventHighlight>
                <Card.Img 
                  variant="top" 
                  src="/SRK_2025_Flyer.jpg" 
                  alt="Sri Rama Navami 2025"
                  className="event-image"
                />
                <Card.Body>
                  <Card.Title>
                    <h3>Sri Rama Navami Celebrations 2025</h3>
                  </Card.Title>
                  <Card.Text>
                    <Icon icon="mdi:calendar" className="me-2 text-primary" />
                    April 12, 2025 | 10:00 AM - 4:00 PM
                  </Card.Text>
                  <Card.Text>
                    <Icon icon="mdi:map-marker" className="me-2 text-primary" />
                    The Guelph Estate, Guelph, ON
                  </Card.Text>
                  <Card.Text>
                    Join us for a grand celebration of Sri Rama Navami with traditional puja, cultural programs, 
                    and community feast. An event filled with devotion, culture, and fellowship.
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={handleShow}
                    className="w-100"
                  >
                    Register Now
                  </Button>
                </Card.Body>
              </EventHighlight>
            </Col>
          </Row>
        </Container>

        {/* Stats Section */}
        <StatsSection>
          <Container>
            <Row>
              <Col md={3} sm={6} className="mb-4 mb-md-0">
                <StatCard>
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Community Members</div>
                </StatCard>
              </Col>
              <Col md={3} sm={6} className="mb-4 mb-md-0">
                <StatCard>
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Annual Events</div>
                </StatCard>
              </Col>
              <Col md={3} sm={6} className="mb-4 mb-md-0">
                <StatCard>
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years Serving</div>
                </StatCard>
              </Col>
              <Col md={3} sm={6}>
                <StatCard>
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Volunteers</div>
                </StatCard>
              </Col>
            </Row>
          </Container>
        </StatsSection>

        {/* What We Offer */}
        <Skills />

        {/* CTA Section */}
        <Container>
          <CTASection>
            <Icon icon="mdi:hand-heart" style={{ fontSize: "4rem", color: "var(--primary)" }} />
            <h3>Get Involved with SOCTA</h3>
            <p className="lead" style={{ color: "#333" }}>
              Whether you want to attend events, become a member, or volunteer, 
              there are many ways to connect with our community.
            </p>
            <div className="cta-buttons">
              <Link to="/membership">
                <Button variant="primary" size="lg">
                  <Icon icon="mdi:account-plus" className="me-2" />
                  Become a Member
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="outline-primary" size="lg">
                  <Icon icon="mdi:calendar" className="me-2" />
                  View Events
                </Button>
              </Link>
            </div>
          </CTASection>
        </Container>

        {/* Contact Section */}
        <Contact />
      </main>

      <BackToTop home={"Home"} />
      <Footer />

      {/* Floating Register Button */}
      <Button 
        variant="primary" 
        onClick={handleShow} 
        style={{ 
          position: 'fixed', 
          bottom: '20px', 
          right: '20px',
          zIndex: 1000,
          borderRadius: '50px',
          padding: '15px 25px',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
        }}
      >
        <Icon icon="mdi:calendar-check" className="me-2" />
        Register for Event
      </Button>

      {/* Event Registration Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: 'black',fontWeight: 'bold'}}>
            Register for Sri Rama Navami Event - 2025
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{color: 'black',fontWeight: 'bold'}}>
            <br />
            <span style={{ textDecoration: 'underline', color: 'red', fontWeight: 'bold' }}>Date:</span>  April 12th 2025 Time: 10 AM to 4 PM
            <br />
            <span style={{ textDecoration: 'underline', color: 'red', fontWeight: 'bold' }}>Venue:</span> The Guelph Estate 
            <br />
            <span style={{ textDecoration: 'underline', color: 'red', fontWeight: 'bold' }}>Address:</span> #26-340 Woodlawn Rd W, Guelph, ON N1H 1G1
            <br />
            For any questions or info Email us at: contact.socta@gmail.com
            <br />
            An event by SOCTA (Southern Ontario Cultural Telugu Association)
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => window.open('https://bit.ly/SOCTASitaRamaKalyanam', '_blank')}
          >
            <Icon icon="mdi:open-in-new" className="me-2" />
            Register for Sri Rama Navami 2025 Event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
