import React from "react";
import { Container } from "react-bootstrap";

export default function SRK2025() {
  React.useEffect(() => {
    document.title = "Test Page";
  }, []);

  return (
    <Container className="d-flex vh-100 align-items-center justify-content-center">
      <h1>Test Page</h1>
    </Container>
  );
}