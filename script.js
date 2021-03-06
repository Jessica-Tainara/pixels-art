function onloaded() {
  const colors = document.getElementsByClassName('color');
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].setAttribute('style', `background-color: rgb(${
      Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255
    })`);
  }
  colors[0].className = 'color selected';
}
window.onload = onloaded();

function seleciona() {
  const paleta = document.getElementsByClassName('color');
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].addEventListener('click', a);
    function a(event) {
      for (let index = 0; index < paleta.length; index += 1) {
        paleta[index].className = 'color';
      }
      event.target.classList = 'color selected';
    }
  }
}
seleciona();
function colore() {
  const blocos = document.getElementsByClassName('pixel');
  for (let i = 0; i < blocos.length; i += 1) {
    blocos[i].addEventListener('click', b);
    function b(event) {
      const corselecionada = document.querySelector('.selected');
      event.target.style.backgroundColor = corselecionada.style.backgroundColor;
    }
  }
}
colore();
function limpa() {
  const button = document.getElementById('clear-board');
  const blocos = document.getElementsByClassName('pixel');
  button.addEventListener('click', c);
  function c() {
    for (let i = 0; i < blocos.length; i += 1) {
      blocos[i].style.backgroundColor = 'white';
    }
  }
}
limpa();

function boardsize() {
  const caixa = document.getElementById('board-size');
  const botao = document.getElementById('generate-board');
  botao.addEventListener('click', d);
  function d() {
    const number = caixa.value;
    if (number === '') {
      window.alert('Board inválido!');
    }
  }
  caixa.addEventListener('input', f);
  function f() {
    botao.addEventListener('click', e);
    function e() {
      const pixels = document.querySelectorAll('.pixel');
      let number = caixa.value;
      if (number === '') {
        window.alert('Board inválido!');
      } else if (number <= 5) {
        number = 5;
      } else if (number >= 50) {
        number = 50;
      }
      const tamanho = 42 * number;
      let quadro = document.getElementById('pixel-board');
      document.body.removeChild(quadro);
      quadro = document.createElement('div');
      quadro.id = 'pixel-board';
      document.body.appendChild(quadro);
      quadro.setAttribute('style', `width:${tamanho}px`);
      // usei este link para saber como alterar o width da forma que fiz acima :https://qastack.com.br/programming/10118172/setting-div-width-and-height-in-javascript

      for (let key = 0; key < number * number; key += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        quadro.appendChild(pixel);
      }
      colore();
    }
  }
}
boardsize();
