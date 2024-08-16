import classes from './DeliveryAndPayment.module.css'
import ApplicationForm from "../../components/applicationForm/ApplicationForm.jsx";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
const DeliveryAndPayment = () => {
    return (
        <div>
            <div className="container">
                <Header/>
                <div className={classes.del_and_pay_container}>
                    <div className={classes.del_and_pay_info}>
                        <ul className={classes.delivery_info}>Доставка
                            <li>Самовывоз (Ст.м. Каменная горка)</li>
                            <li>Доставка по Минску</li>
                            <li>Доставка по РБ (почтой)</li>
                        </ul>
                        <ul className={classes.payment_info}>Оплата
                            <li>Картой</li>
                            <li>Наличными</li>
                            <li>ЕРИП</li>
                        </ul>
                    </div>
                    <ApplicationForm/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default DeliveryAndPayment;