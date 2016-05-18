import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export const TopBarLink = ({ to, children }) => (
  <Link className='top-bar-link' to={ to }>{ children }</Link>
)

export const TopBarSection = ({ children }) => (
  <div className='top-bar-section'>
    { children }
  </div>
)

export const TopBarTitle = ({ children }) => (
  <div className='top-bar-title'>
    { children }
  </div>
)

export const TopBar = ({ children }) => (
  <div className='top-bar'>
    { children }
  </div>
);
