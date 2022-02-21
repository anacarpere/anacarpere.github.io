let dados = {
    numero: 0,
}

let quantNumeros = parseInt(prompt('Quantos números você quer calcular'))

let numeros = []
let soma = []

for (let i = 0; i < quantNumeros; i++) {
    dados.numero = parseFloat(prompt(`Digite o ${i+1}º número`))
    
    numeros.push(dados)
    console.log(numeros[i].numero)
    soma.push(numeros[i].numero)
    console.log(soma)   
}

let soma_total = 0
for (let i = 0; i < quantNumeros; i++) {
    soma_total += soma[i]
}
console.log(soma_total)
document.write(`Você escolheu os valores ${soma} <p></p>`)
document.write(`A soma dos valores escolhidos é ${soma_total} <p></p>`)
document.write(`A média dos valores escolhidos é ${soma_total / soma.length} <p></p>`)


for (let i = 0; i < quantNumeros; i++){
    document.write(`O valor de ${soma[i]}² é ${soma[i] ** 2} <p></p>`)
}

document.write(` A raiz cúbica de ${soma[0]} é = ${Math.cbrt(soma[0].toFixed(2))} e a raiz quadrada de ${soma[1]} é = ${Math.sqrt(soma[1].toFixed(2))} <p></p>`)

