//Обработка параметра start в url #gpt
const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Запустите mini app по ссылке: https://t.me/Dark_sleep_bot');
});


const TXT_POPUP = `Привет, приложение находится в вразработке`

$(document).ready(() => {
  let tg = window.Telegram.WebApp;

  //Макс высота
  if (!tg.isExpanded) {
    tg.expand()
  }

  //Предупреждение о разработке

  // отключение свайпа для закрытия
  tg.isVerticalSwipesEnabled = false;

  //кнопка назад
  // tg.BackButton.isVisible = true;

  $('.btn-close').click(() => {
    tg.close();
  })

});
