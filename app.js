const TXT_POPUP = `Привет, приложение находится в вразработке`

$(document).ready(() => {
  let tg = window.Telegram.WebApp;

  //Макс высота
  if (!tg.isExpanded) {
    tg.expand()
  }

  //Предупреждение о разработке
  tg.PopupButton([{"type":"close", "text":"TXT_POPUP"}])

  // отключение свайпа для закрытия
  tg.isVerticalSwipesEnabled = false;

  //кнопка назад
  tg.BackButton.isVisible = true;

  $('.btn-close').click(() => {
    tg.close();
  })

});
