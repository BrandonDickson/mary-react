import React from 'react'

export const MobileBarTitle = ({ children }) => (
  <div className='mobile-bar-title'>{ children }</div>
)

export const MobileBarExpander = ({ onClick, children }) => (
  <button type='button' className='mobile-bar-expander' onClick={ onClick }>
    { children }
  </button>
)

export const MobileBar = ({ children }) => (
  <div className='mobile-bar'>
    { children }
  </div>
)
