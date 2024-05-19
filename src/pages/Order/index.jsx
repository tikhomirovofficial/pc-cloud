import React, { useEffect } from 'react'
import { AppContainer } from '../../components/containers/AppContainer'
import styles from './order.module.scss'
import { ArrowDownIcon, CardPay, CashPay, GeoIcon } from '../../icons'
import { InputField } from '../../components/InputField'
import { PaymentWay } from './PaymentWay'
import { Button } from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, handleOrderForm, resetOrder } from '../../app/features/order/orderSlice'
import { useNavigate } from 'react-router-dom'
import { resetCart } from '../../app/features/cart/cartSlice'

export const Order = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { items, totalSum, totalSumWithSales } = useSelector(state => state.cart)
    const { form, success } = useSelector(state => state.order)
    const sumEquals = totalSum === totalSumWithSales

    const sendOrder = () => {
        dispatch(createOrder())
    }

    useEffect(() => {
        if (success) {
            navigate("/success")
            dispatch(resetOrder())
            dispatch(resetCart())
        }

    }, [success])

    return (
        <section className={styles.order}>
            <AppContainer>
                <div className={`f-column gap-40 ${styles.block}`}>
                    <h2 className="title">Оформление заказа</h2>
                    <div className={`d-f jc-between gap-80 ${styles.orderBlock}`}>
                        <div className={`f-06 ${styles.form} whiteShadow f-column gap-30`}>
                            <div className="f-column gap-15">
                                <h3>Доставка курьером</h3>
                                <div className={`${styles.map} of-hide`}>
                                    <iframe style={{ width: "100%", height: "100%" }} src="https://yandex.ru/map-widget/v1/?um=constructor%3A1bb9847573fb042eb8ec9213ae4f6fa5ada426f4c6bd3fc063f15cc9ac036d36&amp;source=constructor" frameborder="0"></iframe>
                                </div>
                            </div>
                            <div className={`f-column gap-15 `}>
                                <div className={"d-f gap-5 al-center"}>
                                    <GeoIcon />
                                    <p className={styles.geoText}>Адрес доставки</p>
                                </div>
                                <div className="f-column gap-10">
                                    <InputField placeholder={"Город"} val={form.city} onChange={(e) => dispatch(handleOrderForm({ key: "city", val: e.target.value }))} />
                                    <InputField placeholder={"Улица / Район"} val={form.street} onChange={(e) => dispatch(handleOrderForm({ key: "street", val: e.target.value }))} />
                                    <div className="f-row-betw gap-5">
                                        <InputField placeholder={"Дом"} val={form.house} onChange={(e) => dispatch(handleOrderForm({ key: "house", val: e.target.value }))} />
                                        <InputField placeholder={"Подъезд"} val={form.entrance} onChange={(e) => dispatch(handleOrderForm({ key: "entrance", val: e.target.value }))} />
                                        <InputField placeholder={"Квартира"} val={form.flat} onChange={(e) => dispatch(handleOrderForm({ key: "flat", val: e.target.value }))} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="f-column f-08 gap-30">
                            <div className={`whiteShadow ${styles.total} p-rel f-column gap-20`}>
                                <h3>Ваш заказ</h3>
                                <div className="f-column gap-10">
                                    <div className="f-column gap-10">
                                        {
                                            items.map(item => (
                                                <div className={`f-row-betw gap-10 ${styles.product}`}>
                                                    <div className="d-f f-1 al-center gap-10">
                                                        <b>{item.count}</b>
                                                        <span>
                                                            ×
                                                        </span>
                                                        <b style={{ maxWidth: "80%" }}>{item.name}</b>
                                                    </div>
                                                    <div className="d-f al-center gap-10">
                                                        {
                                                            item.sale_price ?
                                                                <div className={"p-rel"}>
                                                                    <p className={"salePrice txt-nowrap"}>{item.price} ₽</p>
                                                                    <div className="saleLine p-abs"></div>
                                                                </div> : null

                                                        }
                                                        <b className={"txt-nowrap"}>{(item.sale_price || item.price) * item.count} ₽</b>

                                                    </div>
                                                </div>
                                            ))
                                        }


                                    </div>
                                    <div className={`f-row-betw ${styles.product}`}>
                                        <b>Доставка</b>
                                        <b className={"txt-nowrap"}>499 ₽</b>
                                    </div>
                                    <div style={{paddingTop: 18, borderTop: "1px solid lightgray"}} className={`f-row-betw ${styles.product}`}>
                                        <b>ИТОГО:</b>
                                        <div className="d-f al-center gap-10">
                                            {
                                                !sumEquals ?
                                                    <div className={"p-rel"}>
                                                        <p className={"salePrice"}>{totalSum} ₽</p>
                                                        <div className="saleLine p-abs"></div>
                                                    </div> : null

                                            }
                                            <b className={"txt-nowrap"}>{(!sumEquals ? totalSumWithSales : totalSum) + 499} ₽</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <PaymentWay />
                            <div className={`whiteShadow ${styles.total} p-rel f-column gap-20`}>
                                <h3>Ваш номер</h3>
                                <InputField placeholder={"+7"} val={form.phone} onChange={(e) => dispatch(handleOrderForm({ key: "phone", val: e.target.value }))} />
                            </div>
                            <Button onClick={sendOrder} disabled={!form.city || !form.street || !form.house || !form.flat || form.phone.length < 11} className={styles.orderBtn} title={"Закончить оформление"} />

                        </div>
                    </div>
                </div>
            </AppContainer>
        </section >

    )
}
