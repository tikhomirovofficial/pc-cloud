import React from 'react'
import { AppContainer } from '../containers/AppContainer'
import styles from './footer.module.scss'
import { InstagramIcon, LogoIcon, TelegramIcon, VkIcon, WhatsappIcon } from '../../icons'
import { Element, Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <Element name={`contacts`} className={`${styles.footer}`}>
            <AppContainer>
                <div className={`${styles.block} d-f jc-between gap-20`}>
                    <LogoIcon />
                    <div className={`${styles.nav} d-f gap-70`}>
                        <div className="f-column gap-20">
                            <ScrollLink spy={true} to={`ctg-${1}`} smooth={true} offset={-90}>
                                <div className={`${styles.navItem}`}>Готовые ПК</div>
                            </ScrollLink>
                            <ScrollLink spy={true} to={`ctg-${2}`} smooth={true} offset={-90}>
                                <div className={`${styles.navItem}`}>Смартфоны</div>
                            </ScrollLink>
                            <ScrollLink spy={true} to={`ctg-${3}`} smooth={true} offset={-90}>
                                <div className={`${styles.navItem}`}>Комплектующие</div>
                            </ScrollLink>

                            <ScrollLink spy={true} to={`ctg-${4}`} smooth={true} offset={-90}>
                                <div className={`${styles.navItem}`}>Периферия</div>
                            </ScrollLink>
                            <ScrollLink spy={true} to={`contacts`} smooth={true} offset={-90}>

                            </ScrollLink>
                        </div>
                        <div className="f-column gap-20">
                            <Link to={"/favorites"}>
                                <div className={styles.navItem}>Избранное</div>
                            </Link>
                            <Link to={"/cart"}>
                                <div className={styles.navItem}>Корзина</div>
                            </Link>
                            <ScrollLink spy={true} to={`contacts`} smooth={true} offset={-90}>
                                <div className={`${styles.navItem}`}>Контакты</div>
                            </ScrollLink>
                        </div>
                        <div className="f-column gap-20">
                            <Link to={"/politics"}>
                                <div className={styles.navItem}>Условия сервиса</div>
                            </Link>
                            <a href="tel: +79005479826">
                                <div className={styles.navItem}>+7 (900) 547-98-26</div>
                            </a>
                            <div className={styles.navItem}>Наш адрес: проспект Победы 10</div>
                        </div>
                    </div>
                    <div className="d-f gap-5">
                        <div>
                            <VkIcon height={24} />
                        </div>
                        <div>
                            <InstagramIcon height={26} />
                        </div>
                        <div>
                            <TelegramIcon height={27} />
                        </div>
                        <div>
                            <WhatsappIcon height={26} />
                        </div>
                    </div>
                </div>
            </AppContainer>
        </Element>
    )
}
