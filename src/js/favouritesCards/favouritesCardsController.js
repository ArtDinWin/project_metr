import FavoritesCards from "./favouritesCardsModel";
import * as view from "./favouritesCardsView";

export default async function (state) {
  // Получить список объектов которые находятся в избранном
  const favsList = state.favorites.favs;
  if (favsList.length > 0) {
    // Получение данных с сервера
    const favoriteCards = new FavoritesCards(favsList);
    await favoriteCards.getFavs();

    // Рендер карточек в избранном
    view.renderPage(favoriteCards.cards);

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

    addToFavsListener();
  } else {
    view.noFavorites();
  }
}
