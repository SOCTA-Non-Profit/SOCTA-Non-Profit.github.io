import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
// Images
import socta_logo from '../images/SOCTA_Logo.jpg';

// #region styled-components
const StyledNavbar = styled(Navbar)`
  background: linear-gradient(90deg, #FFFFFF 0%, #FFF8F0 100%) !important;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.15);
  border-bottom: 3px solid var(--primary) !important;
  padding: 0.5rem 0;
  
  .navbar-brand {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  .nav-link {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    color: #2C1810 !important;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem !important;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 3px;
      background: var(--gradient-primary);
      transition: width 0.3s ease;
    }
    
    &:hover {
      background: rgba(255, 107, 53, 0.1);
      color: var(--primary) !important;
      
      &::after {
        width: 80%;
      }
    }
    
    &.active {
      background: var(--gradient-primary);
      color: white !important;
      box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);
      
      &::after {
        display: none;
      }
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 3px solid var(--primary);
    box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
    
    &:hover {
      transform: rotate(5deg) scale(1.05);
      border-color: var(--accent-gold);
      box-shadow: 0 4px 12px rgba(255, 107, 53, 0.5);
    }
  }
  
  .org-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: none;
    
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const FixedNavSpacer = styled.div`
  height: 80px;
`;
// #endregion

// #region component
const propTypes = {
  Logo: PropTypes.node,
};

export default function NavBar() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { pathname } = useLocation();
  
  // Unified navigation - same menu items on all pages
  const navLinks = [
    { id: "1", name: "Home", route: "/" },
    { id: "2", name: "Events", route: "/events" },
    { id: "3", name: "Membership", route: "/membership" },
    { id: "4", name: "Gallery", route: "/gallery" },
    { id: "5", name: "Board", route: "/board" },
    { id: "6", name: "Contact", route: "/#contact" },
  ];

  const closeExpanded = () => setIsExpanded(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <>
      <FixedNavSpacer />
      <StyledNavbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        fixed="top"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Link to="/" onClick={closeExpanded}>
                  <LogoContainer>
                    <img 
                      src={socta_logo} 
                      alt="SOCTA Logo"
                    />
                    <span className="org-name">SOCTA</span>
                  </LogoContainer>
                </Link>
              </Nav.Item>
            </Nav>
            <Nav navbarScroll className="ms-auto">
              {navLinks.map((link) => {
                return (
                  <Nav.Item key={link.id}>
                    <Link
                      to={link.route}
                      className={
                        pathname === link.route || 
                        (link.route === "/" && pathname === "/") ||
                        (link.route.includes("#") && pathname === "/")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={closeExpanded}
                    >
                      {link.name}
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
}

NavBar.propTypes = propTypes;
