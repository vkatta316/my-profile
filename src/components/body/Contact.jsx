import React from 'react'
import PageHeader from '../header/PageHeader'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <section className="contact">
      <PageHeader title="Contact" description="Get In Touch" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <ContactForm />
          </div>
          <div className="col-12 col-lg-6">
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact