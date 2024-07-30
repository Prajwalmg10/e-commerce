import { Button, Container, Nav, Navbar } from "react-bootstrap";

const LandingNav=()=>{
    return(
        <div className="landingNav">
                <Navbar bg="" data-bs-theme="light">
                    <Container>
                        <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        <Nav>
                            <Nav.Link className="text-success" href="">Sign Up</Nav.Link>
                            <Button variant="primary">Login</Button>
                        </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default LandingNav;