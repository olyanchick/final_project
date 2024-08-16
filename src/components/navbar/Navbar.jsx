import {NavLink} from 'react-router-dom'
import classes from "./Navbar.module.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from "react";

const Navbar = () => {

    const navRef = useRef(null);

    const showNavBar = () => {
        // navRef.current.classList.toggle(`${classes.responsive_nav}`)
        navRef.current.classList.toggle(classes.responsive_nav)
    }

    const activeLink = `${classes.nav_link} ${classes.nav_link_active}`;
    const normalLink = `${classes.nav_link}`

    return (
        <>
            <button
                className={classes.burger_button}
                onClick={showNavBar}>
                <FaBars/>
            </button>
            <nav ref={navRef} className={classes.nav}>
                <button
                    className={`${classes.burger_button} ${classes.burger_button_close}`}
                    onClick={showNavBar}>
                    <FaTimes/>
                </button>
                <ul>
                    <li className={classes.nav_item}>
                        <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>
                            Главная
                        </NavLink>
                    </li>
                    <li className={classes.nav_item}>
                        <NavLink to='/catalog' className={({isActive}) => isActive ? activeLink : normalLink}>
                            Каталог
                        </NavLink>
                    </li>
                    <li className={classes.nav_item}>
                        <NavLink to='/aboutus' className={({isActive}) => isActive ? activeLink : normalLink}>
                            О нас
                        </NavLink>
                    </li>
                    <li className={classes.nav_item}>
                        <NavLink to='/deliveryandpayment' className={({isActive}) => isActive ? activeLink : normalLink}>
                            Доставка и оплата
                        </NavLink>
                    </li>
                    <li className={classes.nav_item}>
                        <NavLink to='/contacts' className={({isActive}) => isActive ? activeLink : normalLink}>
                            Контакты
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;