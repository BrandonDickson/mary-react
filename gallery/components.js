import React from 'react'

export const Gallery ({ children }) => (
  <div className='gallery'>
    <div className='gallery-container'>{ children }</children>
  </div>
)

export const GalleryTitle({ children }) => (
  <div className='gallery-title'>{ children }</div>
)

export const GalleryQuote ({ children, cite }) => (
  <blockquote className='gallery-quote'>
    { children }
    <cite className='gallery-quote-cite'>{ cite }</cite>
  </blockquote>
)

export const GalleryImageList = ({ children }) => (
  <div className='gallery-image-list'>
    { children }
  </div>
)

export const GalleryImage = ({ src, width, height }) => (
  <img className='gallery-image' src={ src }
    width={ width } height={ height } />
)
