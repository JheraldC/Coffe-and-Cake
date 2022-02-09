var propSlider = {
  slider: document.getElementById('slider'),
  primerSlider: null,
}

var metSlider = {
  inicio: function(){
    setInterval(metSlider.moverSlide, 3000);
  },
  moverSlide: function(){
    propSlider.slider.style.transition = 'all 1s ease';
  }
}

metSlider.inicio();
