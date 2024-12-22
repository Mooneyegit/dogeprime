import { Container,Row,Col  } from "react-bootstrap"
import navIcon1 from '../assert/Images/twitter.png'
import navIcon2 from '../assert/Images/telegram.png'
import navIcon3 from '../assert/Images/medium.png'
import logo from '../assert/Images/dogoprimeface.png'




 const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="image" /></a>
                <a href="#"><img src={navIcon2} alt="navphoto" /></a>
                <a href="#"><img src={navIcon3} alt="navimage" /></a>
              </div>
              <p>Copyright 2024. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
export default Footer;