import bisiesto from "./bisiesto";

const year = document.querySelector("#txtyear");
const resultado = document.querySelector("#resultado-div");
const btnmostrar=document.querySelector("#bisiesto-button");

btnmostrar.addEventListener("click", (event) => {
  event.preventDefault();

  const txtyear = Number.parseInt(year.value);


  resultado.innerHTML = "<p>" + bisiesto(txtyear) + "</p>";
});
