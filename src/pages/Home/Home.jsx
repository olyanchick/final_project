import classes from './Home.module.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Modal from "../../components/modal/Modal.jsx";

import honeyJarIntro from './../../img/honey_jar_intro.png';
import honeyJarAdv from './../../img/honey_jar_adv.png';

import {useState} from "react";
import CardsCarousel from "../../components/carousel/CardsCarousel.jsx";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import {NavLink} from "react-router-dom";

const Home = () => {

    const [modalActive, setModalActive] = useState(false);
    const [products] = useState([]);

    return (
        <div>
            <main>

                <section className={` ${"container"} ${classes.intro}`}>
                    <Header setModalActive={setModalActive}/>
                    <Modal active={modalActive} setActive={setModalActive}/>
                    <div className={`${classes.intro_text} ${classes.intro_text_left}`}>Натуральный мёд</div>
                    <div className={`${classes.intro_text} ${classes.intro_text_right}`}>и продукты пчеловодства</div>
                    <div className={classes.honey_pic}>
                        <img className={classes.intro_img} src={honeyJarIntro} alt=""/>
                    </div>
                </section>


                <section className={` ${"container"} ${classes.production}`}>
                    <h1>Продукция</h1>
                    <CardsCarousel>
                        <div className={classes.production_cards}>
                        </div>
                    </CardsCarousel>


                    {/*<a href="#" className={classes.catalogue_link}>Перейти в каталог</a>*/}
                    <NavLink to='/catalog' className={classes.catalogue_link}>
                        Перейти в каталог
                    </NavLink>
                </section>

                <section className={classes.features}>
                    <div className={classes.advantages}>
                        <div className={classes.upper_advantages}>
                            <div className={classes.advantage}>Богатый источник антиоксидантов</div>
                            <div className={classes.advantage}>Улучшает пищиварение</div>
                        </div>
                        <hr/>
                        <div className={classes.lower_advantages}>
                            <div className={classes.advantage}>Поддерживает имунную систему</div>
                            <div className={classes.advantage}>Это просто очень вкусно :)</div>
                        </div>
                    </div>
                    <img src={honeyJarAdv} alt=""/>
                </section>

                <section className={` ${"container"} ${classes.reviews}`}>
                    <h1 className="reviews_title">Отзывы</h1>
                    <div className="reviews_cards">
                        <div className="reviews_card">
                            <div className="stars">
                                <img src="https://placehold.co/150x30" alt=""/>
                            </div>
                            <h4>Абсолютно довольны!</h4>
                            <p className="reviews_card_text">
                                Очень вкусный мед и ореховое масло, берем уже не первый раз.
                                Ирина очень светлая и приятная женщина, доверяем и берем мёд только у неё!
                            </p>
                        </div>
                        <div className="reviews_card">
                            <div className="stars">
                                <img src="https://placehold.co/150x30" alt=""/>
                            </div>
                            <h4>Как у дедушки с пасеки</h4>
                            <div className="reviews_card_text">
                                С детства ела мёд у дедушки на пасеке. Боялась, что подобного не найду, но этот мед
                                точно оправдал все мои ожидания!
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;