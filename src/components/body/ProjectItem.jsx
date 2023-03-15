import React from 'react'
import {Card, Container, Col} from "react-bootstrap"

function ProjectItem({ id, title, github, description,technologies, image , deployed, color}) {
  return (
    <div>
        <>
            <Container>
                <Col>
                <Card style={{ width: '22rem' , backgroundColor: color }} >          
                    
                        <Card.Body>
                            <Card.Title style={{ cursor: 'pointer' }} >
                                {title}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{technologies}</Card.Subtitle>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Link href={github}>GitHub</Card.Link>
                        </Card.Body>
                </Card>
                <br/>
                <br/>
                <br/>
                </Col>

            </Container>
        </>
        
    </div>
  )
}

export default ProjectItem