import React from 'react'
import Hero from './hero'
import Gallery from './gallery'

const Quote = ({ text, author }) => (
  <blockquote className='quote'>
    <div>{ text }</div>
    <cite>{ author }</cite>
  </blockquote>
)

const GalleryHero = ({ title, quote }) => (
  <div className='gallery-hero'>
    <h1 className='gallery-hero-title'>{ title }</h1>
    <div className='gallery-hero-quote'>
      <Quote {...quote} />
    </div>
  </div>
)

export default GalleryPage = ({ title, quote, photos }) => (
  <div className='gallery-page'>
    <GalleryHero { title, quote } />
    <Gallery { photos } />
  </div>
)
