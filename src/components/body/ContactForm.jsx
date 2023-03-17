import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function ContactForm() {
  return (
    <>
    <Container >
      <h4>Message Me</h4>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="exampleForm.ControlInput1">
            <Form.Label className='contactLabels'>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="exampleForm.ControlInput1">
            <Form.Label className='contactLabels'>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" />
          </Form.Group>
        </Row>
        <Row className="mb-3">

          <Form.Label className='contactLabels'>Mobile Number</Form.Label>
          <Form.Control type="text" name="mobileNumber" placeholder="999-999-9999" />
        </Row>

        <Row>
          <Form.Label className='contactLabels'>Message</Form.Label>
          <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: '100px' }} />
        </Row>

        <Button className='btn' type="submit" variant="dark">Send Message </Button>

      </Form>
    </Container>
  </>
  )
}

export default ContactForm