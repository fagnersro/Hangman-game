function desenharCanvas() {
  tabuleiro.lineWidth = 8;
  tabuleiro.lineCap = 'round';
  tabuleiro.lineJoin = 'round';
  tabuleiro.fillStyle = '#FFFFFF';
  tabuleiro.strokeStyle = '#000000';
  tabuleiro.fillRect(0, 0, 800, 500);
  tabuleiro.beginPath();
  // tablero.moveTo(200, 400);
  // tablero.lineTo(500, 400);
  tabuleiro.stroke();
  tabuleiro.closePath();
}

function desenharLinhas() {
  tabuleiro.lineWidth = 6;
  tabuleiro.lineCap = 'round';
  tabuleiro.lineJoin = 'round';
  tabuleiro.strokeStyle = '#000000';
  tabuleiro.beginPath();
  let largura = 600 / palavraSecreta.length;
  for (let i = 0; i < palavraSecreta.length; i++) {
    tabuleiro.moveTo(135 + largura * i, 400);
    tabuleiro.lineTo(175 + largura * i, 400);
  }
  tabuleiro.stroke();
  tabuleiro.closePath();
}

function desenharLinhas2() {
  tabuleiro.lineWidth = 6;
  tabuleiro.lineCap = 'round';
  tabuleiro.lineJoin = 'round';
  tabuleiro.strokeStyle = '#000000';
  tabuleiro.beginPath();
  let largura = 600 / palavraSecreta.length;
  for (let i = 0; i < palavraSecreta.length; i++) {
    tabuleiro.moveTo(135 + largura * i, 400);
    tabuleiro.lineTo(175 + largura * i, 400);
  }
  tabuleiro.stroke();
  tabuleiro.closePath();
}

function escreverLetraCorreta(index) {
  tabuleiro.font = 'bold 52px Coming Soon, cursive';
  tabuleiro.lineWidth = 6;
  tabuleiro.lineCap = 'round';
  tabuleiro.lineJoin = 'round';
  tabuleiro.fillStyle = '#000000';
  let largura = 600 / palavraSecreta.length;
  tabuleiro.fillText(palavraSecreta[index], 135 + largura * index, 390);
  tabuleiro.stroke();
}

function escreverLetraIncorreta(letra, errorsLeft) {
  tabuleiro.lineWidth = 6;
  tabuleiro.font = 'bold 40px Coming Soon, cursive';
  tabuleiro.lineCap = 'round';
  tabuleiro.lineJoin = 'round';
  tabuleiro.fillStyle = '#000000';
  tabuleiro.fillText(letra, 135 + 40 * (10 - errorsLeft), 450, 40);
}

function desenharForca(pontos) {
  tabuleiro.lineWidth = 8;
  tabuleiro.lineCap = 'round';
  tabuleiro.lineJoin = 'round';
  tabuleiro.strokeStyle = '#0A3871';
  if (pontos === 8) {
    //poste lateral

    let forca = new Image();
    forca.src = './assets.gamming/forcaa.png';
    forca.addEventListener('load', () => {
      tabuleiro.drawImage(forca, 290, 0, 200, 350);
    });
  }
  if (pontos === 7) {
    //teto

    let cabeca = new Image();
    cabeca.src = './assets/gamming/cabeca.png';
    cabeca.addEventListener('load', () => {
      tabuleiro.drawImage(cabeca, 407, 78, 50, 50);
    });
  }
  if (pontos === 6) {
    //corda
    let corpo = new Image();
    corpo.src = './assets/gamming/corpo2.png';
    corpo.addEventListener('load', () => {
      tabuleiro.drawImage(corpo, 395, 126, 70, 70);
    });
  }
  if (pontos === 5) {
    //para cara
    let mesquerda = new Image();
    mesquerda.src = './assets/gamming/maophone2.png';
    mesquerda.addEventListener('load', () => {
      tabuleiro.drawImage(mesquerda, 357, 80, 50, 70);
    });
  }
  if (pontos === 4) {
    //para corpo
    let medireita = new Image();
    medireita.src = './assets/gamming/maoprancheta.png';
    medireita.addEventListener('load', () => {
      tabuleiro.drawImage(medireita, 460, 135, 50, 70);
    });
  }
  if (pontos === 3) {
    //para perna esquerda
    let cintura = new Image();
    cintura.src = './assets/gamming/cintura.png';
    cintura.addEventListener('load', () => {
      tabuleiro.drawImage(cintura, 413, 187, 50, 20);
    });
  }
  if (pontos === 2) {
    //para perna direita
    let pernaesquerda = new Image();
    pernaesquerda.src = './assets/gamming/pernaesquerda.png';
    pernaesquerda.addEventListener('load', () => {
      tabuleiro.drawImage(pernaesquerda, 387, 195, 50, 80);
    });
  }
  if (pontos === 1) {
    //para mão izquerda
    let pernadireita = new Image();
    pernadireita.src = './assets/gamming/pernadireita.png';
    pernadireita.addEventListener('load', () => {
      tabuleiro.drawImage(pernadireita, 445, 195, 50, 80);
    });
  }
  if (pontos === 0) {
    //para mão direita
    // tabuleiro.moveTo(850, 330);
    // tabuleiro.lineTo(890, 389);
  }
  tabuleiro.stroke();
  tabuleiro.closePath();
}

function exibirDerrota() {
  tabuleiro.font = ' bold 42px Coming Soon, cursive';
  tabuleiro.lineWidth = 6;
  tabuleiro.lineCap = 'round';
  tabuleiro.lineJoin = 'round';
  tabuleiro.fillStyle = 'red';
  tabuleiro.fillText('Fim de jogo!', 525, 120);
}

function exibirVitoria() {
  tabuleiro.font = 'bold 42px Coming Soon, cursive';
  tabuleiro.lineWidth = 6;
  tabuleiro.lineCap = 'round';
  tabuleiro.lineJoin = 'round';
  tabuleiro.fillStyle = 'green';
  tabuleiro.fillText('Ganhou,', 100, 120);
  tabuleiro.fillText('Parabéns!', 100, 160);
  setTimeout(recarregar, 1000);
}

function recarregar() {
  location.reload();
}
