import React from 'react'
import styles from './button.module.scss'

export const Button = ({ title, className = "", onClick = undefined }) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${className} fw-6 cur-pointer`}>{title}</button>
    )
}
