import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Card, Container, Row, Col, Form, Carousel } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Element } from "react-scroll";
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
    background: var(--gradient-primary);
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
  background: ${({ theme }) => theme.background};
  border-left: 4px solid var(--primary);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(255, 107, 53, 0.3);
    border-left: 4px solid var(--accent-gold);
  }

  .icon-wrapper {
    font-size: 4rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
  border-top: 5px solid var(--primary);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(255, 107, 53, 0.3);
  }

  .event-image {
    height: 200px;
    object-fit: cover;
  }
`;

const StatsSection = styled.div`
  background: var(--gradient-festival);
  color: white;
  padding: 4rem 0;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  position: relative;
  z-index: 1;

  .stat-number {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .stat-label {
    font-size: 1.2rem;
    opacity: 0.95;
  }
`;

const CTASection = styled.div`
  background: white;
  padding: 4rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 4rem 0;
  border-top: 5px solid var(--primary);
  border-bottom: 5px solid var(--accent-gold);

  h3 {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

const TestimonialSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.name === "light" 
    ? "linear-gradient(135deg, #FFF8F0 0%, #FFE4CC 100%)" 
    : "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"};
`;

const TestimonialCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border-left: 4px solid var(--primary);
  background: ${({ theme }) => theme.background};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(255, 107, 53, 0.3);
  }

  .quote-icon {
    font-size: 3rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0.5;
  }

  .testimonial-text {
    font-style: italic;
    color: ${({ theme }) => theme.color};
    margin: 1rem 0;
  }

  .testimonial-author {
    font-weight: bold;
    color: var(--primary);
  }
`;

const UpcomingEventsPreview = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
`;

const EventPreviewCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border-top: 4px solid var(--primary);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(255, 107, 53, 0.3);
  }

  .event-date-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--gradient-primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: bold;
    font-size: 0.9rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .event-img {
    height: 200px;
    object-fit: cover;
  }
`;

const NewsletterSection = styled.section`
  padding: 4rem 0;
  background: var(--gradient-prosperity);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
    border-radius: 50%;
  }

  h2 {
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-bottom: 2rem;
    opacity: 0.95;
  }

  .newsletter-form {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
`;

const SponsorsSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
  text-align: center;
`;

const SponsorLogo = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-bottom: 2rem;
  border: 2px solid var(--primary);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(255, 107, 53, 0.3);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .placeholder-text {
    color: var(--primary);
    font-weight: bold;
  }
`;

const ValuePropositionSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.name === "light" 
    ? "linear-gradient(135deg, #FFF 0%, #FFF8F0 100%)" 
    : "linear-gradient(135deg, #27272a 0%, #1a1a1a 100%)"};
`;

const ValueCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.background};
  border-top: 4px solid var(--primary);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(255, 107, 53, 0.3);
    border-top-color: var(--accent-gold);
  }

  .value-icon {
    font-size: 4rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
  }

  h4 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;

const ImageCarouselSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};

  .carousel-img {
    height: 500px;
    object-fit: cover;
    border-radius: 12px;
    border: 4px solid var(--primary);
  }

  @media (max-width: 768px) {
    .carousel-img {
      height: 300px;
    }
  }
`;

const MissionVisionSection = styled.section`
  padding: 4rem 0;
  background: ${({ theme }) => theme.name === "light" 
    ? "linear-gradient(135deg, #FFF8F0 0%, #FFE4CC 100%)" 
    : "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)"};
`;

const MissionCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid var(--primary);
  transition: transform 0.3s ease;
  background: ${({ theme }) => theme.background};

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 12px rgba(255, 107, 53, 0.3);
    border-left-color: var(--accent-gold);
  }

  .card-icon {
    font-size: 3rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }
`;

export default function Home() {
  const { name } = useSelector(selectData);
  const [showModal, setShowModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail("");
    }, 3000);
  };

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

  const testimonials = [
    {
      text: "SOCTA has been instrumental in keeping our Telugu culture alive in Ontario. The events are well-organized and bring the community together.",
      author: "Priya Sharma",
      role: "Member since 2020"
    },
    {
      text: "As a parent, I'm grateful for the Telugu language classes SOCTA offers. My children are learning our mother tongue and connecting with their heritage.",
      author: "Rajesh Kumar",
      role: "Family Member"
    },
    {
      text: "The festivals organized by SOCTA feel just like home. It's a wonderful way to celebrate our traditions with fellow Telugu people.",
      author: "Lakshmi Reddy",
      role: "Community Member"
    }
  ];

  const upcomingEventsPreview = [
    {
      title: "Sri Rama Navami 2025",
      date: "Apr 12",
      year: "2025",
      location: "Guelph Estate",
      image: "/SRK_2025_Flyer.jpg",
      link: "/events"
    },
    {
      title: "Telugu Language Classes",
      date: "Every Sat",
      year: "2025",
      location: "Community Center",
      image: "/4.png",
      link: "/events"
    },
    {
      title: "Community Picnic",
      date: "Jul 20",
      year: "2025",
      location: "Victoria Park",
      image: "/6.png",
      link: "/events"
    }
  ];

  const valuePropositions = [
    {
      icon: "mdi:heart-multiple",
      title: "Community First",
      description: "We prioritize building strong connections and lasting relationships within our Telugu community."
    },
    {
      icon: "mdi:book-education",
      title: "Cultural Preservation",
      description: "Dedicated to preserving and promoting Telugu language, traditions, and cultural heritage."
    },
    {
      icon: "mdi:account-group",
      title: "Inclusive Environment",
      description: "Welcoming all Telugu families and individuals, regardless of background or origin."
    },
    {
      icon: "mdi:calendar-check",
      title: "Year-Round Events",
      description: "Regular festivals, cultural programs, and social gatherings throughout the year."
    }
  ];

  const sponsors = [
    { name: "Sponsor 1", logo: null },
    { name: "Sponsor 2", logo: null },
    { name: "Sponsor 3", logo: null },
    { name: "Sponsor 4", logo: null }
  ];

  const carouselImages = [
    { src: "/SRK_2025_Flyer.jpg", caption: "Sri Rama Navami Celebrations" },
    { src: "/Bathukamma_Flyer.jpg", caption: "Bathukamma Festival" },
    { src: "/1.png", caption: "Community Gathering" },
    { src: "/21.png", caption: "Cultural Events" }
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
        <Element name="About" id="about">
          <AboutMe />
        </Element>

        {/* Mission & Vision Section */}
        <MissionVisionSection>
          <Container>
            <SectionTitle>
              <Icon icon="mdi:bullseye-arrow" className="me-2" />
              Our Mission & Vision
            </SectionTitle>
            <Row>
              <Col md={6} className="mb-4">
                <MissionCard>
                  <Card.Body>
                    <div className="card-icon">
                      <Icon icon="mdi:target" />
                    </div>
                    <Card.Title>
                      <h3>Our Mission</h3>
                    </Card.Title>
                    <Card.Text>
                      To foster a vibrant Telugu community in Southern Ontario by celebrating our rich cultural heritage,
                      promoting the Telugu language, and creating meaningful connections that bridge generations and
                      strengthen our cultural identity.
                    </Card.Text>
                  </Card.Body>
                </MissionCard>
              </Col>
              <Col md={6} className="mb-4">
                <MissionCard>
                  <Card.Body>
                    <div className="card-icon">
                      <Icon icon="mdi:eye" />
                    </div>
                    <Card.Title>
                      <h3>Our Vision</h3>
                    </Card.Title>
                    <Card.Text>
                      To be the leading Telugu cultural organization in Southern Ontario, recognized for preserving and
                      promoting our heritage while building an inclusive, supportive community where every member feels
                      connected to their roots and empowered to celebrate their cultural identity.
                    </Card.Text>
                  </Card.Body>
                </MissionCard>
              </Col>
            </Row>
          </Container>
        </MissionVisionSection>

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

        {/* Value Propositions */}
        <ValuePropositionSection>
          <Container>
            <SectionTitle>
              <Icon icon="mdi:star-four-points" className="me-2" />
              Why Choose SOCTA
            </SectionTitle>
            <Row>
              {valuePropositions.map((value, index) => (
                <Col key={index} md={6} lg={3} className="mb-4">
                  <ValueCard>
                    <div className="value-icon">
                      <Icon icon={value.icon} />
                    </div>
                    <h4>{value.title}</h4>
                    <Card.Text>{value.description}</Card.Text>
                  </ValueCard>
                </Col>
              ))}
            </Row>
          </Container>
        </ValuePropositionSection>

        {/* Image Carousel */}
        <ImageCarouselSection>
          <Container>
            <SectionTitle>
              <Icon icon="mdi:image-multiple" className="me-2" />
              Community Highlights
            </SectionTitle>
            <Carousel>
              {carouselImages.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 carousel-img"
                    src={image.src}
                    alt={image.caption}
                  />
                  <Carousel.Caption>
                    <h3 style={{ 
                      background: 'rgba(0,0,0,0.7)', 
                      padding: '1rem', 
                      borderRadius: '8px',
                      display: 'inline-block'
                    }}>
                      {image.caption}
                    </h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </ImageCarouselSection>

        {/* Upcoming Events Preview */}
        <UpcomingEventsPreview>
          <Container>
            <SectionTitle>
              <Icon icon="mdi:calendar-clock" className="me-2" />
              Upcoming Events
            </SectionTitle>
            <Row>
              {upcomingEventsPreview.map((event, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Link to={event.link} style={{ textDecoration: 'none' }}>
                    <EventPreviewCard>
                      <div style={{ position: 'relative' }}>
                        <Card.Img 
                          variant="top" 
                          src={event.image} 
                          alt={event.title}
                          className="event-img"
                        />
                        <div className="event-date-badge">
                          {event.date}
                          <br />
                          {event.year}
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>
                          <Icon icon="mdi:map-marker" className="me-2 text-primary" />
                          {event.location}
                        </Card.Text>
                        <Button variant="outline-primary" size="sm">
                          Learn More →
                        </Button>
                      </Card.Body>
                    </EventPreviewCard>
                  </Link>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-4">
              <Link to="/events">
                <Button variant="primary" size="lg">
                  <Icon icon="mdi:calendar-multiple" className="me-2" />
                  View All Events
                </Button>
              </Link>
            </div>
          </Container>
        </UpcomingEventsPreview>

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
                    <Icon icon="mdi:ticket" className="me-2" />
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

        {/* Testimonials */}
        <TestimonialSection>
          <Container>
            <SectionTitle>
              <Icon icon="mdi:comment-quote" className="me-2" />
              What Our Members Say
            </SectionTitle>
            <Row>
              {testimonials.map((testimonial, index) => (
                <Col key={index} md={4} className="mb-4">
                  <TestimonialCard>
                    <Card.Body>
                      <div className="quote-icon">
                        <Icon icon="mdi:format-quote-open" />
                      </div>
                      <Card.Text className="testimonial-text">
                        "{testimonial.text}"
                      </Card.Text>
                      <div className="testimonial-author">{testimonial.author}</div>
                      <div className="text-muted">
                        <small>{testimonial.role}</small>
                      </div>
                    </Card.Body>
                  </TestimonialCard>
                </Col>
              ))}
            </Row>
          </Container>
        </TestimonialSection>

        {/* What We Offer */}
        <Element name="Skills" id="skills">
          <Skills />
        </Element>

        {/* Newsletter Signup */}
        <NewsletterSection>
          <Container>
            <Icon icon="mdi:email-newsletter" style={{ fontSize: "4rem", marginBottom: "1rem" }} />
            <h2>Stay Connected</h2>
            <p>Subscribe to our newsletter for updates on events, programs, and community news</p>
            <Form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <Row>
                <Col md={8} className="mb-2 mb-md-0">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    size="lg"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    disabled={newsletterSubmitted}
                  />
                </Col>
                <Col md={4}>
                  <Button 
                    type="submit" 
                    variant="light" 
                    size="lg" 
                    className="w-100"
                    disabled={newsletterSubmitted}
                  >
                    {newsletterSubmitted ? (
                      <>
                        <Icon icon="mdi:check-circle" className="me-2" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <Icon icon="mdi:send" className="me-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </NewsletterSection>

        {/* Sponsors Section */}
        <SponsorsSection>
          <Container>
            <SectionTitle>
              <Icon icon="mdi:handshake" className="me-2" />
              Our Partners & Sponsors
            </SectionTitle>
            <Row>
              {sponsors.map((sponsor, index) => (
                <Col key={index} md={6} lg={3} className="mb-4">
                  <SponsorLogo>
                    {sponsor.logo ? (
                      <img src={sponsor.logo} alt={sponsor.name} />
                    ) : (
                      <div className="placeholder-text">{sponsor.name}</div>
                    )}
                  </SponsorLogo>
                </Col>
              ))}
            </Row>
            <p className="text-muted mt-4">
              Interested in sponsoring SOCTA events? 
              <Link to="/#contact" className="ms-2">Contact us</Link>
            </p>
          </Container>
        </SponsorsSection>

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
              <Button variant="outline-primary" size="lg" onClick={handleShow}>
                <Icon icon="mdi:hand-heart" className="me-2" />
                Volunteer
              </Button>
            </div>
          </CTASection>
        </Container>

        {/* Contact Section */}
        <Element name="Contact" id="contact">
          <Contact />
        </Element>
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
