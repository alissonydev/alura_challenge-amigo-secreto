//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.3
let amigos = [];

function adicionarAmigo() {  
  
  let amigo = document.getElementById('amigo').value;    

  if (amigo.trim() === '') {
    alert('Por favor digite um nome.');
    return;
  } 

  if (amigos.includes(amigo)) {
    alert('Esse nome já consta na lista.');
    amigo.value = '';
    return;
  }

  amigos.push(amigo);
  document.querySelector('#amigo').value = '';     
  mostrarListaAmigos();
}

function mostrarListaAmigos() {
  let listaAmigos = document.querySelector('#listaAmigos');
  listaAmigos.innerHTML = '';
    
  for(let i = 0; i < amigos.length; i++) {      
    let amigo = amigos[i];

    let listaHTML = document.createElement('li');
    listaHTML.textContent = amigo;
    listaAmigos.appendChild(listaHTML);
  }
}