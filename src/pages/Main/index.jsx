import React, { useEffect } from 'react'
import { AppContainer } from '../../components/containers/AppContainer'
import styles from './main.module.scss'
import { Product } from '../../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsAndCategories } from '../../app/features/products/productsSlice'
import { getProductsWithCategories } from '../../utils/productsStructure'
import { useProduct } from '../../hooks/useProduct'

export const Main = () => {
    const dispatch = useDispatch()
    const { items, categories, loading } = useSelector(state => state.products)
    const productActions = useProduct()

    useEffect(() => {
        console.log(getProductsWithCategories(categories, items));
    }, [items])

    useEffect(() => {
        dispatch(getAllProductsAndCategories())
    }, [])

    return (
        <>
            <section className={styles.promo}>
                <AppContainer>
                    <div className={`${styles.block} p-rel`}>
                        <div className={`${styles.text} fw-6`}>
                            Аксессуары для
                            Iphone 15 Pro Max
                        </div>
                        <img className={`${styles.img} p-abs`} height={200} width={320} src="assets/img/promo_iphone.png" alt="" />
                    </div>
                </AppContainer>
            </section>
            <section className={styles.catalog}>
                <AppContainer>
                    <div className="f-column gap-40">
                        {
                            getProductsWithCategories(categories, items).map(item => (
                                <div className={"f-column gap-20"}>
                                    <div className={`${styles.part} f-column gap-20`}>
                                        <h3 className={"fw-6"}>{item.name}</h3>
                                    </div>
                                    <div className={"d-f gap-30 flex-wrap"}>
                                        {
                                            item.products.map(item => (
                                                <Product
                                                    inCart={productActions.checkInCart(item.id)}
                                                    inFavorites={productActions.checkInFavorites(item.id)}
                                                    actions={productActions}
                                                    {...item}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </AppContainer>
            </section >
        </>
    )
}
