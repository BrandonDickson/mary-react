import React from 'react'

if (document) {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  link.rel ='stylesheet'
  document.head.appendChild(link);
}

export const MaterialIcon = ({ icon }) => (
  <span className='material-icons'>{ icon }</span>
)
