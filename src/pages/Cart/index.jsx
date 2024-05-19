import React from 'react'
import { AppContainer } from '../../components/containers/AppContainer'
import styles from './cart.module.scss'
import { CartProduct } from '../../components/CartProduct'
import { Button } from '../../components/Button'
import { DeliveryCarIcon, EmptyCartIcon } from '../../icons'
import { useSelector } from 'react-redux'
import { useProduct } from '../../hooks/useProduct'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { items, totalSum, totalSumWithSales } = useSelector(state => state.cart)
    const productActions = useProduct()
    const sumEquals = totalSum === totalSumWithSales

    return (
        <section className={styles.cart}>
            <AppContainer>
                {
                    items.length ?
                        <div className={`f-column gap-40 ${styles.block}`}>
                            <h2 className="title">Корзина</h2>
                            <div className={`${styles.cartBlock} d-f jc-between gap-80`}>
                                <div className={`f-09 ${styles.products} f-column gap-30`}>
                                    <div className="f-column gap-30">
                                        {
                                            items.map(item => (
                                                <CartProduct actions={productActions} {...item} />
                                            ))
                                        }
                                    </div>
                                    <div className={`whiteShadow ${styles.delivery} f-row-betw`}>
                                        <div className="d-f gap-20">
                                            <DeliveryCarIcon />
                                            <b>
                                                Доставка курьером
                                            </b>
                                        </div>
                                        <b>
                                            499 ₽
                                        </b>
                                    </div>
                                </div>
                                <div className={`whiteShadow ${styles.total} p-rel`}>
                                    <div className="f-row-betw">
                                        <b>ИТОГО</b>
                                        <div className="d-f al-center gap-10">
                                            {
                                                !sumEquals ?
                                                    <div className={"p-rel"}>
                                                        <div className={"salePrice"}>{totalSum} ₽</div>
                                                        <div className="saleLine p-abs"></div>
                                                    </div> : null
                                            }

                                            <b>{(!sumEquals ? totalSumWithSales : totalSum) + 499} ₽</b>
                                        </div>
                                    </div>
                                    <Link to={"/order"}>
                                        <Button className={`p-abs ${styles.button}`} title={"Перейти к оформлению"} />
                                    </Link>

                                </div>
                            </div>
                        </div> :
                        <div className={`f-column gap-40 al-center ${styles.emptyBlock}`}>
                            <EmptyCartIcon />
                            <h2 className='title'>Корзина пуста.</h2>
                            <Link to={"/"}>
                                <Button title={"Вернуться в каталог товаров"} />
                            </Link>
                        </div>
                }
            </AppContainer>
        </section>
    )
}
