import React from 'react'
import { AppContainer } from '../containers/AppContainer'
import styles from './header.module.scss'
import { HeartIcon, LogoIcon, CartIcon, MenuIcon } from '../../icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = () => {
    const { items } = useSelector(state => state.cart)
    return (
        <header className={styles.header}>
            <AppContainer>
                <div className={"header__block f-row-betw"}>
                    <Link to={"/"} className={styles.logo}>
                        <LogoIcon />
                    </Link>
                    <nav className={`${styles.nav} d-f gap-60`}>
                        <div className={`${styles.item} fw-5`}>Готовые ПК</div>
                        <div className={`${styles.item} fw-5`}>Смартфоны</div>
                        <div className={`${styles.item} fw-5`}>Комплектующие</div>
                        <div className={`${styles.item} fw-5`}>Периферия</div>
                        <div className={`${styles.item} fw-5`}>Контакты</div>
                    </nav>
                    <div className={`${styles.right} f-c-row gap-40`}>
                        <Link to={"/favorites"} className="p-rel">
                            <HeartIcon height={24} width={21} />
                            <div className={`${styles.favorites} p-abs count f-c-col fw-6`}>1</div>
                        </Link>
                        <Link to={"/cart"} className="p-rel">
                            <CartIcon height={24} width={25} />
                            {items.length ? <div className={`${styles.cart} p-abs count f-c-col fw-6`}>{items.length}</div> : null }
                           
                        </Link>
                        <div className={`${styles.menu} p-rel`}>
                            <div>
                                <MenuIcon />
                            </div>
                            <div className={`f-column ${styles.menuNav} whiteShadow gap-10`}>
                                <div className={`${styles.item} fw-5`}>Готовые ПК</div>
                                <div className={`${styles.item} fw-5`}>Смартфоны</div>
                                <div className={`${styles.item} fw-5`}>Комплектующие</div>
                                <div className={`${styles.item} fw-5`}>Периферия</div>
                                <div className={`${styles.item} fw-5`}>Контакты</div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </header>
    )
}
