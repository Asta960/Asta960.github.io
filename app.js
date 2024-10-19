$(document).ready(() => {
  let tg = window.Telegram.WebApp;

  // отключение свайпа для закрытия
  tg.isVerticalSwipesEnabled = false;

  //кнопка назад
  tg.BackButton.isVisible = true;

  $('.btn-close').click(() => {
    tg.close();
  })

});
