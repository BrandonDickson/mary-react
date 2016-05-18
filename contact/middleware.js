import { SET_CONTACT_FORM_STATE } from './action-types'
import { SUBMITTING, SUBMIT_ERROR, SUBMIT_SUCCESS } from './states'
import { setContactFormState } from './action-creators'

const URL = 'https://nk3twh47gh.execute-api.us-east-1.amazonaws.com/prod/contact'

export default store =>

  const submit() {

    const state = store.getState()
    const { name, email, phone, message } = state.contact.form
    const data = JSON.stringify({ name, email, phone, message })
    const req = new XMLHttpRequest();

    req.open('POST', URL, true)
    req.setRequestHeader('Content-type', "text/json")
    req.setRequestHeader('Content-length', data.length)
    req.onreadystatechange = () {
      switch (req.readyState) {
        case 4:
          switch(req.status) {
            case 200:
              return dispatch(setContactFormState(SUBMIT_SUCCESS))
          }
      }
    }

    req.send(data)
  }

  return next => action => {
    switch(action.type) {
      case SET_CONTACT_FORM_STATE:
        switch(action.state) {
          case SUBMITTING:
            submit()
            break;
        }
        break;
    }
    next(action)
  }
}
