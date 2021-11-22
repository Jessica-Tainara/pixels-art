window.onload = function() {
  let black = document.getElementsByClassName('color')
  black[0].className= 'color selected'
}
function seleciona (){
  let paleta = document.getElementsByClassName('color')
  for (let i=0; i<paleta.length; i+=1){ 
    paleta[i].addEventListener('click',function(event){
        for(let index=0; index<paleta.length; index+=1){
            paleta[index].className = 'color'
        }
        event.target.classList = 'color selected'
    })
  }

}
seleciona();