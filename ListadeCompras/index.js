const inputItem = document.getElementById("inputItem");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista");


let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const itemText = document.createTextNode(listaItems[index]);
    const listItem = document.createElement("li");
    listItem.appendChild(itemText);
    lista.appendChild(listItem);
  }
};


const handleBtAdicionarClick = () => {
  const item = inputItem.value;
  const quantidade = inputQuantidade.value;
  const preco = inputPreco.value;
  if (!item || !quantidade || !preco ) {
    alert("Necessário digitar um item!");
    return;
  }
  const lista = document.getElementById("lista");
  const novaLi = document.createElement("li");
  novaLi.innerHTML = `Item: ${item} - Quantidade: ${quantidade} - Preço: ${preco}`;
  lista.appendChild(novaLi);
  document.getElementById("inputItem").value = "";
  document.getElementById("inputQuantidade").value = "";
  document.getElementById("inputPreco").value = "";
  document.getElementById("inputItem").focus();
};

const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  inputItem.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;