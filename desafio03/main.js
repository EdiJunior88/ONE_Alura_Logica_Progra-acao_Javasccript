//Crie um contador que comece em 1 e vá até 10
//usando um loop while. Mostre cada número.
let a = 1;
while (a <= 10) {
  document.getElementById("app").innerHTML += a + "<br>";
  a++;
}

//Crie um contador que começa em 10 e vá até 0
//usando um loop while. Mostre cada número.
let b = 10;
while (b >= 0) {
  document.getElementById("app").innerHTML += b + "<br>";
  b--;
}

//Crie um programa de contagem regressiva.
//Peça um número e conte deste número até 0,
//usando um loop while no console do navegador.
let numeroRegressivo = prompt("Escolha um número");
document.getElementById("app").innerHTML +=
  "Contagem regressiva" + "<br>" + "<br>";

let c = numeroRegressivo;
while (c >= 0) {
  document.getElementById("app").innerHTML += c + "<br>";
  c--;
}

//Crie um programa de contagem progressiva.
//Peça um número e conte de 0 até esse número,
//usando um loop while no console do navegador.
let numeroProgressivo = prompt("Escolha um número");
document.getElementById("app").innerHTML +=
  "Contagem Progressiva" + "<br>" + "<br>";

let d = 0;
while (d <= numeroProgressivo) {
  document.getElementById("app").innerHTML += d + "<br>";
  d++;
}
