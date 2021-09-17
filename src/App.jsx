import React from 'react'
import NewsSearch from "./components/NewsSearch"
import { Container, Menu, Header, Image } from 'semantic-ui-react'
import NewsIndex from './components/NewsIndex'
import logo from './nwn.png'


const App = () => {
  return (
    <>
      <Menu style={{ borderRadius: 0, background: '' }}>
        <Menu.Item data-cy="logo">
          <Image data-cy="logoImg"src={logo} size='tiny' centered />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <NewsSearch />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>

        <Header data-cy="header" as='h2' >
          News Wire Network
          </Header>
        <p data-cy="header-card">News from around the world</p>
        <NewsIndex />
      </Container>
    </>
  )
}

export default App
