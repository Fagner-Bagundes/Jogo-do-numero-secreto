let listaDeNumerosSorteados = [];
let numeroLimite = 15;
let numeroSecreto = gerarNumeroAleatorio();
let numeroDeTentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, `Brazilian Portuguese Female`, {rate:1.2})
};

function exibirMensagemInicial(){
    exibirTextoNaTela(`h1`, `Jogo do número secreto`);
    exibirTextoNaTela(`p`, `Escolha um número entre 1 e 15`);

}

function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolido;
        
    };
};


function verificarChute() {
    let chute = document.querySelector(`input`).value


   if (chute == numeroSecreto) {
    exibirTextoNaTela(`h1`, `Acertou!!`);
    let palavraTentativa = numeroDeTentativas > 1 ? `tentativas` : `tentativa`;
    let mensagemTentativas = `Você descobriu o Número secreto com ${numeroDeTentativas} ${palavraTentativa}`;
    exibirTextoNaTela(`p`, ` ${mensagemTentativas}`);

    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
   } else {
    if (chute < numeroSecreto) {
        exibirTextoNaTela(`p`, `O número secreto é maior que ${chute}`);
    } else {
        exibirTextoNaTela(`p`, `O número secreto é menor que ${chute}`);
    }
    numeroDeTentativas++
    limparCampo();
   };
};

   function limparCampo(){
    chute = document.querySelector(`input`);
    chute.value = ``;
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



