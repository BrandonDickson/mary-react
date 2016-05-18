import React from 'react'
import { connect } from 'react-redux'
import { setMobileNavState } from './action-creators'
import { OPENING, OPEN, CLOSING, CLOSED } from './states'
import {
  MobileNav,
  MobileNavSection,
  MobileNavTitle,
  MobileNavLink
} from './components'
import { MaterialIcon } from '../../material-icon/components'

const mapStateToProps = (state) => ({
  state: state.mobile.nav.state
})

const MobileNavContainer = ({ state, dispatch }) => {

  const onRequestClose = () => {
    dispatch(setMobileNavState(CLOSING))
  }

  const onTransitionEnd = () => {
    switch (state) {
      case OPENING: return dispatch(setMobileNavState(OPEN))
      case CLOSING: return dispatch(setMobileNavState(CLOSED))
    }
  }

  return (
    <MobileNav
      onRequestClose={ onRequestClose }
      onTransitionEnd={ onTransitionEnd }
      state={ state }>
      <MobileNavTitle>Galleries</MobileNavTitle>
      <MobileNavSection>
        <MobileNavLink to='engagement'>Engagement</MobileNavLink>
        <MobileNavLink to='weddings'>Weddings</MobileNavLink>
        <MobileNavLink to='maternity'>Maternity</MobileNavLink>
        <MobileNavLink to='family'>Family</MobileNavLink>
      </MobileNavSection>
      <MobileNavSection>
        <MobileNavLink to='home'>
          <MaterialIcon icon='home' />
        </MobileNavLink>
        <MobileNavLink to='contact-mary'>
          <MaterialIcon icon='email' />
        </MobileNavLink>
      </MobileNavSection>
    </MobileNav>
  )
}

export default connect(mapStateToProps)(MobileNavContainer)
