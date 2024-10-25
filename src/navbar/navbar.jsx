import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavDropdown } from 'react-bootstrap';


function OffcanvasExample() {
  return (
    <div className='stickytop'> 
      { [false].map((expand) => (
        <Navbar key={expand} collapse="sm" bg="light" expand={expand} className="mb-3 ">
          <Container  fluid>
            <Navbar.Brand  href="/">Jody Grenier Art</Navbar.Brand>
            <Navbar.Toggle  aria-controls={` offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  className='ocheader'  closeButton>
                Jody Grenier Art
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>    
                </Offcanvas.Title> 
              </Offcanvas.Header>
              <Offcanvas.Body className='backgroundimage'>
             
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
             
                  <a  href={"/eaglegallery"}><h3 className='navlinks'>Eagles</h3></a>
              
                  <Nav.Link as={Link} to={"/contactme"}><h3  className="">Contact Me</h3></Nav.Link>
             
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

   </div>
  );
}

export default OffcanvasExample;