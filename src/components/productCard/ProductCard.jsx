import classes from './ProductCard.module.css';
import { CgArrowLongRight } from "react-icons/cg";
import {NavLink} from "react-router-dom";

const ProductCard = ({ name, collection, photo }) => {
    return (
        <>
                <div className={classes.production_card}>
                    <h3 className={classes.product_card_name}>{name}</h3>
                    <p className={classes.production_card_date}>Сбор {collection}</p>
                    <img
                        className={classes.prod_card_img}
                        src={photo}
                        alt={name}
                    />
                    <NavLink to='/catalog/{slug}' className={classes.production_card_link}>
                        Подробнее
                        <CgArrowLongRight className={classes.arrow}/>
                    </NavLink>
                </div>
        </>
    );
};

export default ProductCard;
