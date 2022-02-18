let cadastro = {
    nome:"",
    sobrenome:"",
    idade:0,
}

let quantUsuarios = parseInt(prompt('Quantos usuários você quer cadastrar?'))

let dados = []

for (let i = 0; i < quantUsuarios; i++) {
    cadastro.nome = prompt('Qual o nome do usuário?')
    cadastro.sobrenome = prompt('Qual o sobrenome do usuário?')
    cadastro.idade = parseInt(prompt('Qual a idade do usuário?'))
    dados.push(cadastro) 


    console.log(dados[i].nome, dados[i].sobrenome, dados[i].idade)
    document.write(`Nome do ${i + 1}ª usuário: ${dados[i].nome} <p></p>`)
    document.write(`Sobrenome do ${i + 1}ª usuário: ${dados[i].sobrenome} <p></p>`)
    document.write(`Idade do ${i + 1}ª usuário: ${dados[i].idade} <p></p>`)
    document.write('--------------------------------------- <p></p>')
        
}







