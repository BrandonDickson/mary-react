import React from 'react'


export const ContactSection = ({ children }) => (
  <div className='contact-section'>
    <div className='contact-section-container'>
      { children }
    </div>
  </div>
)

export const ContactInfo = ({ children }) => (
  <div className='contact-info'>
    { children }
  </div>
)

export const ContactInfoTitle = ({ children }) => (
  <h2 className='contact-info-title'>
    { children }
  </h2>
)

export const TextField = ({ type = 'text', value, label, onChange }) => (
  <label className='text-field'>
    <span className='text-field-label'>{ label }</span>
    <input type={ type } className='text-field-input' onChange={ onChange } value={ value } />
  </label>
)

export const TextAreaField = ({ value, label, onChange }) => (
  <label className='textarea-field'>
    <span className='textarea-field-label'>{ label }</span>
    <textarea className='textarea-field-input' onChange={ onChange }>{ value }</textarea>
  </label>
)

export const ContactForm = ({ children, onSubmit }) => (
  <form className='contact-form' onSubmit={ onSubmit }>
    { children }
    <button className='contact-form-button' type='submit'>Submit</button>
  </form>
)
