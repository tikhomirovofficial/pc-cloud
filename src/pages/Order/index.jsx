import React from 'react'
import { AppContainer } from '../../components/containers/AppContainer'
import styles from './order.module.scss'
import { ArrowDownIcon, CardPay, CashPay, GeoIcon } from '../../icons'
import { InputField } from '../../components/InputField'
import { PaymentWay } from './PaymentWay'
import { Button } from '../../components/Button'

export const Order = () => {
    return (
        <section className={styles.order}>
            <AppContainer>
                <div className={`f-column gap-40 ${styles.block}`}>
                    <h2 className="title">Оформление заказа</h2>
                    <div className="d-f jc-between gap-80">
                        <div className={`f-06 ${styles.form} whiteShadow f-column gap-30`}>
                            <div className="f-column gap-15">
                                <h3>Доставка курьером</h3>
                                <div className={styles.map}></div>
                            </div>
                            <div className={`f-column gap-15 `}>
                                <div className={"d-f gap-5 al-center"}>
                                    <GeoIcon />
                                    <p className={styles.geoText}>Адрес доставки</p>
                                </div>
                                <div className="f-column gap-10">
                                    <InputField placeholder={"Город"} />
                                    <InputField placeholder={"Улица / Район"} />
                                    <div className="f-row-betw gap-20">
                                        <InputField placeholder={"Дом"} />
                                        <InputField placeholder={"Подъезд"} />
                                        <InputField placeholder={"Квартира"} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="f-column f-08 gap-30">
                            <div className={`whiteShadow ${styles.total} p-rel f-column gap-20`}>
                                <h3>Ваш заказ</h3>
                                <div className="f-column gap-10">
                                    <div className="f-column gap-10">
                                        <div className={`f-row-betw ${styles.product}`}>
                                            <div className="d-f al-center gap-10">
                                                <b>1</b>
                                                <span>
                                                    ×
                                                </span>
                                                <b>Телефон Iphone 13 Pro</b>
                                            </div>
                                            <div className="d-f al-center gap-10">
                                                <div className={"p-rel"}>
                                                    <p className={"salePrice"}>125 000 ₽</p>
                                                    <div className="saleLine p-abs"></div>
                                                </div>
                                                <b>80 999 ₽</b>
                                            </div>
                                        </div>
                                        <div className={`f-row-betw ${styles.product}`}>
                                            <div className="d-f al-center gap-10">
                                                <b>1</b>
                                                <span>
                                                    ×
                                                </span>
                                                <b>Телефон Iphone 13 Pro</b>
                                            </div>
                                            <div className="d-f al-center gap-10">
                                                <div className={"p-rel"}>
                                                    <p className={"salePrice"}>125 000 ₽</p>
                                                    <div className="saleLine p-abs"></div>
                                                </div>
                                                <b>80 999 ₽</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`f-row-betw ${styles.product}`}>
                                        <b>Доставка</b>
                                        <b>80 999 ₽</b>
                                    </div>
                                    <div className={`f-row-betw ${styles.product}`}>
                                        <b>ИТОГО:</b>
                                        <div className="d-f al-center gap-10">
                                            <div className={"p-rel"}>
                                                <p className={"salePrice"}>125 000 ₽</p>
                                                <div className="saleLine p-abs"></div>
                                            </div>
                                            <b>80 999 ₽</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <PaymentWay />
                            <div className={`whiteShadow ${styles.total} p-rel f-column gap-20`}>
                                <h3>Ваш номер</h3>
                                <InputField placeholder={"+7"} />
                            </div>
                            <Button className={styles.orderBtn} title={"Закончить оформление"}/>

                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>

    )
}
