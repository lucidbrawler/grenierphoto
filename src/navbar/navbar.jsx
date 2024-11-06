import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import facebook from '../jodyimages/socials/facebook.svg'
import instagram from '../jodyimages/socials/instagram.svg'
import Offcanvas from 'react-bootstrap/Offcanvas';



function OffcanvasExample() {
  return (
    <div className='stickytop'> 
      { [false].map((expand) => (
        <Navbar key={expand} collapse="sm"  expand={expand} className="mb-3 ">
          <Container  fluid>
            <Navbar.Brand className='NavbarTitle' href="/"><h2>Jody Grenier Art</h2><p className='tagline'>a symphony of perception</p></Navbar.Brand>
            <Navbar.Toggle  aria-controls={` offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header   closeButton>
              <Offcanvas.Title  className='ocheader ' id={`offcanvasNavbarLabel-expand-${expand}`}>  
              <h2>Jody Grenier Art</h2><p className='tagline'>a symphony of perception</p>
                  
                </Offcanvas.Title> 
              </Offcanvas.Header>
              <Offcanvas.Body className='backgroundimage'>
             
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
             
                  <a  href={"/eaglegallery"}><h3 className='navlinks'>Eagles</h3></a>
                  <a  href={"/SyracuseGallery"}><h3 className='navlinks'>Syracuse</h3></a>
                  <a  href={"/Wildlifegallery"}><h3 className='navlinks'>Wildlife</h3></a>
                  <a  href={"/SeascapesGallery"}><h3 className='navlinks'>Seascapes</h3></a>
              
                  <a href={"/#contactme"}><h3  className="navlinks">Contact Me</h3></a>
                   
        <section >
            <a href='https://www.facebook.com/jody.grenier.9/'>
                <img className='socials' src={facebook}/>
            </a>
            <a href='https://www.instagram.com/jodyg88/'>
                <img className='socials' src={instagram}/>
            </a>
        </section>
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