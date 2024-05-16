import React, { useState } from 'react'
import styles from './order.module.scss'
import { CardPay, CashPay, ArrowDownIcon } from '../../icons'

export const PaymentWay = () => {
    const [selectOpened, setSelectOpened] = useState(false)
    const [paymentWays] = useState([
        {
            id: 1,
            name: "Оплата по банковской карте",
            Icon: <CardPay />
        },
        {
            id: 2,
            name: "Оплата наличными при получении",
            Icon: <CardPay />
        }
    ])
    return (
        <div className={`whiteShadow ${styles.total} p-rel f-column gap-20`}>
            <h3>Способ оплаты</h3>
            <div className="f-column gap-10 p-rel">
                <div className={`f-row-betw ${styles.product}`}>
                    <div className="d-f al-center gap-10">
                        <div className={`f-c-col ${styles.iconPlace}`}>
                            <CashPay />
                        </div>
                        <b>Оплата на счет банковской карты VISA</b>
                    </div>
                    <div className="d-f al-center gap-10">
                        <ArrowDownIcon />
                    </div>
                </div>
                {
                    selectOpened ?
                        <div className={`f-column w-100p ${styles.dropDown} whiteShadow p-abs gap-5`}>
                            <div className={styles.item}>Оплата на счет банковской карты VISA</div>
                            <div className={styles.item}>Оплата наличными при получении</div>
                        </div> : null
                }

            </div>
        </div>
    )
}
