$(document).ready(() => {
  let tg = window.Telegram.WebApp;

  //Макс высота
  if (!tg.isExpanded) {
    tg.expand()
  }

  // отключение свайпа для закрытия
  tg.isVerticalSwipesEnabled = false;

  //кнопка назад
  tg.BackButton.isVisible = true;

  $('.btn-close').click(() => {
    tg.close();
  })

});
