import React, { useRef, useState, useEffect } from 'react'
import { AppContainer } from '../containers/AppContainer'
import styles from './header.module.scss'
import { HeartIcon, LogoIcon, CartIcon, MenuIcon } from '../../icons'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link as ScrollLink } from 'react-scroll'

export const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const navigate = useNavigate()
    const { items } = useSelector(state => state.cart)
    const favorites = useSelector(state => state.favorites)
    const menuBlockRef = useRef(null)

    const handleMenu = () => setMenuOpened(!menuOpened)

    const handleLink = () => {
        if(menuOpened) {
            setMenuOpened(false)
        }
        navigate("/")
    }

    const handleClickOutsideMenu = (e) => {
        if (menuBlockRef.current && !menuBlockRef.current.contains(e.target)) {
            setMenuOpened(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideMenu);
        return () => {
            document.removeEventListener('click', handleClickOutsideMenu);
        };
    }, [])



    return (
        <header className={styles.header}>
            <AppContainer>
                <div className={"header__block f-row-betw"}>
                    <Link to={"/"} className={styles.logo}>
                        <LogoIcon />
                    </Link>
                    <nav className={`${styles.nav} d-f gap-60`}>
                        <ScrollLink onClick={handleLink} spy={true} to={`ctg-${1}`} smooth={true} offset={-90}>
                            <div className={`${styles.item} fw-5`}>Готовые ПК</div>
                        </ScrollLink>
                        <ScrollLink onClick={handleLink} spy={true} to={`ctg-${2}`} smooth={true} offset={-90}>
                            <div className={`${styles.item} fw-5`}>Смартфоны</div>
                        </ScrollLink>
                        <ScrollLink onClick={handleLink} spy={true} to={`ctg-${3}`} smooth={true} offset={-90}>
                            <div className={`${styles.item} fw-5`}>Комплектующие</div>
                        </ScrollLink>
                        <ScrollLink onClick={handleLink} spy={true} to={`ctg-${4}`} smooth={true} offset={-90}>
                            <div className={`${styles.item} fw-5`}>Периферия</div>
                        </ScrollLink>
                        <ScrollLink onClick={handleLink} spy={true} to={`contacts`} smooth={true} offset={-90}>
                            <div className={`${styles.item} fw-5`}>Контакты</div>
                        </ScrollLink>
                    </nav>
                    <div className={`${styles.right} f-c-row gap-40`}>
                        <Link to={"/favorites"} className="p-rel">
                            <HeartIcon height={24} width={21} />
                            {favorites.items.length ? <div className={`${styles.favorites} p-abs count f-c-col fw-6`}>{favorites.items.length}</div> : null}

                        </Link>
                        <Link to={"/cart"} className="p-rel">
                            <CartIcon height={24} width={25} />
                            {items.length ? <div className={`${styles.cart} p-abs count f-c-col fw-6`}>{items.length}</div> : null}

                        </Link>
                        <div ref={menuBlockRef} className={`${styles.menu} p-rel`}>
                            <div onClick={handleMenu}>
                                <MenuIcon />
                            </div>
                            {

                                <div className={`f-column ${styles.menuNav} ${menuOpened ? styles.menuOpened : ""} whiteShadow gap-10`}>
                                    <ScrollLink onClick={handleLink} spy={true} to={`ctg-${1}`} smooth={true} offset={-96}>
                                        <div className={`${styles.item} fw-5`}>Готовые ПК</div>
                                    </ScrollLink>
                                    <ScrollLink onClick={handleLink} spy={true} to={`ctg-${2}`} smooth={true} offset={-96}>
                                        <div className={`${styles.item} fw-5`}>Смартфоны</div>
                                    </ScrollLink>
                                    <ScrollLink onClick={handleLink} spy={true} to={`ctg-${3}`} smooth={true} offset={-96}>
                                        <div className={`${styles.item} fw-5`}>Комплектующие</div>
                                    </ScrollLink>
                                    <ScrollLink onClick={handleLink} spy={true} to={`ctg-${4}`} smooth={true} offset={-96}>
                                        <div className={`${styles.item} fw-5`}>Периферия</div>
                                    </ScrollLink>
                                    <ScrollLink spy={true} to={`contacts`} smooth={true} offset={-90}>
                                        <div className={`${styles.item} fw-5`}>Контакты</div>
                                    </ScrollLink>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </AppContainer>
        </header>
    )
}
