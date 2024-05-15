import React from 'react'
import { EmptyCartIcon, VkIcon } from './icons'
import { AppContainer } from './components/containers/AppContainer'
import { Header } from './components/Header'
import { Main } from './pages/Main'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
