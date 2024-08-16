import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import classes from './AboutUs.module.css'

import gallery_one from './../../img/gallery/1.png'
import gallery_two from './../../img/gallery/2.png'
import gallery_three from './../../img/gallery/3.png'
import gallery_four from './../../img/gallery/4.png'
import gallery_five from './../../img/gallery/5.png'

import gallery_one_mobile from './../../img/gallery/gallery_mobile/1.png'
import gallery_two_mobile from './../../img/gallery/gallery_mobile/2.png'
import gallery_three_mobile from './../../img/gallery/gallery_mobile/3.png'
import gallery_four_mobile from './../../img/gallery/gallery_mobile/4.png'
import gallery_five_mobile from './../../img/gallery/gallery_mobile/5.png'


import centerGalleryImg from './../../img/center_gallery_img.png'
const AboutUs = () => {
    return (
        <>
            <div className="container">
                <Header/>
                <div className={classes.about_us_in_numbers}>
                    <div className={classes.numbers}>
                        <div className={classes.numbers_block}>
                            <span className={classes.number}>25</span>
                            <p>Видов мёда</p>
                        </div>
                        <div className={classes.numbers_block}>
                            <span className={classes.number}>100</span>
                            <p>Довольных клиентов</p>
                        </div>
                        <div className={classes.numbers_block}>
                            <span className={classes.number}>10</span>
                            <p>Лет продаем медовую продукцию</p>
                        </div>
                    </div>
                </div>
                <div className={classes.center_gallery_block}>
                    <p className={classes.right_text}>Мы занимаемся пчеловодстводством уже больше 10 лет. Наша пасека –
                        семейная, находится под Минском</p>
                    <div className={classes.center_gallery_img}>
                        <img src={centerGalleryImg}/>
                    </div>
                    <p className={classes.left_text}>На нашей пасеке стоят 20 ульев, а пчелы приносят нектар из экологических
                        чистых районов вдали от промышленных городов</p>
                </div>
                <h1>Участвуем в ярмарках</h1>
                <div className={classes.photo_gallery}>
                    <img className={`${classes.grid_img} ${classes.one}`} src={gallery_one} alt=""/>
                    <img className={`${classes.grid_img} ${classes.two}`} src={gallery_two} alt=""/>
                    <img className={`${classes.grid_img} ${classes.three}`} src={gallery_three} alt=""/>
                    <img className={`${classes.grid_img} ${classes.four}`} src={gallery_four} alt=""/>
                    <img className={`${classes.grid_img} ${classes.five}`} src={gallery_five} alt=""/>
                </div>
                <div className={classes.photo_gallery_mobile}>
                    <img className={classes.one} src={gallery_one_mobile} alt=""/>
                    <img className={classes.two} src={gallery_two_mobile} alt=""/>
                    <img className={classes.three} src={gallery_three_mobile} alt=""/>
                    <img className={classes.four} src={gallery_four_mobile} alt=""/>
                    <img className={classes.five} src={gallery_five_mobile} alt=""/>
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default AboutUs;