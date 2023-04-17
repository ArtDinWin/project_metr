import singleItem from "./../singleItem/singleItemController";

export default function (state) {
  // Очищаем контейнер приложения
  const markup = ``;
  document.querySelector("#app").innerHTML = markup;
  // запускаем компонент singleItem
  singleItem(state);
}
