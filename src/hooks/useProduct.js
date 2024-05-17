import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, minusProduct, plusProduct, removeProduct } from '../app/features/cart/cartSlice'
import { removeFavoritesProduct, addFavoritesProduct } from '../app/features/favorites/favoritesSlice'

export const useProduct = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const { items } = useSelector(state => state.cart)
    const favorites = useSelector(state => state.favorites)

    const checkInCart = (id) => {
        return items.some(item => item.id === id)
    }
    const checkInFavorites = (id) => {
        return favorites.items.some(item => item.id === id)
    }
    const getCartCountProduct = (id) => {
        return items.find(item => item.id === id).count
    }

    const addToCart = (id) => {
        dispatch(addProduct(products.items.find(item => item.id === id)))
    }
    const addToFavorites = (id) => {
        dispatch(addFavoritesProduct(products.items.find(item => item.id === id)))
    }

    const plusToCart = (id) => {
        dispatch(plusProduct(id))
    }

    const minusFromCart = (id) => {
        dispatch(minusProduct(id))
    }

    const deleteFromCart = (id) => {
        dispatch(removeProduct(id))
    }
    const deleteFromFavorites = (id) => {
        dispatch(removeFavoritesProduct(id))
    }

    return {
        checkInCart,
        getCartCountProduct,
        addToFavorites,
        deleteFromFavorites,
        checkInFavorites,
        addToCart,
        plusToCart,
        minusFromCart,
        deleteFromCart
    }
}
