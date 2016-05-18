import { combineReducers } from 'redux'


const state = (state = 'CLOSED', action) => {
  switch(action.type) {
    case 'SET_MOBILE_NAV_STATE'  : return action.state;
  }
  return state
}

export default combineReducers({ state })
