var propLightbox = {
  imgContainer: document.getElementsByClassName('lightbox'),
  image: null,
  imageSrc: null,
  cuerpoDom: document.getElementsByTagName('body')[0],
  lightbox_container: null;
}

var metLightbox = {
  inicio: function() {
    for (var i = 0; i < propLightbox.imgContainer.length; i++) {
      propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen)
    }
  },
  capturaImagen: function() {
    propLightbox.image = this;
    metLightbox.lightbox(propLightbox.image);
  },
  lightbox: function(imagen) {
    propLightbox.imageSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5,-2);
    propLightbox.cuerpoDom.appendChild(document.createElement('div')).setAttribute('id', 'lightbox_container');
    propLightbox.lightbox_container = document.getElementById('lightbox_container');
  }
}

metLightbox.inicio();
