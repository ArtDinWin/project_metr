import * as view from "./listingView";

export default function (state) {
  // рендер контейнера для карточек
  view.render();

  // рендер карточек
  state.results.forEach((item) => {
    view.renderCard(item, state.favorites.isFav(item.id));
  });

  state.emitter.subscribe("event:render-listing", () => {
    // очистить контейнер с карточками
    view.clearListingContainer();
    // рендер карточек
    state.results.forEach((item) => {
      view.renderCard(item, state.favorites.isFav(item.id));
    });
    // Запускаем прослушку иконок "Добавить в избранное"
    addToFavsListener();
  });

  // Функция для работы иконок "Добавить в избранное"
  function addToFavsListener() {
    Array.from(document.getElementsByClassName("card__like")).forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          // Находим ID объекта по которому кликнули
          const currentID = e.target.closest(".card").dataset.id;
          // добовляем/убираем объект из избранного
          state.favorites.toggleFav(currentID);
          // включаем выключаем активную иконку
          view.toggleFavoriteIcon(
            e.target.closest(".card__like"),
            state.favorites.isFav(currentID)
          );
        });
      }
    );
  }

  // Запускаем прослушку при старте иконок "Добавить в избранное"
  addToFavsListener();
}
