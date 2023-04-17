export default class SingleItem {
  constructor(id) {
    this.id = id;
  }
  async getItem() {
    try {
      const queryString = `https://jsproject.webcademy.ru/items/${this.id}`;
      const response = await fetch(queryString); // получили промис
      const data = await response.json(); // перевели в json
      this.result = await data;
    } catch (error) {
      alert(error);
    }
  }

  async submitForm(formData) {
    try {
      const queryString = `https://jsproject.webcademy.ru/bidnew`;
      const response = await fetch(queryString, {
        method: "POST",
        headers: {
          "Content-type": "application/ json; charset=UTF-8",
        },
        body: JSON.stringify(formData),
      }); // получили промис
      const data = await response.json(); // перевели в json
      this.response = await data;
    } catch (error) {
      alert(error);
    }
  }
}
