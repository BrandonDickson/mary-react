import React from 'react'
import ContactSection from './contact-section'

export default const Page = ({ contact, children, copyright }) => (
  <div className='page'>
    { children }
    <ContactSection {...contact } />
    <div className='page-footer'>
      { copyright }
    </div>
  </div>
)
