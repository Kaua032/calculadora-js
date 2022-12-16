function dentro(num) {
  let conta = (document.querySelector("#resultado").innerHTML += num);
}
function limpar() {
  document.querySelector("#resultado").innerHTML = "";
}

function dele() {
  let resultado = document.querySelector("#resultado").innerHTML;
  document.querySelector("#resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function result() {
  let resultado = document.querySelector("#resultado").innerHTML;
  if (resultado) {
    document.querySelector("#resultado").innerHTML = eval(resultado);
  }
}
