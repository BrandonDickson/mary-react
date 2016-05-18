import React from 'react'
import { connect } from 'react-redux'
import { setMobileNavState } from '../nav/action-creators'
import { OPENING } from '../nav/states'
import {
  MobileBar,
  MobileBarTitle,
  MobileBarExpander
} from './components'
import { MaterialIcon } from '../../material-icon/components'

const dispatchToProps = (dispatch, props) => ({

  onExpanderClick() {
    dispatch(setMobileNavState('OPENING'))
  }

})

const MobileBarContainer = ({ dispatch }) => {

  const onExpanderClick = () => {
    dispatch(setMobileNavState(OPENING))
  }

  return (
    <MobileBar>
      <MobileBarTitle>Mary Dickson Photography</MobileBarTitle>
      <MobileBarExpander onClick={ onExpanderClick }>
        <MaterialIcon icon='menu' />
      </MobileBarExpander>
    </MobileBar>
  )
}

export default connect()(MobileBarContainer)
