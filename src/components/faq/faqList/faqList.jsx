import React from 'react';
import FAQItem from './../faqItem/faqItem.jsx';
import classes from './faqList.module.css'; // Импортируем стили

const FAQList = () => {
    const faqs = [
        {
            question: 'Как выбрать качественный мёд?',
            answer: 'Качественный мед должен быть прозрачным и иметь характерный аромат цветочного нектара. ' +
                'Он не должен содержать осадка или пузырьков. Для проверки натуральности можно провести тест с водой: ' +
                'натуральный мед не растворяется мгновенно, а образует осадок.',
        },
        {
            question: 'Можно ли мёд аллергикам?',
            answer: 'Продукты пчеловодства могут вызывать аллергические реакции у некоторых людей, особенно у тех, ' +
                'кто уже имеет аллергию на пыльцу или пчелиные укусы. Перед употреблением рекомендуется проконсультироваться ' +
                'с врачом. Начинать стоит с небольших доз, чтобы проверить реакцию организма.',
        },
        {
            question: 'Как правильно хранить мёд?',
            answer: 'Мед следует хранить в плотно закрытой емкости при комнатной температуре, вдали от прямого солнечного света. ' +
                'Продукты пчеловодства, такие как прополис и маточное молочко, рекомендуется хранить в холодильнике. ' +
                'Сроки и условия хранения указаны на упаковке каждого продукта.',
        },
        {
            question: 'Какие масла использовать для жарки?',
            answer: 'Для жарки лучше всего подходят масла с высокой точкой дымления, такие как оливковое, ' +
                'кокосовое и авокадо. Они сохраняют свои полезные свойства и не выделяют вредные вещества при высоких температурах. ' +
                'Сыродавленные масла чаще используются в свежем виде для заправки салатов и готовых блюд.',
        },
    ];

    return (
        <div className={classes.faqs}>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQList;
