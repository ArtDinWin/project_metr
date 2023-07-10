export default class Filter {
  constructor() {
    this.query = "";
  }

  async getParams() {
    try {
      const queryString = "https://jsproject.webcademy.ru/itemsinfo";
      const response = await fetch(queryString); // получили промис
      const data = await response.json(); // перевели в json
      this.params = await data;
    } catch (error) {
      alert(error);
    }
  }

  async getResults() {
    try {
      const queryString = "https://jsproject.webcademy.ru/items" + this.query;
      const response = await fetch(queryString); // получили промис
      const data = await response.json(); // перевели в json
      this.result = await data;
    } catch (error) {
      alert(error);
    }
  }
}
