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
      <main>
        <AboutMe />
        <Skills />
        <Contact />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
      <Button variant="primary" onClick={handleShow} style={{ position: 'fixed', align: 'center', bottom: '20px', right: '20px' }}>
        Register for Bathukamma Event
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: 'black',fontWeight: 'bold'}}>Register for Bathukamma Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{color: 'black',fontWeight: 'bold'}}>
            <br />
            <span style={{ textDecoration: 'underline', color: 'red', fontWeight: 'bold' }}>Date:</span>  Oct 6th, 2024 Time: 4PM Onwards
            <br />
            <span style={{ textDecoration: 'underline', color: 'red', fontWeight: 'bold' }}>Venue:</span> RIM Park
            <br />
            <span style={{ textDecoration: 'underline', color: 'red', fontWeight: 'bold' }}>Address:</span> 2001 University Ave E, Waterloo, ON N2K 4K4
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
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScd7hlK2dPK0kQ1uA2MH5qXbXxG0D4iGPVk-gzXBczQ6DkppA/viewform', '_blank')}
          >
           Register for Bathukamma 2024 Event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
