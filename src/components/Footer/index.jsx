import React from 'react'
import { AppContainer } from '../containers/AppContainer'
import styles from './footer.module.scss'
import { InstagramIcon, LogoIcon, TelegramIcon, VkIcon, WhatsappIcon } from '../../icons'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <AppContainer>
                <div className={`${styles.block} d-f jc-between`}>
                    <LogoIcon />
                    <div className={"d-f gap-70"}>
                        <div className="f-column gap-20">
                            <div className={styles.navItem}>Готовые ПК</div>
                            <div className={styles.navItem}>Смартфоны</div>
                            <div className={styles.navItem}>Комплектующие</div>
                            <div className={styles.navItem}>Периферия</div>
                        </div>
                        <div className="f-column gap-20">
                            <div className={styles.navItem}>Избранное</div>
                            <div className={styles.navItem}>Корзина</div>
                            <div className={styles.navItem}>Контакты</div>
                        </div>
                        <div className="f-column gap-20">
                            <div className={styles.navItem}>Условия сервиса</div>
                            <div className={styles.navItem}>+7 (900) 547-98-26</div>
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
        </footer>
    )
}
