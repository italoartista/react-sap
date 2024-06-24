import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() { 
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Italo Adler - Software Enginers</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/'>Principal</Link></Nav.Link>
            <Nav.Link href="#features"><Link to='/about'>Sobre</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to='/projects'>Projetos</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    
     
        </>
        // <nav>
        //     <ul>
        //         <li><Link to="/">Home</Link></li>
        //         <li><Link to="/about">About</Link></li>
        //         <li><Link to="/projects">Projects</Link></li>
        //     </ul>   
        // </nav>
    )
}
export default NavBar;