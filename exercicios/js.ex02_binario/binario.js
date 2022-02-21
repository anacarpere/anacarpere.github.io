let num = prompt('Digite um número binário')

let binario = []

for (let caractere of num){
    binario.push(caractere)
}

console.log(binario)

let binario_num = [] 

for (let i = 0; i < binario.length; i++){
    binario_num.push(parseInt(binario[i]))
}

console.log(binario_num)
let base = []

for (let i = 0; i < binario.length; i++){
    base.push(2 ** (binario_num.length - [i+1]))
}

console.log(base)

let base_mult = []
for (let i = 0; i < binario.length; i++){
    base_mult.push(base[i] * binario_num[i])
}

console.log(base_mult)

let soma_total = 0
for (let i = 0; i < binario.length; i++){
    soma_total += base_mult[i]
}

console.log(soma_total)
document.write(`O número decimal de ${num} é ${soma_total}`)


