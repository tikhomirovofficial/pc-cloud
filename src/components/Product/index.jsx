import React from 'react'
import { HeartIcon, StarIcon, HeartFilledIcon } from '../../icons'
import { Button } from '../Button'
import styles from './product.module.scss'

export const Product = () => {
    return (
        <div className={`${styles.product} f-column gap-10`}>
            <div className="f-column">
                <div className={"cur-pointer w-content"}>
                    {
                        true ? <HeartIcon /> : <HeartFilledIcon />
                    }

                </div>
                <div className={`${styles.img} p-rel w-100p`}>
                    <img src="assets/img/product.png" alt="" />
                </div>
            </div>
            <div className="f-column gap-30">
                <div className="f-row-betw">
                    <div className={`${styles.title} fw-6`}>Corsair B52 ULTA</div>
                    <div className="d-f gap-5 al-center">
                        <StarIcon height={18} width={18} />
                        <p className={styles.rating}>4.7</p>
                    </div>
                </div>
                <div className="f-row-betw">
                    <div className="d-f al-center gap-10">
                        {/* <div className={"p-rel"}>
                            <b className={styles.salePrice}>125 000 ₽</b>
                            <div className="saleLine p-abs"></div>
                        </div> */}
                        <b className={styles.price}>115 000 ₽</b>
                    </div>
                    {
                        true ?
                            <Button /> :
                            <div className={`${styles.bottom} d-f al-center gap-5`}>
                                <div className={`${styles.countBtn} f-c-col`}>
                                    <p>-</p>

                                </div>
                                <div className={styles.count}>15</div>
                                <div className={`${styles.countBtn} f-c-col`}>
                                    <p>+</p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}