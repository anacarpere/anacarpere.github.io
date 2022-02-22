const btn = document.getElementsByTagName('button')[0]
const div = document.querySelector('#lampada')
const imagem = document.getElementById('imagem-lampada')

console.log(imagem.className)

btn.addEventListener('click' , ()=>{

    if (imagem.className == 'on') {
    imagem.src = 'images/lampada-apagada.png'
    btn.innerText = 'acender'
    imagem.className = 'off'
    }else{
    imagem.className = 'on'
    imagem.src = 'images/lampada-acesa.png'
    btn.innerText = 'apagar'
    
    }       
})

console.log(imagem)