import React from 'react'
import { AppContainer } from '../../components/containers/AppContainer'
import styles from './successOrder.module.scss'
import { SuccessIcon } from '../../icons'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

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
                                <p>Наш менеджер свяжется с вами.</p>
                            </div>
                        </div>
                    </div>
                    <Link to={"/"}>
                        <Button title={"Вернуться в каталог"} />
                    </Link>

                </div>
            </AppContainer>
        </section>
    )
}
