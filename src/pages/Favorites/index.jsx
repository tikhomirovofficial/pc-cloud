import React from 'react'
import styles from './favorites.module.scss'
import { AppContainer } from '../../components/containers/AppContainer'
import { Product } from '../../components/Product'
import { useSelector } from 'react-redux'
import { useProduct } from '../../hooks/useProduct'

export const Favorites = () => {
    const { items } = useSelector(state => state.favorites)
    const productActions = useProduct()

    return (
        <section>
            <AppContainer>
                <div className={`f-column gap-40`}>
                    <h2 className="title">Избранное</h2>
                    {items.length ?
                        <div className="d-f gap-30 flex-wrap">
                            {
                                items.map(item => (
                                    <Product
                                        inCart={productActions.checkInCart(item.id)}
                                        inFavorites={productActions.checkInFavorites(item.id)}
                                        actions={productActions}
                                        {...item}
                                    />
                                ))
                            }
                        </div> :
                        <h1>Здесь пока пусто.</h1>
                    }

                </div>
            </AppContainer>
        </section>
    )
}
