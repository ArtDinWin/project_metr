import SingleItem from "./singleItemModel";
import * as view from "./singleItemView";

export default async function (state) {
  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();

  // отрисовываем разметку для отдельного объекта
  view.render(
    state.singleItem.result,
    state.favorites.isFav(state.singleItem.id)
  );

  // ПРОСЛУШКА СОБЫТИЙ
  // Открытие модального окна
  document.querySelector(".button-order").addEventListener("click", () => {
    view.showModal();
  });

  // Закрытие модального окна - клик по кнопке
  document.querySelector(".modal__close").addEventListener("click", () => {
    view.hideModal();
  });
  // Закрытие модального окна - клик по оверлею
  document.querySelector(".modal-wrapper").addEventListener("click", (e) => {
    if (e.target.closest(".modal")) {
      return null;
    }
    view.hideModal();
  });

  // Блок кода слушает отправку формы
  document
    .querySelector(".modal__form")
    .addEventListener("submit", async function (e) {
      e.preventDefault();
      console.log("Заявка отправленна!");
      // собираем данные с формы
      const formData = view.getInput();
      await state.singleItem.submitForm(formData);

      const response = state.singleItem.response;
      if (response.message === "Bid Created") {
        alert("Ваша заявка успешно добавлена!");
        view.hideModal();
        view.clearInput();
      } else if (response.message === "Bid Not Created") {
        response.errors.forEach((item) => {
          alert(item);
        });
      }
    });

  // Прослушка кнопки добавить в избранное button-favourite
  document.querySelector(".button-favourite").addEventListener("click", () => {
    // вызов метода избранное state.favorites.addFav(state.singleItem.id);
    state.favorites.toggleFav(state.singleItem.id);

    view.toggleFavoriteButton(state.favorites.isFav(state.singleItem.id));
  });
}
