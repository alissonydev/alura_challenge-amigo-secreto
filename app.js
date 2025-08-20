//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.3
let amigos = [];

function adicionarAmigo() {  

  //let amigo = document.querySelector('input').value; 
  let amigo = document.getElementById('amigo').value;

  if (amigo == '') {
    alert('Por favor, digite um nome.')
  } else {
    amigos.push(amigo);
    document.getElementById('amigo').value = '';
    alert(amigos);    
  }

}
