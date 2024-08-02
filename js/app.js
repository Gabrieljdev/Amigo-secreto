let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    
    if (amigo.value == '') {
        alert('Informe o nome do amigo');
        //não executar e interromper(retornar)
        return;
    } 
     //verificar se o nome ja foi adicionado usamos includes 
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado');
        //não executar e interromper(retornar)
        return;
    }


    let lista = document.getElementById('lista-amigos');
    //adicionar amigos na lista no arrays
    amigos.push(amigo.value);
    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ',' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    // se o tamanho de amigos for menor que 4 ele interrompe
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos');
        return;
    }

   embaralha(amigos);
   let sorteio = document.getElementById('lista-sorteio');
   for (let i = 0; i < amigos.length; i++) {
       if (i == amigos.length - 1) {
           sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
       } else {
           sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
       }
   }
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}