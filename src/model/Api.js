export class Api {
  static async requisicao() {
    let response = await fetch("https://kenzie-olympics.herokuapp.com/paises");

    let data = await response.json();

    return data;
  }
}
