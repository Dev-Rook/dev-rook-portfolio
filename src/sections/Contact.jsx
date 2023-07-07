import React from 'react'

// Styles Import:
// import "../styles/section/contact.scss"

// Component Import:
import ContactForm from '../components/ContactForm'
import ContactBanner from '../components/ContactBanner'



const Contact = () => {
  return (
    <div className='section_contact'>
        {/* <div className="sectionTitle">Let's Get In Touch</div> */}
        <ContactForm />
        <ContactBanner />
    </div>
  )
}

export default Contact