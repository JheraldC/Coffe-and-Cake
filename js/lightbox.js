var propLightbox = {
  imgContainer: document.getElementsByClassName('lightbox'),
  image: null;
}

var metLightbox = {
  inicio: function(){
    for (var i = 0; i < propLightbox.imgContainer.length; i++) {
      propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen)
    }
  },
  capturaImagen: function(){
    propLightbox.image = this;
    metLightbox.lightbox(propLightbox.image);
  },
  lightbox: function(imagen){
    
  }
}
