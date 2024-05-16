import React from 'react'
import { EmptyCartIcon, VkIcon } from './icons'
import { AppContainer } from './components/containers/AppContainer'
import { Header } from './components/Header'
import { Main } from './pages/Main'
import { Footer } from './components/Footer'
import { Cart } from './pages/Cart'
import { Order } from './pages/Order'
import { SuccessOrder } from './pages/SuccessOrder'
import { Conditions } from './pages/Conditions'
import { Favorites } from './pages/Favorites'


const App = () => {
  return (
    <div className={"App f-column jc-between"}>
      <div>
        <Header />
        <Conditions />
      </div>
      <Footer />
    </div>
  )
}

export default App
