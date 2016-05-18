import React from 'react'
import {
  TopBar,
  TopBarSection,
  TopBarTitle,
  TopBarLink
} from '../top-bar/components'
import MobileBarContainer from '../mobile/bar/container'
import MobileNavContainer from '../mobile/nav/container'
import { MaterialIcon } from '../material-icon/components'
import ContactContainer from '../contact/container'


export const Layout = ({ className, children }) => (
  <div className={ className }>
    <TopBar>
      <TopBarTitle>Mary Dickson Photography</TopBarTitle>
      <TopBarSection>
        <TopBarLink to='engagement'>Engagement</TopBarLink>
        <TopBarLink to='weddings'>Weddings</TopBarLink>
        <TopBarLink to='maternity'>Maternity</TopBarLink>
        <TopBarLink to='family'>Family</TopBarLink>
      </TopBarSection>
      <TopBarSection>
        <TopBarLink to='home'>
          <MaterialIcon icon='home' />
        </TopBarLink>
        <TopBarLink to='contact-mary'>
          <MaterialIcon icon='email' />
        </TopBarLink>
      </TopBarSection>
    </TopBar>
    <MobileBarContainer />
    <MobileNavContainer />
    { children }
    <ContactContainer />
  </div>
)
