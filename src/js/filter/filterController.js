import Filter from "./filterModel";
import * as view from "./filterView";

export default async function (state) {
  //const filter = new Filter();
  //filter.getParams();
  // переписали эти строчки
  if (!state.filter) state.filter = new Filter();
  // получение параметров для фильтра
  await state.filter.getParams();
  view.render(state.filter.params);

  // запрос на сервер
  await state.filter.getResults();
  state.results = state.filter.result;

  // счетчик на кнопке state.filter.result.length
  view.changeButtonText(state.filter.result.length);

  // прослушка событий формы ИЗМЕНЕНИЕ
  const form = document.querySelector("#filter-form");
  form.addEventListener("change", async function (e) {
    e.preventDefault();
    state.filter.query = view.getInput();
    await state.filter.getResults();
    state.results = state.filter.result;
    view.changeButtonText(state.filter.result.length);
  });

  // сброс формы
  form.addEventListener("reset", async function (e) {
    state.filter.query = "";
    await state.filter.getResults();
    view.changeButtonText(state.filter.result.length);
  });

  // отправка формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    state.emitter.emit("event:render-listing", {});
  });
}
