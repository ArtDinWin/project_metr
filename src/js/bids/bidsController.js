import Bids from "./bidsModel";
import * as view from "./bidsView";

export default async function (state) {
  // создаем объект Bids
  if (!state.bids) state.bids = new Bids();
  // получение заявок с сервера
  await state.bids.getBids();
  // отображение заявок
  view.renderBids(state.bids.bidsArray);
}
