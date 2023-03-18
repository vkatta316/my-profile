import React from 'react'
import { Container, Row } from 'react-bootstrap';
import PageHeader from '../header/PageHeader';
import ProjectItem from './ProjectItem';

import projectInfo from "./projects-info/projectsInfo.json"

function Projects() {

  const ProjectList = () =>
    projectInfo.map((project, i) => (
      <ProjectItem
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" description="View my work" />
      <Container>
        <Row lg={3} md={3} sm={6} xs={6}>
          <ProjectList />
        </Row>
      </Container>

    </section>
  )
}

export default Projects