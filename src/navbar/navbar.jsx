import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';



function OffcanvasExample() {
  return (
    <div className='stickytop'> 
      { [false].map((expand) => (
        <Navbar key={expand} collapse="sm"  expand={expand} className="mb-3 stickytop">
          <Container  fluid>
            <Navbar.Brand className='NavbarTitle' href="/">Jody Grenier Art</Navbar.Brand>
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
                  <a  href={"/SyracuseGallery"}><h3 className='navlinks'>Syracuse</h3></a>
                  <a  href={"/Wildlifegallery"}><h3 className='navlinks'>Wildlife</h3></a>
                  <a  href={"/SeascapesGallery"}><h3 className='navlinks'>Seascapes</h3></a>
              
                  <a href={"/contactme"}><h3  className="navlinks">Contact Me</h3></a>
             
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