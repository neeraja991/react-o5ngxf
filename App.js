import React from "react";
import { Container, Navbar, NavbarBrand, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">Weather </NavbarBrand>
        </Navbar>
        <Row>
          <Col />
        </Row>
        <Row>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default App;
