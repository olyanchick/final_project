import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import classes from './faqItem.module.css'; // Импортируем стили

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${classes.faq} ${isOpen ? classes.open : ''}`}>
            <h6 className={classes.faq_title} onClick={toggleOpen}>
                {question}
                <AiOutlineDown className={`${classes.icon_rotate} ${isOpen ? classes.rotated : ''}`} />
            </h6>
            <p className={classes.faq_answer}>
                {answer}
            </p>
        </div>
    );
};

export default FAQItem;
