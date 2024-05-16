import React from 'react'
import styles from './button.module.scss'

export const Button = ({ title, className = "" }) => {
    return (
        <button className={`${styles.button} ${className} fw-6 cur-pointer`}>{title}</button>
    )
}
