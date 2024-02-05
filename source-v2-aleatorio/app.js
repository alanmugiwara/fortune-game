alert("Boas vindas ao >Fortune Game<\nO jogo do número da sorte!\nUm Jogo simples escrito em Java Script.");
let numeroSecreto = parseInt(Math.random() * 10 + 1)
console.log(numeroSecreto);
let chute;
let tentativa = 1;
let maxNum = parseInt(Math.random() * 20 + 1)


while (chute != numeroSecreto) {
  chute = prompt(`Por favor, escolha um número entre 1 e ${maxNum}.`);
  if (parseInt(chute) === numeroSecreto) {
  } else {
    if (chute > maxNum) {
      alert(`Acho que você não leu.\nVocê digitou um número\nmaior que ${maxNum}!`);
    } else {
      if (chute > numeroSecreto) {
        alert(`O número secreto na verdade é menor que ${chute}.`);
      } else {
        alert(`O número secreto na verdade é maior que ${chute}.`);
      }
      tentativa++;
    }
  }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa, miseravi';
alert(`Parabéns!\nVocê descobriu o número secreto!\nQue é >${numeroSecreto}< Em ${tentativa} ${palavraTentativa}!`);


/*
if (tentativa > 1 )
  alert(`Parabéns! Você descobriu o número secreto!\nQue é ${numeroSecreto}! Em ${tentativa} tentativas!`);
else
  alert(`Parabéns! Você descobriu o número secreto!\nQue é ${numeroSecreto}! Em ${tentativa} única tentativa, miseravi!`); */
