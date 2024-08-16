import classes from './Header.module.css';
import Navbar from "../navbar/Navbar.jsx";
import HeaderButton from "../buttons/HeaderButton/HeaderButton.jsx";

const Header = ({ setModalActive }) => {
    return (
        <div>
            <header>
                <Navbar />
                <div className={classes.header_feedback}>
                    <span className={classes.phone_number}>+375 29 366 59 48</span>
                    <HeaderButton onClick={() => setModalActive(true)} />
                </div>
            </header>
        </div>
    );
};

export default Header