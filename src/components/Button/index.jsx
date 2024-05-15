import React from 'react'
import styles from './button.module.scss'

export const Button = () => {
    return (
        <button className={`${styles.button} fw-6 cur-pointer`}>В корзину</button>
    )
}
