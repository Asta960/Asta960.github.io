$(document).ready(() => {
  let tg = window.Telegram.WebApp;

  // отключение свайпа для закрытия
  tg.isVerticalSwipesEnabled = false;

  $('.btn-close').click(() => {
    tg.close();
  })

});
