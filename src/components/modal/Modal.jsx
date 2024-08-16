import classes from './Modal.module.css'
import { FaTimes } from 'react-icons/fa';
import PropTypes from "prop-types";
import modalImg from './../../img/PopUpImg.png'
import ApplicationForm from "../applicationForm/ApplicationForm.jsx";

const Modal = ({ active, setActive }) => {
    const normalModal = `${classes.modal}`;
    const activeModal = `${classes.modal} ${classes.modal_active}`;

    return (
        <div>

            <div className={active ? activeModal : normalModal}>
                <div className={classes.modal_content} onClick={(e) => e.stopPropagation()}>
                    <button className={classes.modal_close_button} onClick={() => setActive(false)}>
                        <FaTimes/>
                    </button>
                    <img className={classes.modal_img} src={modalImg}/>
                    <ApplicationForm/>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
};

export default Modal;

