import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";
import { BackToTop } from "../components/globalStyledComponents";

const StyledMembershipPage = styled.div`
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

const BenefitsSection = styled.div`
  margin-bottom: 4rem;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary);
  }
`;

const BenefitCard = styled(Card)`
  height: 100%;
  text-align: center;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon-wrapper {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;

const MembershipTier = styled(Card)`
  height: 100%;
  border: 2px solid ${props => props.$featured ? 'var(--primary)' : '#dee2e6'};
  box-shadow: ${props => props.$featured ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)'};
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: bold;
  font-size: 0.9rem;
`;

const PriceTag = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: var(--primary);
  margin: 1rem 0;

  span {
    font-size: 1.5rem;
    color: #6c757d;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    svg {
      color: var(--primary);
      margin-right: 0.5rem;
    }
  }
`;

const RegistrationForm = styled(Form)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #333;

  h3 {
    color: var(--primary);
    margin-bottom: 1.5rem;
  }
`;

const membershipBenefits = [
  {
    icon: "mdi:calendar-star",
    title: "Exclusive Events",
    description: "Access to all SOCTA cultural events, festivals, and celebrations throughout the year"
  },
  {
    icon: "mdi:account-group",
    title: "Community Network",
    description: "Connect with Telugu families and build lasting relationships in Southern Ontario"
  },
  {
    icon: "mdi:school",
    title: "Educational Programs",
    description: "Free or discounted Telugu language classes and cultural workshops for all ages"
  },
  {
    icon: "mdi:ticket-percent",
    title: "Member Discounts",
    description: "Special discounts on event registrations, workshops, and cultural programs"
  },
  {
    icon: "mdi:vote",
    title: "Voting Rights",
    description: "Voice your opinion in organizational decisions and elections"
  },
  {
    icon: "mdi:email-newsletter",
    title: "Newsletter & Updates",
    description: "Stay informed with exclusive newsletters and early event announcements"
  }
];

const membershipTiers = [
  {
    name: "Individual",
    price: 50,
    period: "year",
    featured: false,
    features: [
      "Access to all SOCTA events",
      "Voting rights in elections",
      "Newsletter subscription",
      "10% discount on workshops",
      "Community networking"
    ]
  },
  {
    name: "Family",
    price: 100,
    period: "year",
    featured: true,
    features: [
      "All Individual benefits",
      "Covers entire family (up to 4 members)",
      "Priority event registration",
      "20% discount on workshops",
      "Free Telugu language classes",
      "Exclusive family events access"
    ]
  },
  {
    name: "Patron",
    price: 250,
    period: "year",
    featured: false,
    features: [
      "All Family benefits",
      "Recognition on website",
      "VIP seating at events",
      "50% discount on all workshops",
      "Free event photography",
      "Board meeting attendance (observer)"
    ]
  }
];

export default function Membership() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "ON",
    postalCode: "",
    membershipType: "Family",
    familyMembers: "",
    interests: [],
    comments: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(i => i !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Membership Form Data:", formData);
    setSubmitted(true);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "ON",
        postalCode: "",
        membershipType: "Family",
        familyMembers: "",
        interests: [],
        comments: ""
      });
    }, 3000);
  };

  React.useEffect(() => {
    document.title = "Membership - SOCTA";
  }, []);

  return (
    <>
      <StyledMembershipPage>
        <PageHeader>
          <Container>
            <Icon icon="mdi:account-heart" className="mb-3" style={{ fontSize: "4rem" }} />
            <h1>Become a Member</h1>
            <p>Join the SOCTA family and be part of our vibrant Telugu community</p>
          </Container>
        </PageHeader>

        <Container className="mb-5">
          {/* Benefits Section */}
          <BenefitsSection>
            <h2>
              <Icon icon="mdi:star-circle" className="me-2" />
              Membership Benefits
            </h2>
            <Row>
              {membershipBenefits.map((benefit, index) => (
                <Col key={index} md={6} lg={4} className="mb-4">
                  <BenefitCard>
                    <Card.Body>
                      <div className="icon-wrapper">
                        <Icon icon={benefit.icon} />
                      </div>
                      <Card.Title>{benefit.title}</Card.Title>
                      <Card.Text>{benefit.description}</Card.Text>
                    </Card.Body>
                  </BenefitCard>
                </Col>
              ))}
            </Row>
          </BenefitsSection>

          {/* Membership Tiers */}
          <div className="mb-5">
            <h2 className="text-center mb-4" style={{ color: "var(--primary)" }}>
              <Icon icon="mdi:trophy" className="me-2" />
              Membership Plans
            </h2>
            <Row>
              {membershipTiers.map((tier, index) => (
                <Col key={index} md={4} className="mb-4">
                  <MembershipTier $featured={tier.featured}>
                    {tier.featured && <FeaturedBadge>Most Popular</FeaturedBadge>}
                    <Card.Body className="text-center">
                      <Card.Title className="mt-3">
                        <h3>{tier.name}</h3>
                      </Card.Title>
                      <PriceTag>
                        ${tier.price}
                        <span>/{tier.period}</span>
                      </PriceTag>
                      <FeatureList>
                        {tier.features.map((feature, idx) => (
                          <li key={idx}>
                            <Icon icon="mdi:check-circle" />
                            {feature}
                          </li>
                        ))}
                      </FeatureList>
                      <Button 
                        variant={tier.featured ? "primary" : "outline-primary"}
                        className="w-100 mt-3"
                        onClick={() => setFormData(prev => ({ ...prev, membershipType: tier.name }))}
                      >
                        Select {tier.name}
                      </Button>
                    </Card.Body>
                  </MembershipTier>
                </Col>
              ))}
            </Row>
          </div>

          {/* Registration Form */}
          <Row className="justify-content-center">
            <Col lg={8}>
              <RegistrationForm onSubmit={handleSubmit}>
                <h3>
                  <Icon icon="mdi:clipboard-text" className="me-2" />
                  Membership Registration
                </h3>

                {submitted && (
                  <Alert variant="success">
                    <Icon icon="mdi:check-circle" className="me-2" />
                    Thank you for your membership registration! We will contact you shortly.
                  </Alert>
                )}

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Row>
                  <Col md={5}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Province</Form.Label>
                      <Form.Select
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                      >
                        <option value="ON">ON</option>
                        <option value="BC">BC</option>
                        <option value="AB">AB</option>
                        <option value="QC">QC</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Membership Type *</Form.Label>
                  <Form.Select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    required
                  >
                    <option value="Individual">Individual - $50/year</option>
                    <option value="Family">Family - $100/year</option>
                    <option value="Patron">Patron - $250/year</option>
                  </Form.Select>
                </Form.Group>

                {formData.membershipType === "Family" && (
                  <Form.Group className="mb-3">
                    <Form.Label>Family Members (Names and Ages)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="familyMembers"
                      value={formData.familyMembers}
                      onChange={handleChange}
                      placeholder="Example: John Doe (35), Jane Doe (32), Child 1 (10), Child 2 (7)"
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Areas of Interest</Form.Label>
                  <div>
                    {["Cultural Events", "Language Classes", "Youth Programs", "Volunteering", "Sports & Recreation"].map(interest => (
                      <Form.Check
                        key={interest}
                        type="checkbox"
                        id={interest}
                        label={interest}
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Additional Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button type="submit" variant="primary" size="lg" className="w-100">
                  <Icon icon="mdi:send" className="me-2" />
                  Submit Registration
                </Button>

                <p className="text-muted text-center mt-3">
                  <small>* Required fields</small>
                </p>
              </RegistrationForm>
            </Col>
          </Row>
        </Container>

        <BackToTop home="Home" />
      </StyledMembershipPage>
      <Footer />
    </>
  );
}
