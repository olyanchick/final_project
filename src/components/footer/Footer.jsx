import classes from './Footer.module.css';

import instagram from './../../img/icons/ig_icon.png';
import telegram from '../../img/icons/tg_icon.png';
import viber from './../../img/icons/vb_icon.png';

const Footer = () => {
    return (
        <>
            <footer className="container">
                <div className={classes.footer_info_contacts}>
                    <div className={classes.footer_info}>
                        Производство и продажа натурального мёда, продуктов пчеловодства и пчел в Минске в
                        интернет-магазине.
                        Купить мед в Минске в компании honey.by!
                    </div>
                    <div className={classes.footer_contacts}>
                        <div className={classes.footer_contacts_list}>
                            <ul>Контакты
                                <li>+375 (29) 366-59-48</li>
                                <li>i.mozhenok@sweethoney.by</li>
                                <li>г. Минск Ул. Тимошенко д. 20/2, кв. 62</li>
                            </ul>
                        </div>
                        <div className={classes.footer_icons}>
                            <a href="https://www.instagram.com/" target="_blank">
                                <img src={instagram} alt="instagram_icon"/>
                            </a>
                            <a href="https://web.telegram.org/k/" target="_blank">
                                <img src={telegram} alt="tg_icon"/>
                            </a>
                            <a href="https://www.viber.com/ru/" target="_blank">
                                <img src={viber} alt="viber_icon"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.footer_copyright}>
                    2016-2024 ©HONEY.BY
                </div>
            </footer>
        </>
    );
};

export default Footer;