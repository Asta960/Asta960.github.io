$(document).ready(() => {
  let tg = window.Telegram.WebApp;

  $('.btn-close').click(() => {
    tg.close();
  })

});
