import React from 'react'
import { AppContainer } from '../../components/containers/AppContainer'
import styles from './cart.module.scss'
import { CartProduct } from '../../components/CartProduct'
import { Button } from '../../components/Button'
import { DeliveryCarIcon, EmptyCartIcon } from '../../icons'

export const Cart = () => {
    return (
        <section className={styles.cart}>
            <AppContainer>
                {
                    !true ?
                        <div className={`f-column gap-40 ${styles.block}`}>
                            <h2 className="title">Корзина</h2>
                            <div className="d-f jc-between gap-80">
                                <div className={`f-09 ${styles.products} f-column gap-30`}>
                                    <div className="f-column gap-30">
                                        <CartProduct />
                                        <CartProduct />
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
                                            <div className={"p-rel"}>
                                                <div className={"salePrice"}>125 000 ₽</div>
                                                <div className="saleLine p-abs"></div>
                                            </div>
                                            <b>80 999 ₽</b>
                                        </div>
                                    </div>
                                    <Button className={`p-abs ${styles.button}`} title={"Перейти к оформлению"} />
                                </div>
                            </div>
                        </div> :
                        <div className="f-column gap-40 al-center">
                            <EmptyCartIcon />
                            <h2 className='title'>Корзина пуста.</h2>
                            <Button title={"Вернуться в каталог товаров"}/>
                        </div>
                }
            </AppContainer>
        </section>

    )
}
