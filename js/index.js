let btnIniciaJogo = document.getElementById('iniciar_jogo');
let btnAddPalavra = document.getElementById('adicionar_palavra');
let btnVoltar = document.getElementById('voltar');
let tabuleiro = document.getElementById('forca').getContext('2d');

// variaveis de lógia
var palavras = [
  'ALURA',
  'FORCA',
  'HTML',
  'ORACLE',
  'JAVASCRIPT',
  'LOGICA',
  'PROGRAMA',
  'DESAFIO',
];

var palavraSecreta = '';
var letras = [];
var palavraCorreta = '';
var erros = 8;
let letrasIncorretas = [];
let numeroDeErros = 8;
let letraEscolhida = [];

document.getElementById('iniciar_jogo').onclick = () => {
  iniciarJogo();
};

//faz o sorteio da palavra
function escolherPalavraSecreta() {
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  palavraSecreta = palavra;
  return palavra;
}

// verifica qual foi a letra clicada
function verificarLetraClicada(key) {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    letras.push(key);
    return false;
  } else {
    letras.push(key);
    return true;
  }
}

function adicionarLetraCorreta(i) {
  palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarLetraIncorreta(letter) {
  if (palavraSecreta.indexOf(letter) <= 0) {
    erros -= 1;
  }
}

function verificarFimDeJogo(letra) {
  //checa se a letra já foi incluída no array de letras certas ou erradas
  if (letraEscolhida.length < palavraSecreta.length) {
    //incluindo as letras já digitadas no array
    letrasIncorretas.push(letra);

    //valida se o usuário cometeu o número máximo de erros, para poder exibir a mesagem de fim de jogo
    if (letrasIncorretas.length > numeroDeErros) {
      exibirDerrota();
    } else if (letraEscolhida.length < palavraSecreta.length) {
      adicionarLetraIncorreta(letra);
      escreverLetraIncorreta(letra, erros);
    }
  }
}

//Verifica se o usuário ganhou
function verificarVencedor(letra) {
  letraEscolhida.push(letra.toUpperCase());
  if (letraEscolhida.length == palavraSecreta.length) {
    exibirVitoria();
  }
}

// impede que teclas como shift e outras sejam escritas
function verificarLetra(keyCode) {
  if (typeof keyCode === 'number' && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}

// faz com que os botões da tela de home desapareçam e mostra a tela de adicionar palavra
function mostrarTelaAdicionarPalavra() {
  document.getElementById('div-desaparece').style.display = 'none';
  document.getElementById('adicionar-palavra').style.display = 'block';
}

//sessão open canvas
//inicia o jogo
function iniciarJogo() {
  // faz com que os botões da tela home desapareçam
  document.getElementById('section__inicio').style.display = 'none';
  document.getElementById('sect__open_canvas').style.display = 'flex';

  //chama a função que desenha o canva
  desenharCanvas();

  //chama a função que sorteia a palavra
  escolherPalavraSecreta();

  //chama a funão que desenha as linhas
  desenharLinhas();
  console.log('Opa opa opa :)');

  // captura a letra digitada
  document.onkeydown = e => {
    // coloca a letra digitada em maiúscula
    let letra = e.key.toUpperCase();
    //verifica si o usuário não perdeu
    if (letrasIncorretas.length <= numeroDeErros) {
      if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
        if (palavraSecreta.includes(letra)) {
          adicionarLetraCorreta(palavraSecreta.indexOf(letra));
          for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
              escreverLetraCorreta(i);
              verificarVencedor(letra);
            }
          }
        }
        // se o usuário cometeu mais erros do que o permitido, chama as funcões
        // que desenham a forca e exibe a mesnagem de fim de jogo
        else {
          if (!verificarLetraClicada(e.key) && !verificarVencedor(letra))
            return;
          desenharForca(erros);
          verificarFimDeJogo(letra);
        }
      }
    } else {
      alert('Você atingiu o limíte de letras incorretas');
      setTimeout(recarregar, 1000);
    }
  };
}

// display adicionar palavras
function adicionarPalavra() {
  document.getElementById('section__inicio').style.display = 'none';
  document.getElementById('sect__novaPalavra').style.display = 'flex';
}

document.getElementById('adicionar_iniciar').onclick = () => {
  salvarPalavra();
};

function salvarPalavra() {
  //captura o que foi digitado
  let novaPalavra = document.getElementById('input_nova_palavra').value;

  // inclui a palavra digitada no array de palavras a serem sorteadas
  if (novaPalavra !== '') {
    palavras.push(novaPalavra.toUpperCase());
    alert('A palavra digitada foi salva');

    // faz a tela de adicionar palavra desaparecer
    document.getElementById('sect__novaPalavra').style.display = 'none';
    iniciarJogo();
  } else {
    alert('Nenhuma palavra foi digitada');
  }
}

btnVoltar.addEventListener('click', function () {
  location.reload();
});
// fim display adiionar palavras
