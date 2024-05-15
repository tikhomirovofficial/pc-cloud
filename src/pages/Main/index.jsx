import React from 'react'
import { AppContainer } from '../../components/containers/AppContainer'
import styles from './main.module.scss'
import { Product } from '../../components/Product'

export const Main = () => {
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
                    <div className={"f-column gap-20"}>
                        <div className={`${styles.part} f-column gap-20`}>
                            <h3 className={"fw-6"}>Готовые ПК</h3>
                        </div>
                        <div className={"d-f gap-30 flex-wrap"}>
                            <Product />
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
            </section >
        </>
    )
}
