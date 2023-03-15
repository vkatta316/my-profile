import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaGithub, FaLinkedinIn, FaYahoo } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (

    <Container fluid className="footer mainmenu">
      <Row>
        <Col md="4" className="footer-body">
          <h3 className='footerText'>By Vinay Katta</h3>
        </Col>

        <Col md="4" className="footer-copyright">
          <h3 className='footerText'>Copyright © {year}</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/vkatta316"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dhruv-ramu-1a325622a/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:vinaykatta316@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaYahoo/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>

  )
}

export default Footer