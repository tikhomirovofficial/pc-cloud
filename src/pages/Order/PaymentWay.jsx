import React, { useState } from 'react'
import styles from './order.module.scss'
import { CardPay, CashPay, ArrowDownIcon } from '../../icons'

export const PaymentWay = () => {
    const [selectOpened, setSelectOpened] = useState(false)
    const [currentPayment, setCurrentPayment] = useState(1)

    const [paymentWays] = useState([
        {
            id: 1,
            name: "Оплата по банковской карте",
            Icon: CardPay
        },
        {
            id: 2,
            name: "Оплата наличными при получении",
            Icon: CashPay
        }
    ])
    const PaymentIcon = paymentWays.find(item => item.id === currentPayment).Icon

    const handleSelectPayment = (id) => {
        setCurrentPayment(id)
        setSelectOpened(false)
    }

    return (
        <div className={`whiteShadow ${styles.total} p-rel f-column gap-20`}>
            <h3>Способ оплаты</h3>
            <div className="f-column gap-10 p-rel">
                <div onClick={() => setSelectOpened(!selectOpened)} className={`f-row-betw ${styles.product}`}>
                    <div className="d-f al-center gap-10">
                        <div className={`f-c-col ${styles.iconPlace}`}>
                            <PaymentIcon />
                        </div>
                        <b>{paymentWays.find(item => item.id === currentPayment).name}</b>
                    </div>
                    <div className="d-f al-center gap-10">
                        <ArrowDownIcon />
                    </div>
                </div>
                {
                    selectOpened ?
                        <div className={`f-column w-100p ${styles.dropDown} whiteShadow p-abs gap-5`}>
                            {
                                paymentWays.map(item => (
                                    <div onClick={() => handleSelectPayment(item.id)} className={styles.item}>{item.name}</div>
                                ))
                            }

                        </div> : null
                }

            </div>
        </div >
    )
}
