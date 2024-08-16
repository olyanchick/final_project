import classes from './HeaderButton.module.css';

const HeaderButton = ({onClick}) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={classes.header_button}>Оставить заявку</button>
        </div>
    );
};

export default HeaderButton;