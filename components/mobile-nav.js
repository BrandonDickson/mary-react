import React from 'react'
import { Link } from 'react-router'

const getMobileNavClass = (state) => {
  switch (state) {
    case 'OPENING': return 'mobile-nav-opening';
    case 'OPEN'   : return 'mobile-nav-open';
    case 'CLOSING': return 'mobile-nav-closing';
    case 'CLOSED' : return 'mobile-nav-closed';
  }
}

export const MobileNav = ({ state, onRequestClose, onTransitionEnd, children }) => (
  <div
    onClick={ onRequestClose }
    onTransitionEnd={ onTransitionEnd }
    className={ getMobileNavClass(state) }>
    <div className="mobile-nav-content">
      { children }
    </div>
  </div>
)

export const MobileNavTitle = ({ children }) => (
  <div className='mobile-nav-title'>{ children }</div>
)

export const MobileNavSection = ({ children }) => (
  <div className='mobile-nav-section'>{ children }</div>
)

export const MobileNavLink = ({ to, children }) => (
  <Link className='mobile-nav-link' to={ to }>{ children }</Link>
)
