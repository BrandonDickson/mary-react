import React from 'react'

const GalleryPhoto = ({ url, width, height }) => (
  <div className='gallery-photo'>
    <img src={ url } width={ width } height={ height } />
  </div>
)

export default const Gallery = ({ photos }) => (
  <div className='gallery'>
    {
      photos.map(x => <GalleryPhoto {...x} />)
    }
  </div>
)
