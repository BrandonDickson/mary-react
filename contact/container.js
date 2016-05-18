import React, { Component } from 'react'
import {
  ContactSection,
  ContactForm,
  ContactInfo,
  ContactInfoTitle,
  TextField,
  TextAreaField
} from './components'
import {
  setContactFormName,
  setContactFormEmail,
  setContactFormPhone,
  setContactFormMessage,
  setContactFormState
} from './action-creators'
import { SUBMITTING } from './states'
import { connect } from 'react-redux'

const stateToProps = ({ name, email, phone, message }) => ({
  name,
  email,
  phone,
  message
})

const dispatchToProps = (dispatch) => ({

  onNameChange(event) {
    dispatch(setContactFormName(event.target.value))
  },

  onEmailChange(event) {
    dispatch(setContactFormEmail(event.target.value))
  },

  onPhoneChange(event) {
    dispatch(setContactFormPhone(event.target.value))
  },

  onMessageChange(event) {
    dispatch(setContactFormMessage(event.target.value))
  },

  onSubmit(event) {
    event.preventDefault()
    dispatch(setContactFormState(SUBMITTING))
  }

})

const ContactContainer = ({
  name,
  email,
  phone,
  message,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  onMessageChange,
  onSubmit }) => (
  <ContactSection>
    <ContactInfo>
      <ContactInfoTitle>Contact Mary</ContactInfoTitle>
    </ContactInfo>
    <ContactForm onSubmit={ onSubmit }>
      <TextField label='Name' onChange={ onNameChange } value={ name } />
      <TextField label='Email' onChange={ onEmailChange } value={ email } />
      <TextField label='Phone' onChange={ onPhoneChange } value={ phone } />
      <TextAreaField label='Message' onChange={ onMessageChange } value={ message } />
    </ContactForm>
  </ContactSection>
)

export default connect(stateToProps, dispatchToProps)(ContactContainer)
