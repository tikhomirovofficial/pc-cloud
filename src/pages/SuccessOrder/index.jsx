import React from 'react'
import { AppContainer } from '../../components/containers/AppContainer'
import styles from './successOrder.module.scss'
import { SuccessIcon } from '../../icons'
import { Button } from '../../components/Button'

export const SuccessOrder = () => {
    return (
        <section className={styles.successOrder}>
            <AppContainer>
                <div className="f-column al-center gap-20">
                    <div className={`${styles.block} d-f jc-center`}>
                        <div className={`${styles.success} whiteShadow d-f al-center gap-30`}>
                            <SuccessIcon />
                            <div className="f-column gap-10">
                                <h2 className="title">
                                    Заказ успешно оформлен!
                                </h2>
                                <p>Номер заказа <b>123</b>. Наш менеджер свяжется с вами.</p>
                            </div>
                        </div>
                    </div>
                    <Button title={"Вернуться в каталог"}/>
                </div>
            </AppContainer>
        </section>
    )
}
