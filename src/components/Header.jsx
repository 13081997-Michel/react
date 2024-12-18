import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
// logo
import Logo from '../assets/winelogo.jpg'

export function Header ( props ) {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img src={Logo} style={{ maxWidth: '60px'}} />
                    { props.text }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Wines">Wines</Nav.Link>
                        <Nav.Link href="About">About</Nav.Link>
                        <Nav.Link href="/Login">Sign in</Nav.Link>
                        <Nav.Link href="/register">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 