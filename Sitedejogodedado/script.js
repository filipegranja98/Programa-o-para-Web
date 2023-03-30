
const resultado = document.getElementById("resultado");
const botao = document.getElementById("botao");

// botao.addEventListener("click",function(){
   // const numeroAleatorio = Math.floor(Math.random()* 6) + 1;
    //resultado.innerHTML = numeroAleatorio;
//});
const calcular = () =>{
    const numeroAleatorio = Math.floor(Math.random() *6) +1;
    resultado.innerHTML = numeroAleatorio; 
}

botao.onclick = calcular;