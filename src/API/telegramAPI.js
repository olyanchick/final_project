import axios from 'axios';

const telegramAPI = async (data) => {
    const chatId = '-4241938288';
    const botToken = '7435842703:AAHc2_cNEKZdt9lrWmj1bQ1ePA03cTgSCV8';

    const text = `Имя: ${data.name}\nТелефон: ${data.phone}\nКомментарий: ${data.message}`;

    try {
        await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: text,
        });
        return true; // Успех
    } catch (error) {
        console.error('Ошибка при отправке сообщения:', error);
        return false; // Ошибка
    }
};

export default telegramAPI;

