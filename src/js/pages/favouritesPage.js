import favoriteCards from "./../favouritesCards/favouritesCardsController";

export default function () {
  document.querySelector("#app").innerHTML = "";
  favoriteCards(state);
}
