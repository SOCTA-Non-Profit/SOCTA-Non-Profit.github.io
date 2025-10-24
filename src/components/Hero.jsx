import { Link } from "react-router-dom";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Col, Container, Row, Button } from "react-bootstrap";

const StyledHero = styled.header`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding: 4rem 0 3rem;
  background: var(--gradient-primary);
  color: white;
  overflow: hidden;

  /* Decorative patterns */
  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(211, 47, 47, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    padding: 2rem 0;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    opacity: 0.95;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .hero-icon {
    font-size: 5rem;
    margin-bottom: 1.5rem;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  }

  .feature-badges {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .feature-badge {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.3);

    svg {
      font-size: 1.5rem;
    }
  }

  .decorative-pattern {
    position: absolute;
    font-size: 8rem;
    opacity: 0.1;
    z-index: 0;

    &.pattern-1 {
      top: 20%;
      left: 10%;
      transform: rotate(-15deg);
    }

    &.pattern-2 {
      bottom: 20%;
      right: 10%;
      transform: rotate(15deg);
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      {/* Decorative patterns */}
      <div className="decorative-pattern pattern-1">
        <Icon icon="mdi:flower" />
      </div>
      <div className="decorative-pattern pattern-2">
        <Icon icon="mdi:om" />
      </div>

      <Container>
        <Row className="hero-content text-center">
          <Col>
            {/* Cultural Icon */}
            <div className="hero-icon">
              <Icon icon="mdi:hands-pray" />
            </div>

            {/* Main Heading */}
            <h1>
              Southern Ontario Cultural Telugu Association
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle">
              <Icon icon="mdi:flower-tulip" className="me-2" />
              సాంస్కృతిక సంస్థ • Cultural Heritage • Community Unity
              <Icon icon="mdi:flower-tulip" className="ms-2" />
            </p>

            {/* Description */}
            <p className="hero-description">
              Celebrating and preserving Telugu culture in Southern Ontario through festivals, 
              language programs, and community gatherings. Join us in keeping our traditions alive 
              for future generations.
            </p>

            {/* Feature Badges */}
            <div className="feature-badges">
              <div className="feature-badge">
                <Icon icon="mdi:account-group" />
                <span>500+ Members</span>
              </div>
              <div className="feature-badge">
                <Icon icon="mdi:calendar-star" />
                <span>25+ Events/Year</span>
              </div>
              <div className="feature-badge">
                <Icon icon="mdi:history" />
                <span>10+ Years</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <Link to="/membership">
                <Button 
                  variant="light" 
                  size="lg"
                  style={{ 
                    fontWeight: 'bold',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <Icon icon="mdi:account-plus" className="me-2" />
                  Become a Member
                </Button>
              </Link>
              <Link to="/events">
                <Button 
                  variant="outline-light" 
                  size="lg"
                  style={{ 
                    fontWeight: 'bold',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    borderWidth: '2px'
                  }}
                >
                  <Icon icon="mdi:calendar-month" className="me-2" />
                  View Events
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
}
