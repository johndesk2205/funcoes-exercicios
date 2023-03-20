// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.



function soma(num1, num2){
    const somando = num1+num2

    return somando
}
function subtrai(num1, num2){
    const subtraindo = num1 - num2

    return subtraindo
}

function multiplicacao(num1, num2){
    const multiplicando = num1*num2

    return multiplicando
}

function divisao(num1, num2){
    const dividindo = num1/num2

    return dividindo
}

const num1 = Number(prompt("Digite o primeiro número:"))
const num2 = Number(prompt("Digite o segundo número:"))

console.log(`Primeiro número: ${num1}`)
console.log(`Segundo número: ${num2}`)

console.log(soma(num1,num2))
console.log(subtrai(num1,num2))
console.log(multiplicacao(num1,num2))
console.log(divisao(num1,num2))
