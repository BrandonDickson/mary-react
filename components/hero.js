import React from 'react'

export const Hero = ({ children }) => (
  <div className='hero'>{ children }</div>
)

export const HeroContainer = ({ children }) => (
  <div className='hero-container'>{ children }</div>
)

export const HeroMessage = ({ children }) => (
  <div className='hero-message'>{ children }</div>
)

export const HeroGrid = ({ children }) => (
  <div className='hero-grid'>{ children }</div>
)

export const HeroGridItem = ({ children }) => (
  <div className='hero-grid-item'>{ children }></div>
)
