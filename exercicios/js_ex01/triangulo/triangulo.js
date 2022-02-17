let medidasTriangulo = []

for (let i = 1; i <= 3 ; i++) {
    let medida = parseFloat(prompt(`Digite a ${i}º medida do seu triângulo`));
    medidasTriangulo.push(medida)
}

let soma = (medidasTriangulo[0] + medidasTriangulo[1] + medidasTriangulo[2])

if (soma == medidasTriangulo[0]*3 && medidasTriangulo[1]*3 && medidasTriangulo[2]*3){
    alert('Seu triangulo é equilátero')
}else if(medidasTriangulo[0] == medidasTriangulo[1] || medidasTriangulo[0] == medidasTriangulo[2] || medidasTriangulo[1] == medidasTriangulo[2]){
    alert('Seu triangulo é isósceles')
}else if(medidasTriangulo[0] != medidasTriangulo[1] != medidasTriangulo[2]){
    alert('Seu triangulo é escaleno')
}
