import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Comments from '../components/Comments/Comments.js'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">SpaceX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mission">Mission</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* napravi posebna kompoentna so ovie podatoci, i stavi ja tuka */}
    {/* <Comments /> */}
    </Navbar>
  );
}

export default Navigation;