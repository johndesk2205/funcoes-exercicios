function saudacao(nome){

    console.log(`Olá, ${nome}!`)
}

saudacao("João")

function tabuada(num){
    console.log(`${num} x 1 = `,num*1)
    console.log(`${num} x 2 = `,num*2)
    console.log(`${num} x 3 = `,num*3)
    console.log(`${num} x 4 = `,num*4)
    console.log(`${num} x 5 = `,num*5)
    console.log(`${num} x 6 = `,num*6)
    console.log(`${num} x 7 = `,num*7)
    console.log(`${num} x 8 = `,num*8)
    console.log(`${num} x 9 = `,num*9)
    console.log(`${num} x 10 = `,num*10)
}

tabuada(Number(prompt("Escolha um número: ")))

//arrow function
const tabuada2 = (num)=>{
    console.log(`${num} x 1 = `,num*1)
    console.log(`${num} x 2 = `,num*2)
    console.log(`${num} x 3 = `,num*3)
    console.log(`${num} x 4 = `,num*4)
    console.log(`${num} x 5 = `,num*5)
    console.log(`${num} x 6 = `,num*6)
    console.log(`${num} x 7 = `,num*7)
    console.log(`${num} x 8 = `,num*8)
    console.log(`${num} x 9 = `,num*9)
    console.log(`${num} x 10 = `,num*10)
}

tabuada2(Number(prompt("Escolha um número: ")))
