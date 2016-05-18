import { combineReducers } from 'react'
import {
  SET_CONTACT_FORM_EMAIL
  SET_CONTACT_FORM_NAME
  SET_CONTACT_FORM_PHONE
  SET_CONTACT_FORM_MESSAGE
  SUBMIT_CONTACT_FORM
  SET_CONTACT_FORM_SUBMITTING
  SET_CONTACT_FROM_SUBMITTING_DONE
  SET_CONTACT_FROM_SUBMITTING_ERROR
} from './action-types'
import {
  DEFAULT,
  SUBMITTING,
  SUBMIT_ERROR,
  SUBMIT_SUCCESS
} from './states'

const name = (state = '', action) => {
  switch(action.type) {
    case SET_CONTACT_FORM_NAME:
      return action.name;
  }
}

const email = (state = '', action) => {
  switch(action.type) {
    case SET_CONTACT_FORM_EMAIL:
      return action.email;
  }
}

const phone = (state = '', action) => {
  switch(action.type) {
    case SET_CONTACT_FORM_PHONE:
      return action.phone;
  }
}

const message = (state = '', action) => {
  switch(action.type) {
    case SET_CONTACT_FROM_MESSAGE:
      return action.message;
  }
}

const state = (state = DEFAULT, action) => {
  switch(action.type) {
    case SET_CONTACT_FORM_STATE:
      return action.state;
  }
}

export default combineReducers({ name, email, phone, message, state })
