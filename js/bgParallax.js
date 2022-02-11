
var propParallx = {

  seccion: document.querySelector('.parallax'),
  recorrido: null,
  limite: null,

}

var metParallx = {

  inicio: function(){
    window.addEventListener('scroll', metParallx.scrollParallax);
  },

  scrollParallax: function(){

  }

}

metParallx.inicio();
