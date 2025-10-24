import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";
import { BackToTop } from "../components/globalStyledComponents";

const StyledEventsPage = styled.div`
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

const EventCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
`;

const EventDate = styled.div`
  background: var(--primary);
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 1rem;

  .day {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1;
  }

  .month {
    font-size: 1rem;
    text-transform: uppercase;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  button {
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
  }
`;

const CalendarSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  color: #333;

  h3 {
    color: var(--primary);
    margin-bottom: 1.5rem;
  }
`;

// Sample event data - Replace with your actual events
const eventsData = [
  {
    id: 1,
    title: "Sri Rama Navami Celebrations 2025",
    date: "2025-04-06",
    day: "06",
    month: "Apr",
    year: "2025",
    time: "10:00 AM - 6:00 PM",
    location: "Guelph Eastgate",
    category: "festival",
    description: "Join us for the grand celebration of Sri Rama Navami with cultural programs, puja, and community feast.",
    image: "/SRK_2025_Flyer.jpg",
    registrationLink: "https://bit.ly/SOCTASitaRamaKalyanam",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Sankranti Celebrations 2026",
    date: "2026-01-14",
    day: "14",
    month: "Jan",
    year: "2026",
    time: "3:00 PM - 8:00 PM",
    location: "TBD",
    category: "festival",
    description: "Celebrate Sankranti with traditional rangoli, bhogi mantalu, and cultural performances.",
    image: "/21.png",
    registrationLink: "#",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Telugu Language Classes",
    date: "2025-11-01",
    day: "01",
    month: "Nov",
    year: "2025",
    time: "Every Saturday, 10:00 AM - 12:00 PM",
    location: "Community Center",
    category: "education",
    description: "Learn and preserve our beautiful Telugu language. Classes for all age groups.",
    image: "/4.png",
    registrationLink: "#",
    status: "ongoing"
  },
  {
    id: 4,
    title: "Bathukamma Festival 2024",
    date: "2024-10-12",
    day: "12",
    month: "Oct",
    year: "2024",
    time: "5:00 PM - 9:00 PM",
    location: "Community Park",
    category: "festival",
    description: "Women's festival celebrating nature and culture with flower arrangements and folk songs.",
    image: "/Bathukamma_Flyer.jpg",
    registrationLink: "#",
    status: "past"
  },
  {
    id: 5,
    title: "Ugadi New Year 2026",
    date: "2026-03-22",
    day: "22",
    month: "Mar",
    year: "2026",
    time: "11:00 AM - 5:00 PM",
    location: "TBD",
    category: "festival",
    description: "Welcome the Telugu New Year with traditional pachadi, cultural programs, and community gathering.",
    image: "/5.png",
    registrationLink: "#",
    status: "upcoming"
  },
  {
    id: 6,
    title: "Community Picnic",
    date: "2025-07-20",
    day: "20",
    month: "Jul",
    year: "2025",
    time: "12:00 PM - 6:00 PM",
    location: "Victoria Park",
    category: "social",
    description: "Annual community picnic with games, food, and fun activities for all ages.",
    image: "/6.png",
    registrationLink: "#",
    status: "upcoming"
  }
];

export default function Events() {
  const [filter, setFilter] = useState("all");

  const getFilteredEvents = () => {
    switch(filter) {
      case "upcoming":
        return eventsData.filter(e => e.status === "upcoming");
      case "past":
        return eventsData.filter(e => e.status === "past");
      case "ongoing":
        return eventsData.filter(e => e.status === "ongoing");
      default:
        return eventsData;
    }
  };

  const upcomingEvents = eventsData.filter(e => e.status === "upcoming");

  React.useEffect(() => {
    document.title = "Events - SOCTA";
  }, []);

  return (
    <>
      <StyledEventsPage>
        <PageHeader>
          <Container>
            <Icon icon="mdi:calendar-star" className="mb-3" style={{ fontSize: "4rem" }} />
            <h1>SOCTA Events</h1>
            <p>Join us in celebrating our rich Telugu culture and heritage</p>
          </Container>
        </PageHeader>

        <Container className="mb-5">
          {/* Calendar Section */}
          <CalendarSection>
            <h3>
              <Icon icon="mdi:calendar-month" className="me-2" />
              Upcoming Events Calendar
            </h3>
            <Row>
              {upcomingEvents.map(event => (
                <Col key={event.id} md={4} className="mb-3">
                  <div className="d-flex align-items-center p-3 bg-light rounded">
                    <EventDate className="me-3" style={{ minWidth: "80px" }}>
                      <div className="day">{event.day}</div>
                      <div className="month">{event.month}</div>
                    </EventDate>
                    <div>
                      <h6 className="mb-1">{event.title}</h6>
                      <small className="text-muted">
                        <Icon icon="mdi:clock-outline" className="me-1" />
                        {event.time}
                      </small>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </CalendarSection>

          {/* Filter Buttons */}
          <FilterButtons>
            <Button 
              variant={filter === "all" ? "primary" : "outline-primary"}
              onClick={() => setFilter("all")}
            >
              All Events
            </Button>
            <Button 
              variant={filter === "upcoming" ? "primary" : "outline-primary"}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming
            </Button>
            <Button 
              variant={filter === "ongoing" ? "primary" : "outline-primary"}
              onClick={() => setFilter("ongoing")}
            >
              Ongoing
            </Button>
            <Button 
              variant={filter === "past" ? "primary" : "outline-primary"}
              onClick={() => setFilter("past")}
            >
              Past Events
            </Button>
          </FilterButtons>

          {/* Events Grid */}
          <Row>
            {getFilteredEvents().map(event => (
              <Col key={event.id} md={6} lg={4} className="mb-4">
                <EventCard>
                  <Card.Img variant="top" src={event.image} alt={event.title} />
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Badge bg={
                        event.status === "upcoming" ? "success" : 
                        event.status === "ongoing" ? "info" : "secondary"
                      }>
                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                      </Badge>
                      <Badge bg="light" text="dark">{event.category}</Badge>
                    </div>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>
                      <Icon icon="mdi:calendar" className="me-2 text-primary" />
                      {event.month} {event.day}, {event.year}
                    </Card.Text>
                    <Card.Text>
                      <Icon icon="mdi:clock-outline" className="me-2 text-primary" />
                      {event.time}
                    </Card.Text>
                    <Card.Text>
                      <Icon icon="mdi:map-marker" className="me-2 text-primary" />
                      {event.location}
                    </Card.Text>
                    <Card.Text className="text-muted">
                      {event.description}
                    </Card.Text>
                    {event.status === "upcoming" && event.registrationLink !== "#" && (
                      <Button 
                        variant="primary" 
                        className="w-100"
                        href={event.registrationLink}
                        target="_blank"
                      >
                        Register Now
                      </Button>
                    )}
                  </Card.Body>
                </EventCard>
              </Col>
            ))}
          </Row>

          {getFilteredEvents().length === 0 && (
            <div className="text-center py-5">
              <Icon icon="mdi:calendar-blank" style={{ fontSize: "4rem", opacity: 0.3 }} />
              <p className="text-muted mt-3">No events found in this category.</p>
            </div>
          )}
        </Container>

        <BackToTop home="Home" />
      </StyledEventsPage>
      <Footer />
    </>
  );
}
