import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, minusProduct, plusProduct, removeProduct } from '../app/features/cart/cartSlice'

export const useProduct = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const { items } = useSelector(state => state.cart)

    const checkInCart = (id) => {
        return items.some(item => item.id === id)
    }
    const getCartCountProduct = (id) => {
        return items.find(item => item.id === id).count
    }

    const addToCart = (id) => {
        dispatch(addProduct(products.items.find(item => item.id === id)))
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

    return {
        checkInCart,
        getCartCountProduct,
        addToCart,
        plusToCart,
        minusFromCart,
        deleteFromCart
    }
}
