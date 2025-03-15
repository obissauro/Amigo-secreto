let titulo = document.querySelector('h1');
titulo.innerHTML = 'Amigo Secreto';
var listaAmigos = [];

function adicionarAmigo() {
    var nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, digite o nome do amigo antes de adicionar.');
        return;
    }
    
    // Adiciona o nome ao array
    listaAmigos.push(nomeAmigo);
    
    // Limpa o campo de texto após adicionar
    document.getElementById('amigo').value = '';

    console.log(listaAmigos);
    
    // Atualiza a exibição na página
    exibirListaAmigos();
}
function exibirListaAmigos() {
    // Seleciona o elemento onde a lista será exibida
    var listaElement = document.getElementById('lista-amigos');
    
    // Limpa a lista atual
    listaElement.innerHTML = '';

    // Adiciona cada amigo à lista na página
    for (var i = 0; i < listaAmigos.length; i++) {
        var amigoItem = document.createElement('li');
        amigoItem.textContent = listaAmigos[i];
        listaElement.appendChild(amigoItem);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        console.log('Nenhum amigo para sortear!');
        return; // Sai da função se não houver amigos
    }

    // Gera um índice aleatório
    var indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    // Seleciona o amigo sorteado
    var amigoSorteado = listaAmigos[indiceAleatorio];
    
    // Exibe o amigo sorteado no console (apenas para verificar)
    console.log('Amigo sorteado:', amigoSorteado);
    
    // Atualiza a lista de resultados na página
    exibirResultado(amigoSorteado);
    
    // Remove o amigo sorteado da lista
    listaAmigos.splice(indiceAleatorio, 1);
    
    // Atualiza a exibição da lista de amigos na página
    exibirListaAmigos();
}

function exibirResultado(amigo) {
    // Seleciona o elemento onde o resultado será exibido
    var resultadoElement = document.getElementById('resultado');
    
    // Limpa o resultado anterior
    resultadoElement.innerHTML = '';

    
    var resultadoItem = document.createElement('li');
    resultadoItem.textContent = 'Seu amigo secreto é: ' + amigo; // Adiciona a mensagem antes do nome
    resultadoElement.appendChild(resultadoItem);
}