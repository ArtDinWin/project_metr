import homePage from "./pages/homePage";
import singleItem from "./pages/singleItemPage";
import favouritesPage from "./pages/favouritesPage";
import bidsPage from "./pages/bidsPage";
import errorPage from "./pages/errorPage";
import EventImitter from "./utils/EventEmitter";
import Favorites from "./favorites/favoritesModel";

// данные для работы приложения
const state = {
  results: [],
  emitter: new EventImitter(),
  favorites: new Favorites(),
};
// тестирование. после удалить
window.state = state;

const routes = [
  { path: "/", component: homePage },
  { path: "item", component: singleItem },
  { path: "favourites", component: favouritesPage },
  { path: "bids", component: bidsPage },
];

function findComponentByPath(path, routes) {
  return routes.find(function (route) {
    return route.path === path;
  });
}

// Router
function router() {
  // Split path to array
  const pathArray = location.hash.split("/");

  // Set current path
  let currentPath = pathArray[0] === "" ? "/" : pathArray[1];
  currentPath = currentPath === "" ? "/" : currentPath;

  // save route params
  state.routeParams = pathArray[2] ? pathArray[2] : "";

  // Chose matching Component from router or Error Page
  const { component = errorPage } =
    findComponentByPath(currentPath, routes) || {};

  component(state);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
