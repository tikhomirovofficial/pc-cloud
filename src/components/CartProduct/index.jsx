import React from 'react'
import styles from './cartProduct.module.scss'
import { TrashIcon } from '../../icons'

export const CartProduct = () => {
    return (
        <div className={`whiteShadow ${styles.product} f-column gap-5`}>
            <div className={"d-f jc-end"}>
                <div className={"cur-pointer w-content"}>
                    <TrashIcon height={20} width={18} />
                </div>
            </div>
            <div className="d-f al-center gap-20">
                <div className={`${styles.img} p-rel`}>
                    <img src="assets/img/product.png" alt="" />
                </div>
                <h3 className={`${styles.title} fw-6`}>
                    Корсар пк ептать
                </h3>
            </div>
            <div className="f-row-betw">
                <div className="d-f al-center gap-10">
                    {/* <div className={"p-rel"}>
                            <b className={styles.salePrice}>125 000 ₽</b>
                            <div className="saleLine p-abs"></div>
                        </div> */}
                    <div className={`fw-6 ${styles.price}`}>115 000 ₽</div>
                </div>

                <div className={`${styles.bottom} d-f al-center gap-5`}>
                    <div className={`${styles.countBtn} f-c-col`}>
                        <p>-</p>
                    </div>
                    <div className={styles.count}>15</div>
                    <div className={`${styles.countBtn} f-c-col`}>
                        <p>+</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
