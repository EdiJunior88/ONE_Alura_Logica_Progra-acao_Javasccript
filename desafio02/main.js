//Pergunte ao usuário qual é o dia da semana.
//Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
//Caso contrário, mostre "Boa semana!".
let pergunta = prompt("Qual é o dia da semana?");

if (pergunta == "Sábado" || pergunta == "Domingo") {
  alert("Bom final de semana");
} else {
  alert("Boa semana");
}

//Verifique se um número digitado pelo usuário é positivo ou negativo.
//Mostre um alerta informando.
let digitarNumero = prompt("Digite um número");

if (digitarNumero > 0) {
  alert(`O número ${digitarNumero} digitado é positivo`);
} else if (digitarNumero == 0) {
  alert("O número digitado é neutro");
} else {
  alert("O número digitado é negativo");
}

//Crie um sistema de pontuação para um jogo.
//Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt("Digite sua pontuação:");

if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta,
//usando uma template string para incluir o valor do saldo.
let saldoConta = prompt("Qual é o saldo da sua conta?");

alert(`Seu saldo é de R$${saldoConta}`);

//Peça ao usuário para inserir seu nome usando prompt.
//Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Qual seu nome?");

alert(`Boas-vindas, ${nome}!`);
