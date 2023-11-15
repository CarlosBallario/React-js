import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Computadoras</Nav.Link>
            <Nav.Link href="#features">Placas madres</Nav.Link>
            <Nav.Link href="#pricing">Placas de video</Nav.Link>
            <Nav.Link href="#pricing">Discos</Nav.Link>
            <Nav.Link href="#pricing">Memorias </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;