import {  Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingNav=()=>{
    return(
        <div className="landingNav">
                <Navbar bg="" data-bs-theme="light">
                    <Container>
                        <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        <Nav>
                            <Nav.Link className="text-success me-4" href="/signup">Sign Up</Nav.Link>
                            <Link to={`/login`} className="btn btn-primary">Login</Link>
                        </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default LandingNav;