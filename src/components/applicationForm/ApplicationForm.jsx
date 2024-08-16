import classes from './ApplicationForm.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import telegramAPI from "../../API/telegramAPI";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Имя обязательно')
        .matches(/^[A-Za-zА-Яа-я]+$/, 'Неверный формат имени'),
    phone: Yup.string()
        .required('Телефон обязателен')
        .matches(/^\+?[1-9]\d{1,14}$/, 'Неверный формат телефона'),
    message: Yup.string()
        .required('Сообщение обязательно')
        .max(300, 'Сообщение должно содержать не более 300 символов')
});

const ApplicationForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset // Для сброса формы после успешной отправки
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onSubmit"
    });

    const onSubmit = async (data) => {
        const success = await telegramAPI(data);

        if (success) {
            alert('Сообщение успешно отправлено!');
            reset(); // Очистка формы после отправки
        } else {
            alert('Не удалось отправить сообщение.');
        }
    };

    return (
        <div>
            <form className={classes.application_form} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={classes.form_title}>Оставьте заявку и мы Вам перезвоним</h3>

                <div className={classes.input_field}>
                    <label>Имя*</label>
                    <input
                        type="text"
                        className={errors.name ? classes.input_error : ''}
                        {...register('name')}
                        placeholder='Ольга'
                    />
                    <div className={classes.error_message}>
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                </div>

                <div className={classes.input_field}>
                    <label>Телефон*</label>
                    <input
                        type="tel"
                        className={errors.phone ? classes.input_error : ''}
                        {...register('phone')}
                        placeholder={'+375 (29) 603-15-20'}
                    />
                    <div className={classes.error_message}>
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>
                </div>

                <div className={classes.input_field}>
                    <label>Комментарии</label>
                    <textarea
                        className={errors.message ? classes.input_error : ''}
                        {...register('message')}
                    />
                    <div className={classes.error_message}>
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                </div>

                <button type="submit" className={classes.form_button}>
                    Отправить
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;