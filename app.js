//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.3
let amigos = [];
let resultadoHTML = '';
const digiteNomeMSG = 'Por favor digite um nome.';

function adicionarAmigo() {  
  
  let amigo = document.getElementById('amigo').value;
  resultadoHTML.innerHTML = '';

  if (amigo.trim() === '') {
    alert(digiteNomeMSG);
    return;
  } 

  if (amigos.includes(amigo)) {
    alert('Esse nome já consta na lista.');
    document.querySelector('#amigo').value = ''; 
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

function sortearAmigo() {
  let qtdAmigos = amigos.length;
  if (qtdAmigos === 0) {
    alert(digiteNomeMSG);
  } else {
    let indiceAmigo = Math.floor(Math.random() * qtdAmigos);
    resultadoHTML = document.querySelector('#resultado');
    listaAmigos.innerHTML = '';
    resultadoHTML.innerHTML = `O amigo secreto sorteado é: ${amigos[indiceAmigo]}` ;
  }
}