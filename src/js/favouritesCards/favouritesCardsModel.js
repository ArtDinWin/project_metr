export default class FavoritesCards {
  constructor(favsList) {
    this.favsList = favsList;
  }

  async getFavs() {
    const ids = this.favsList.toString(); // 1,3,5

    try {
      const queryString = `https://jsproject.webcademy.ru/items?ids=${ids}`;

      const result = await fetch(queryString);
      const data = await result.json();
      this.cards = await data;
    } catch (error) {
      alert("Ошибка в компоненте Страница избранное");
    }
  }
}
