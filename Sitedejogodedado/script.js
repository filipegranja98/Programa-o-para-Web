
const resultado = document.getElementById("resultado");
const botao = document.getElementById("botao");
// função cara calcular o numero aleatório
const calcular = () =>{
    const numeroAleatorio = Math.floor(Math.random() *6) +1;
    resultado.innerHTML = numeroAleatorio; 
}

botao.onclick = calcular;