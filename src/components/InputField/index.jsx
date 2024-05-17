import React from 'react'
import styles from './inputField.module.scss'

export const InputField = ({ className = "", val = "", placeholder = "", onChange }) => {
    return (
        <label className={`${styles.block} ${val.length > 0 ? styles.filled : styles.unfilled} ${className}`}>
            <input onChange={onChange} value={val} className={"w-100p"} type="text" placeholder={placeholder} />
        </label>
    )
}
