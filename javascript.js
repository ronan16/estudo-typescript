/*
const input = document.querySelector("input");

const total = localStorage.getItem("total");
input.value = total;
calcularGanho(total);

function calcularGanho(value) {
  localStorage.setItem("total", value); //o + no  começo converte para NUMBER.
  p.innerText = `ganho Total: ${value + 100 * 0.8}`;
}
function totalMudou() {
  const p = document.querySelector("p");
  const value = +input.value;

  calcularGanho(value);
}

input.addEventListener("keyup", totalMudou);
*/

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();

function showProduct(data) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
    </div>
  `;
}
