import React from 'react'
import PageHeader from '../header/PageHeader'

function About({ name, location, brand, email, availability }) {
  return (
    <section className="about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      {/* <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} /> */}
    </section>
  )
}

export default About