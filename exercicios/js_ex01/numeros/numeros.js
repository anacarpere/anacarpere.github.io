alert('Digite 3 números aleatórios que diremos qual é o maior')
let numeros = []
for(let i = 1; i <= 3; i++){
    numero = parseInt(prompt(`Digite o ${i}º número`))
    numeros.push(numero)
     }
     if (numeros[0] == numeros[1] || numeros[0] == numeros[2] || numeros[1] == numeros[0] || numeros[1] == numeros[2] || numeros[2] == numeros[0] || numeros[2] == numeros[1]){
         alert('Números iguais não são aceitos, digite novamente')
     }
     
    if (numeros[0] > numeros[1] && numeros[0] > numeros[2]){
        alert(`O maior número digitado foi o ${numeros[0]}`)
    }else if (numeros[1] > numeros[0] && numeros[1] > numeros[2]){
        alert(`O maior número digitado foi o ${numeros[1]}`)       
    }else if (numeros[2] > numeros[0] && numeros[2] > numeros[1]){     
        alert(`O maior número digitado foi o ${numeros[2]}`)
    }