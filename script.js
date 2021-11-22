window.onload = function () {
  const black = document.getElementsByClassName('color');
  black[0].className = 'color selected';
};
function seleciona() {
  const paleta = document.getElementsByClassName('color');
  for (let i = 0; i < paleta.length; i += 1) {
    paleta[i].addEventListener('click', function (event) {
      for (let index = 0; index < paleta.length; index += 1) {
        paleta[index].className = 'color';
      }
      event.target.classList = 'color selected';
    });
  }
}
seleciona();
function colore() {
  const blocos = document.getElementsByClassName('pixel');
  for (let i = 0; i < blocos.length; i += 1) {
    blocos[i].addEventListener('click', function (event) {
      const corselecionada = document.querySelector('.selected');
      event.target.style.backgroundColor = corselecionada.style.backgroundColor;
    });
  }
}
colore();
