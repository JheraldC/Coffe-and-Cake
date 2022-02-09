var propLightbox = {
  imgContainer: document.getElementsByClassName('lightbox'),
  image: null,
  imageSrc: null,
  cuerpoDom: document.getElementsByTagName('body')[0],
  lightbox_container: null,
  modal: null
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

    propLightbox.lightbox_container.style.width = '100%';
    propLightbox.lightbox_container.style.height = '100%';
    propLightbox.lightbox_container.style.position = 'fixed';
    propLightbox.lightbox_container.style.zIndex = '1000';
    propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
    propLightbox.lightbox_container.style.top = '0';
    propLightbox.lightbox_container.style.left = '0';

    propLightbox.lightbox_container.appendChild(document.createElement('div')).setAttribute('id', 'modal');
    propLightbox.modal = document.getElementById('modal');
    propLightbox.modal.style.height = '100%';
    propLightbox.modal.appendChild(document.createElement('img')).setAttribute('src', propLightbox.imageSrc);
    propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'img-modal');
  }
}

metLightbox.inicio();
