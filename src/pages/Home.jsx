import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";
import './Home.css';

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

  return (
    <>
    
      <Hero />
      <div className="scrolling-banner">
        <a href="https://bit.ly/SOCTASitaRamaKalyanam" target="_blank" rel="noopener noreferrer" className="register-link">
          Update: SOCTA 2025 is Organizing Sri Rama Navami Event in The Guelph Estgate. Click on this Scrolling Banner to Register for the Event
        </a>
      </div>
      <main>
        <AboutMe />
        <Skills />
        <Contact />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
      <Button variant="primary" onClick={handleShow} style={{ position: 'fixed', align: 'center', bottom: '20px', right: '20px' }}>
      Register for Sri Rama Navami Event - 2025
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: 'black',fontWeight: 'bold'}}>Register for Sri Rama Navami Event - 2025</Modal.Title>
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
          {/* Add your registration form here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => window.open('https://bit.ly/SOCTASitaRamaKalyanam', '_blank')}
          >
           Register for Sri Rama Navami 2025 Event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
