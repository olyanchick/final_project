import ApplicationForm from "../../components/applicationForm/ApplicationForm.jsx";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

import classes from './Contacts.module.css'

import qr from './../../img/qr.png'
import icon_place from './../../img/icons/icon_place.png'
import icon_phone from './../../img/icons/icon_phone.png'
import icon_message from './../../img/icons/icon_message.png'

import { AiOutlineDown } from "react-icons/ai";
import FAQList from "../../components/faq/faqList/faqList.jsx";


const Contacts = () => {
    return (
        <div>
            <div className="container">
                <Header/>
                <section className={classes.where_we_are}>
                    {/*<section className={` ${classes.container} ${classes.where_we_are}`}>*/}
                    <div className={classes.contacts_and_qr}>
                        <div className={classes.contacts}>
                            <h2 className={classes.where_we_are_title}>Где нас найти</h2>
                            <ul>
                                <li className={classes.contact_point_1}>
                                    <img src={icon_place} alt=""/>
                                    <p>г. Минск Ул. Тимошенко д. 20/2, к. 62</p>
                                </li>
                                <li className={classes.contact_point_2}>
                                    <img src={icon_phone} alt=""/>
                                    <p>+375 (29) 366-59-48</p>
                                </li>
                                <li className={classes.contact_point_3}>
                                    <img src={icon_message} alt=""/>
                                    <p>i.mozhenok@sweethoney.by</p>
                                </li>
                            </ul>
                        </div>
                        <div className={classes.qr}>
                            <img src={qr} alt=""/>
                            <p>Сканируйте для сохранения наших контактов</p>
                        </div>
                    </div>
                    <div className={classes.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.707189663447!2d27.457365676950108!3d53.901408172455525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbdacdd2cf40cb%3A0xd2f9578e8760ef94!2z0YPQuy4g0KLQuNC80L7RiNC10L3QutC-IDIwLzIsINCc0LjQvdGB0LosINCc0LjQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sby!4v1723022032358!5m2!1sru!2sby"
                            // style="border:0;"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </section>
                <section className={classes.faq_and_applicationform}>
                    <FAQList/>
                    <ApplicationForm/>
                </section>
            </div>
            <Footer/>
        </div>
    );
};

export default Contacts;