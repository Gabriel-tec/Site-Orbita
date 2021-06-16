let Name = document.getElementById('Name')
let Email = document.getElementById('Email')
let btn_Enviar = document.getElementById('btn_Enviar')

function Enviar(){
    if(Name.value.length == 0 || Email.value.length == 0){
        btn_Enviar.innerHTML = `Preencha os dados`
    }else{
        
        btn_Enviar.innerHTML = `Enviado`

        alert('Esse é apenas um site de demonstração, seus dados não foram usados e nem vistos por ninguém')
    }
}