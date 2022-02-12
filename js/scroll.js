var propScroll = {
  posicion: window.pageYOffset,
  scroll_suave: document.getElementsByClassName('scroll-suave'),
  volver_arriba: document.getElementsByClassName('volver-arriba'),
  destino: null,
  seccion_distancia: null,
  intervalo: null
}

var metScroll = {
  Inicio: function() {
    for (var i = 0; i < propScroll.scroll_suave.length; i++) {
      propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
    }
    for (var i = 0; i < propScroll.volver_arriba.length; i++) {
      propScroll.volver_arriba[i].addEventListener('click', metScroll.subir);
    }
  },
  moverse: function(e) {
    e.preventDefault();
    propScroll.destino = this.getAttribute('href');
    propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop;

    propScroll.posicion = window.pageYOffset;
    propScroll.intervalo = setInterval(function() {
      if (propScroll.posicion < propScroll.seccion_distancia) {
        propScroll.posicion += 10;
      }
      window.scrollTo(0, propScroll.seccion_distancia);
    }, 15);
  },
  subir: function() {

  }
}

metScroll.Inicio();
