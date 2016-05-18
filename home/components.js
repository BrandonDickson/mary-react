import React from 'react'
import { Layout } from '../layout/components'
import { Hero, HeroContainer } from '../hero/components'
import { Link } from 'react-router'

const heading = 'Hello.'

const message = `
  Mary Dickson is a photographer in Fuquay Varina, NC.
  Please feel free to browse her photos, and
  get in touch with her if you would like her
  to take some pictures for you.
`

const Nav = ({ children }) => (
  <div className='home-page-nav'>{ children }</div>
)

const NavItem = ({ label, src, to }) => (
  <div className='home-page-nav-item'>
    <img className='home-page-nav-item-photo' src={ src } />
    <div className='home-page-nav-item-info'>
      <h3 className='home-page-nav-item-info-label'>{ label }</h3>
      <Link className='home-page-nav-item-info-button' to='engagement'>View Gallery</Link>
    </div>
  </div>
)

export const Home = () => (
  <Layout className='home-page'>
    <Hero>
      <HeroContainer>
        <h1>{ heading }</h1>
        <p>{ message }</p>
        <Nav>
          <NavItem label='Engagement' to='engagement' src='http://placehold.it/640x480' />
          <NavItem label='Weddings' to='weddings' src='http://placehold.it/640x480' />
          <NavItem label='Maternity' to='maternity' src='http://placehold.it/640x480' />
          <NavItem label='Family' to='family' src='http://placehold.it/640x480' />
        </Nav>
      </HeroContainer>
    </Hero>
  </Layout>
)
