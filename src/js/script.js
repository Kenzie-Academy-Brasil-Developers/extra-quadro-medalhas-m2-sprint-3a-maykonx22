import { Api } from "../model/Api.js";

Api.requisicao();

const data = await Api.requisicao();

function constructApi() {
  let array = [];

  //console.log(data);
  for (let i = 0; i < data.length; i++) {
    let total =
      data[i].medal_bronze + data[i].medal_gold + data[i].medal_silver;

    array[i] = data[i];
    array[i].total = total;
  }

  array.sort(function (a, b) {
    if (a.total > b.total) {
      return -1;
    } else {
      if (a.total === b.total) {
        if (a.medal_gold > b.medal_gold) {
          return -1;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  });
  for (let i = 0; i < array.length; i++) {
    array[i].id = i;
  }

  template(array);

  return array;
}

const table = document.querySelector("#table-div");

function template(dataArray) {
  table.innerHTML = "";
  for (let i = 0; i < dataArray.length; i++) {
    //Inicio Divisoria
    const tdDivi1 = document.createElement("td");
    tdDivi1.classList = "div-incio-tr";

    const tdDivi2 = document.createElement("td");
    tdDivi2.classList = "div-incio-tr";

    const tdDivi3 = document.createElement("td");
    tdDivi3.classList = "div-incio-tr";

    const tdDivi4 = document.createElement("td");
    tdDivi4.classList = "div-incio-tr";

    const tdDivi5 = document.createElement("td");
    tdDivi5.classList = "div-incio-tr";
    //Final Divisoria

    const tr = document.createElement("tr");
    if ((i + 1) % 2 === 0) {
      tr.classList = "tr-par";
    } else {
      tr.classList = "tr-impar";
    }
    //Inicio Criando posicao
    const tdPosisao = document.createElement("td");
    tdPosisao.classList = "posicao-class";

    const spanPosicao = document.createElement("span");
    spanPosicao.innerText = `${i + 1}º`;

    tdPosisao.appendChild(spanPosicao);
    //Final Criando posicao
    //Inicio Criando pais
    const tdPais = document.createElement("td");
    tdPais.classList = "pais-class";

    const imgPais = document.createElement("img");
    imgPais.src = dataArray[i].flag_url;
    imgPais.alt = dataArray[i].country;

    const spanPais = document.createElement("span");
    spanPais.innerText = dataArray[i].country;

    tdPais.appendChild(imgPais);
    tdPais.appendChild(spanPais);
    //Final Criando pais
    //Inicio Criando ouro
    const tdOuro = document.createElement("td");
    tdOuro.classList = "ouro-class";

    const spanOuro = document.createElement("span");
    spanOuro.innerText = dataArray[i].medal_gold;

    tdOuro.appendChild(spanOuro);
    //Final Criando ouro
    //Inicio Criando prata
    const tdPrata = document.createElement("td");
    tdPrata.classList = "prata-class";

    const spanPrata = document.createElement("span");
    spanPrata.innerText = dataArray[i].medal_silver;

    tdPrata.appendChild(spanPrata);
    //Final Criando prata
    //Inicio Criando bronze
    const tdBronze = document.createElement("td");
    tdBronze.classList = "bronze-class";

    const spanBronze = document.createElement("span");
    spanBronze.innerText = dataArray[i].medal_bronze;

    tdBronze.appendChild(spanBronze);
    //Final Criando bronze
    //Inicio Criando total
    const tdTotal = document.createElement("td");
    tdTotal.classList = "total-class";

    const spanTotal = document.createElement("span");
    spanTotal.innerText = dataArray[i].total;

    tdTotal.appendChild(spanTotal);
    //Final Criando total

    //Add tr
    tr.appendChild(tdPosisao);
    tr.appendChild(tdDivi1);
    tr.appendChild(tdPais);
    tr.appendChild(tdDivi2);
    tr.appendChild(tdOuro);
    tr.appendChild(tdDivi3);
    tr.appendChild(tdPrata);
    tr.appendChild(tdDivi4);
    tr.appendChild(tdBronze);
    tr.appendChild(tdDivi5);
    tr.appendChild(tdTotal);
    //Add table
    table.appendChild(tr);
  }
}

const dataT = constructApi();

const posicao = document.querySelector("#posicao button");

posicao.addEventListener("click", (event) => {
  let evento = event.target;

  console.log(dataT);
  if (Number(posicao.value) == 0) {
    let newArrayR = [];

    for (let i = dataT.length - 1; i >= 0; i--) {
      newArrayR.push(dataT[i]);
    }

    template(newArrayR);

    posicao.value = 1;

    posicao.innerHTML = `Posição <span>&#708</span>`;
  } else {
    let newArray = [];

    for (let i = 0; i < dataT.length; i++) {
      newArray.push(dataT[i]);
    }

    template(newArray);

    posicao.value = 0;

    posicao.innerHTML = `Posição <span>&#709</span>`;
  }
});

const ouro = document.querySelector("#ouro button");

ouro.addEventListener("click", (event) => {
  const dataArray = [];

  dataT.forEach((element) => {
    dataArray.push(element);
  });

  dataArray.sort((a, b) => {
    if (a.medal_gold > b.medal_gold) {
      return -1;
    } else {
      if (a.medal_gold === b.medal_gold) {
        if (a.medal_silver > b.medal_silver) {
          return -1;
        } else {
          if (a.medal_silver === b.medal_silver) {
            if (a.medal_bronze > b.medal_bronze) {
              return -1;
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
      } else {
        return true;
      }
    }
  });

  if (Number(ouro.value) == 0) {
    let newArrayR = [];

    for (let i = dataArray.length - 1; i >= 0; i--) {
      newArrayR.push(dataArray[i]);
    }

    template(newArrayR);

    ouro.value = 1;

    ouro.innerHTML = `Ouro <span>&#708</span>`;
  } else {
    let newArray = [];

    for (let i = 0; i < dataArray.length; i++) {
      newArray.push(dataArray[i]);
    }

    template(newArray);

    ouro.value = 0;

    ouro.innerHTML = `Ouro <span>&#709</span>`;
  }
});

const prata = document.querySelector("#prata button");

prata.addEventListener("click", (event) => {
  const dataArray = [];

  dataT.forEach((element) => {
    dataArray.push(element);
  });

  dataArray.sort((a, b) => {
    if (a.medal_silver > b.medal_silver) {
      return -1;
    } else {
      if (a.medal_silver === b.medal_silver) {
        if (a.medal_gold > b.medal_gold) {
          return -1;
        } else {
          if (a.medal_gold === b.medal_gold) {
            if (a.medal_bronze > b.medal_bronze) {
              return -1;
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
      } else {
        return true;
      }
    }
  });

  if (Number(prata.value) == 0) {
    let newArrayR = [];

    for (let i = dataArray.length - 1; i >= 0; i--) {
      newArrayR.push(dataArray[i]);
    }

    template(newArrayR);

    prata.value = 1;

    prata.innerHTML = `Prata <span>&#708</span>`;
  } else {
    let newArray = [];

    for (let i = 0; i < dataArray.length; i++) {
      newArray.push(dataArray[i]);
    }

    template(newArray);

    prata.value = 0;

    prata.innerHTML = `Prata <span>&#709</span>`;
  }
});

const bronze = document.querySelector("#bronze button");

bronze.addEventListener("click", (event) => {
  const dataArray = [];

  dataT.forEach((element) => {
    dataArray.push(element);
  });

  dataArray.sort((a, b) => {
    if (a.medal_bronze > b.medal_bronze) {
      return -1;
    } else {
      if (a.medal_bronze === b.medal_bronze) {
        if (a.medal_gold > b.medal_gold) {
          return -1;
        } else {
          if (a.medal_gold === b.medal_gold) {
            if (a.medal_silver > b.medal_silver) {
              return -1;
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
      } else {
        return true;
      }
    }
  });

  if (Number(bronze.value) == 0) {
    let newArrayR = [];

    for (let i = dataArray.length - 1; i >= 0; i--) {
      newArrayR.push(dataArray[i]);
    }

    template(newArrayR);

    bronze.value = 1;

    bronze.innerHTML = `Bronze <span>&#708</span>`;
  } else {
    let newArray = [];

    for (let i = 0; i < dataArray.length; i++) {
      newArray.push(dataArray[i]);
    }

    template(newArray);

    bronze.value = 0;

    bronze.innerHTML = `Bronze <span>&#709</span>`;
  }
});

const pesquisa = document.querySelector("#pesquisas div button");

const input = document.querySelector("#pesquisas div input");

pesquisa.addEventListener("click", (event) => {
  const evento = event.target;

  const inputValue = input.value;

  const result = filtro(inputValue);

  if (result != false) {
    template(result);
  } else {
    alert("Pesquisa Invalida! Verifique acentuação e o Nome do País");
    constructApi();
  }

  input.value = "";
});

function filtro(dataV) {
  const result = [];

  for (let i = 0; i < dataT.length; i++) {
    if (dataT[i].country.toUpperCase() == dataV.toUpperCase()) {
      result.push(dataT[i]);
      return result;
    }
  }

  return false;
}
