import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from '../features/products/productsSlice'
import { cartReducer } from '../features/cart/cartSlice'
import { orderReducer } from '../features/order/orderSlice'
import { favoritesReducer } from '../features/favorites/favoritesSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        order: orderReducer,
        favorites: favoritesReducer,
    },
})