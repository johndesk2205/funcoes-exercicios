// Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.
function soma(num1, num2){
    const somar = num1+num2
    return somar
}

console.log(soma(5,6))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.
function comparar(num1, num2){
    const comparacao = (num1 >= num2)

    return comparacao
}

console.log(`O número 1 é maior ou igual que o número 2? ${comparar(5,2)}`)

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.
function parOuImpar(num){
    const paridade = num%2===0

    return paridade
}

console.log(parOuImpar(5))

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.
function salario(num){
    const salarioTotal = num - (num*0.1)

    return salarioTotal
}
console.log(salario(1200))

