export default class Bids {
  constructor() {}

  async getBids() {
    try {
      const queryString = "https://jsproject.webcademy.ru/bids";
      const response = await fetch(queryString); // получили промис
      const data = await response.json(); // перевели в json
      this.bidsArray = await data;
    } catch (error) {
      alert("Ошибка в компоненте ЗАЯВКИ");
    }
  }
}
