//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeValido = validarEntrada();
    if (nomeValido != undefined) {
        amigos.push(nomeValido);
        visualizarLista();
        limparCampo();
    }
    console.log(amigos);
}

function validarEntrada(){
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo === null || nomeAmigo === undefined || nomeAmigo.trim() === "") {
        alert("Campo vazio ou Inválido! Preencha o campo corretamente.");    
        return undefined;
    } else {
        return nomeAmigo;
    }    
}

function limparCampo() {
    let entrada = document.querySelector("input");
    entrada.value = "";
}


function visualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    let amigo = amigos.map(amigo => amigo).join("<br>");
    listaAmigos.innerHTML = `<li>${amigo}</li>`;
}

function sortearAmigo(){
    const amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let resultadoSorteio = document.getElementById("resultado");
    resultadoSorteio.innerHTML = `O amigo secreto sorteado é: ${amigos[amigoAleatorio]}`;
    console.log(amigos[amigoAleatorio]);
}