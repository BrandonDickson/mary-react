import {
  SET_CONTACT_FORM_EMAIL,
  SET_CONTACT_FORM_NAME,
  SET_CONTACT_FORM_PHONE,
  SET_CONTACT_FORM_MESSAGE,
  SET_CONTACT_FORM_STATE,
} from './action-types'

export const setContactFormEmail = (email) => ({
  type:SET_CONTACT_FORM_EMAIL,
  email
})

export const setContactFormName = (name) => ({
  type:SET_CONTACT_FORM_NAME,
  name
})

export const setContactFormPhone = (phone) => ({
  type:SET_CONTACT_FROM_PHONE,
  phone
})

export const setContactFormMessage = (message) => ({
  type:SET_CONTACT_FORM_MESSAGE,
  message
})

export const setContactFormState = (state) => ({
  type:SET_CONTACT_FORM_STATE,
  state
})
