import React from 'react'
import styles from './cartProduct.module.scss'
import { TrashIcon } from '../../icons'

export const CartProduct = (props) => {
    return (
        <div className={`whiteShadow ${styles.product} f-column gap-5`}>
            <div className={"d-f jc-end"}>
                <div onClick={() => props.actions.deleteFromCart(props.id)} className={"cur-pointer w-content"}>
                    <TrashIcon height={20} width={18} />
                </div>
            </div>
            <div className="d-f al-center gap-20">
                <div className={`${styles.img} p-rel`}>
                    <img src={props.image} alt="" />
                </div>
                <h3 className={`${styles.title} fw-6`}>
                    {props.name}
                </h3>
            </div>
            <div className="f-row-betw">
                <div className="d-f al-center gap-10">
                    {
                        props.sale_price ?
                            <div className={"p-rel"}>
                                <b className={styles.salePrice}>{props.price} ₽</b>
                                <div className="saleLine p-abs"></div>
                            </div> : null
                    }
                    <div className={`fw-6 ${styles.price}`}>{props.sale_price || props.price} ₽</div>
                </div>

                <div className={`${styles.bottom} d-f al-center gap-5`}>
                    <div onClick={() => props.actions.minusFromCart(props.id)} className={`${styles.countBtn} f-c-col`}>
                        <p>-</p>
                    </div>
                    <div className={styles.count}>{props.count}</div>
                    <div onClick={() => props.actions.plusToCart(props.id)} className={`${styles.countBtn} f-c-col`}>
                        <p>+</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
