import React, { useEffect } from 'react'
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
import { AppRoutes } from './router/AppRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { setTotalSum, setTotalSalesSum } from './app/features/cart/cartSlice'


const App = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    const totalSum = cart.items.reduce((acc, cur) => {
      return acc + (cur.price * cur.count)
    }, 0)
    const sumWithSales = cart.items.reduce((acc, cur) => {
      return acc + ((cur.sale_price || cur.price) * cur.count)
    }, 0)
    dispatch(setTotalSalesSum(sumWithSales))
    dispatch(setTotalSum(totalSum))

  }, [cart.items])

  return (
    <div className={"App f-column jc-between"}>
      <div>
        <Header />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
