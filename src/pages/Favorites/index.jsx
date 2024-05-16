import React from 'react'
import styles from './favorites.module.scss'
import { AppContainer } from '../../components/containers/AppContainer'
import { Product } from '../../components/Product'

export const Favorites = () => {
    return (
        <section>
            <AppContainer>
                <div className={`f-column gap-40`}>
                    <h2 className="title">Избранное</h2>
                    <div className="d-f gap-30 flex-wrap">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </AppContainer>
        </section>
    )
}
