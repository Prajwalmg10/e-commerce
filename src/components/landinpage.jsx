import LandingNav from "./landingNav";
import "./css/landing.css"
import { Col, Container, Row } from "react-bootstrap";
const LandingPage=()=>{
    return(
        <div className="landingpage">
            <LandingNav/>
            <Container className="landing_banner" >
               <Row>
                <Col>
                    <h1>
                     Relief from stress when <br />splitting costs with
                    </h1>
                </Col>
                <Col></Col>
               </Row>
            </Container>
        </div>
    )
}

export default LandingPage;