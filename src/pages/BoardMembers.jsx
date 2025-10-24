import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";
import { BackToTop } from "../components/globalStyledComponents";

const StyledBoardPage = styled.div`
  min-height: 100vh;
  padding-top: var(--nav-height);
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const PageHeader = styled.div`
  padding: 4rem 0 3rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--bs-primary) 100%);
  color: white;
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const MemberCard = styled(Card)`
  height: 100%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const MemberImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--bs-primary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder-icon {
    font-size: 8rem;
    color: white;
    opacity: 0.5;
  }
`;

const RoleBadge = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color};

  svg {
    color: var(--primary);
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;

    &:hover {
      color: var(--primary);
    }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: var(--primary);
  margin: 3rem 0 2rem;
  font-weight: bold;

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

const MissionSection = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  color: #333;
  text-align: center;

  h3 {
    color: var(--primary);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

// Board members data - Replace with actual information
const boardMembers = [
  {
    name: "John Doe",
    role: "President",
    bio: "Leading SOCTA with passion and dedication to serve the Telugu community.",
    email: "president@socta.org",
    phone: "+1 (555) 123-4567",
    image: null, // Add actual image path when available
    term: "2024-2026"
  },
  {
    name: "Jane Smith",
    role: "Vice President",
    bio: "Supporting the President and coordinating major cultural events.",
    email: "vp@socta.org",
    phone: "+1 (555) 234-5678",
    image: null,
    term: "2024-2026"
  },
  {
    name: "Raj Kumar",
    role: "Secretary",
    bio: "Managing communications and maintaining organizational records.",
    email: "secretary@socta.org",
    phone: "+1 (555) 345-6789",
    image: null,
    term: "2024-2026"
  },
  {
    name: "Priya Reddy",
    role: "Treasurer",
    bio: "Overseeing financial operations and ensuring fiscal responsibility.",
    email: "treasurer@socta.org",
    phone: "+1 (555) 456-7890",
    image: null,
    term: "2024-2026"
  }
];

const committeeMembers = [
  {
    name: "Sai Krishna",
    role: "Cultural Committee Head",
    bio: "Organizing cultural programs and preserving Telugu traditions.",
    email: "cultural@socta.org",
    image: null
  },
  {
    name: "Lakshmi Devi",
    role: "Youth Coordinator",
    bio: "Engaging youth and organizing programs for young members.",
    email: "youth@socta.org",
    image: null
  },
  {
    name: "Venkat Rao",
    role: "Events Coordinator",
    bio: "Planning and executing community events throughout the year.",
    email: "events@socta.org",
    image: null
  },
  {
    name: "Madhavi Sharma",
    role: "Communications Director",
    bio: "Managing social media, website, and community communications.",
    email: "communications@socta.org",
    image: null
  }
];

export default function BoardMembers() {
  React.useEffect(() => {
    document.title = "Board Members - SOCTA";
  }, []);

  const renderMemberCard = (member) => (
    <Col key={member.name} md={6} lg={3} className="mb-4">
      <MemberCard>
        <MemberImage>
          {member.image ? (
            <img src={member.image} alt={member.name} />
          ) : (
            <Icon icon="mdi:account-circle" className="placeholder-icon" />
          )}
          <RoleBadge>{member.role}</RoleBadge>
        </MemberImage>
        <Card.Body>
          <Card.Title className="mb-3">
            <strong>{member.name}</strong>
          </Card.Title>
          {member.term && (
            <p className="text-muted mb-2">
              <small>Term: {member.term}</small>
            </p>
          )}
          <Card.Text className="mb-3">
            {member.bio}
          </Card.Text>
          {member.email && (
            <ContactInfo>
              <Icon icon="mdi:email" />
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </ContactInfo>
          )}
          {member.phone && (
            <ContactInfo>
              <Icon icon="mdi:phone" />
              <a href={`tel:${member.phone}`}>{member.phone}</a>
            </ContactInfo>
          )}
        </Card.Body>
      </MemberCard>
    </Col>
  );

  return (
    <>
      <StyledBoardPage>
        <PageHeader>
          <Container>
            <Icon icon="mdi:account-group" className="mb-3" style={{ fontSize: "4rem" }} />
            <h1>Board of Directors</h1>
            <p>Meet the dedicated leaders serving the SOCTA community</p>
          </Container>
        </PageHeader>

        <Container className="mb-5">
          {/* Mission Statement */}
          <MissionSection>
            <h3>
              <Icon icon="mdi:target" className="me-2" />
              Our Leadership Mission
            </h3>
            <p>
              The SOCTA Board of Directors is committed to fostering a vibrant and inclusive Telugu community
              in Southern Ontario. Our leadership team works tirelessly to preserve our cultural heritage,
              create meaningful connections, and provide valuable programs that enrich the lives of our members
              and their families.
            </p>
          </MissionSection>

          {/* Executive Board */}
          <SectionTitle>
            <Icon icon="mdi:shield-account" className="me-2" />
            Executive Board
          </SectionTitle>
          <Row>
            {boardMembers.map(member => renderMemberCard(member))}
          </Row>

          {/* Committee Members */}
          <SectionTitle>
            <Icon icon="mdi:account-multiple" className="me-2" />
            Committee Chairs
          </SectionTitle>
          <Row>
            {committeeMembers.map(member => renderMemberCard(member))}
          </Row>

          {/* Join Us Section */}
          <Row className="mt-5">
            <Col lg={8} className="mx-auto">
              <Card className="text-center shadow">
                <Card.Body className="p-4">
                  <Icon 
                    icon="mdi:hand-heart" 
                    style={{ fontSize: "3rem", color: "var(--primary)" }} 
                    className="mb-3"
                  />
                  <Card.Title>
                    <h3>Interested in Serving?</h3>
                  </Card.Title>
                  <Card.Text>
                    We're always looking for passionate community members to join our team and help
                    make a difference. Board positions are elected annually, and committee positions
                    are open throughout the year.
                  </Card.Text>
                  <Card.Text className="text-muted">
                    <Icon icon="mdi:email" className="me-2" />
                    Contact us at <a href="mailto:board@socta.org">board@socta.org</a> to learn more
                    about volunteer opportunities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <BackToTop home="Home" />
      </StyledBoardPage>
      <Footer />
    </>
  );
}
