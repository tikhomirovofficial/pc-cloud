import React, { useEffect } from 'react'
import { HeartIcon, StarIcon, HeartFilledIcon } from '../../icons'
import { Button } from '../Button'
import styles from './product.module.scss'
import { useProduct } from '../../hooks/useProduct'

export const Product = (props) => {
    const countInCart = props.inCart ? props.actions.getCartCountProduct(props.id) : 0

    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <div className={`${styles.product} whiteShadow f-column gap-10`}>
            <div className="f-column">
                <div className={`${styles.favoriteBtn} cur-pointer w-content`}>
                    {
                        true ? <HeartIcon /> : <HeartFilledIcon />
                    }

                </div>
                <div className={`${styles.img} p-rel w-100p`}>
                    <img src={props.image} alt="" />
                </div>
            </div>
            <div className={`${styles.info} f-column gap-30`}>
                <div className={`${styles.top} f-row-betw`}>
                    <div className={`${styles.title} fw-6`}>{props.name}</div>
                    <div className="d-f gap-5 al-center">
                        <StarIcon height={18} width={18} />
                        <p className={styles.rating}>{props.rating}</p>
                    </div>
                </div>
                <div className={`${styles.bottomInfo} f-row-betw gap-20`}>
                    <div className={`${styles.priceBlock} d-f al-center gap-10`}>
                        {
                            props.sale_price ?
                                <div className={"p-rel"}>
                                    <b className={styles.salePrice}>{props.price} ₽</b>
                                    <div className="saleLine p-abs"></div>
                                </div> : null
                        }

                        <b className={styles.price}>{props.sale_price || props.price} ₽</b>
                    </div>
                    {
                        props.inCart === false ?
                            <div className={`${styles.inCartBlock} f-row-betw gap-20 w-100p`}>
                                <Button onClick={() => props.actions.addToCart(props.id)} title={"В корзину"} />
                                <div className={`${styles.favoriteMobileBtn} cur-pointer w-content`}>
                                    {
                                        true ? <HeartIcon /> : <HeartFilledIcon />
                                    }

                                </div>
                            </div>
                            :
                            <div className={`${styles.inCartBlock} f-row-betw gap-20 w-100p`}>
                                <div className={`${styles.bottom} d-f al-center gap-5`}>
                                    <div onClick={() => countInCart > 1 ? props.actions.minusFromCart(props.id) : props.actions.deleteFromCart(props.id)} className={`${styles.countBtn} f-c-col`}>
                                        <p>-</p>
                                    </div>
                                    <div className={styles.count}>{countInCart}</div>
                                    <div onClick={() => props.actions.plusToCart(props.id)} className={`${styles.countBtn} f-c-col`}>
                                        <p>+</p>
                                    </div>
                                </div>
                                <div className={`${styles.favoriteMobileBtn} cur-pointer w-content`}>
                                    {
                                        true ? <HeartIcon /> : <HeartFilledIcon />
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
