import React from 'react'
import { AppContainer } from '../containers/AppContainer'
import styles from './header.module.scss'
import { HeartIcon, LogoIcon, CartIcon } from '../../icons'

export const Header = () => {
    return (
        <header className={styles.header}>
            <AppContainer>
                <div className={"header__block f-row-betw"}>
                    <div>
                        <LogoIcon />
                    </div>
                    <nav className={`${styles.nav} d-f gap-60`}>
                        <div className={`${styles.item} fw-5`}>Готовые ПК</div>
                        <div className={`${styles.item} fw-5`}>Смартфоны</div>
                        <div className={`${styles.item} fw-5`}>Комплектующие</div>
                        <div className={`${styles.item} fw-5`}>Периферия</div>
                        <div className={`${styles.item} fw-5`}>Контакты</div>
                    </nav>
                    <div className={`${styles.right} f-c-row gap-30`}>
                        <div className="p-rel">
                            <HeartIcon height={24} width={21} />
                            <div className={`${styles.favorites} p-abs count f-c-col fw-6`}>1</div>
                        </div>
                        <div className="p-rel">
                            <CartIcon height={24} width={25} />
                            <div className={`${styles.cart} p-abs count f-c-col fw-6`}>14</div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </header>
    )
}
