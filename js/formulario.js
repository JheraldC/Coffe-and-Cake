
var propFormulario = {
  formulario: document.getElementsByName('formulario_contacto')[0],
  elementos: document.getElementsByName('formulario_contacto')[0].elements,
  error: null,
  textoError: null,
}

var metFormulario = {
  Inicio: function(){
    for (var i = 0; i < propFormulario.elementos.length; i++) {
      if (propFormulario.elementos[i].type != 'submit') {
        propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
        propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
      }
    }
    propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);
  },
  focusInput: function(){
    this.parentElement.children[1].className = 'label active';
  },
  blurInput: function(){
    if (this.value == '') {
      this.parentElement.children[1].className = 'label';
    }
  },
  validarInputs: function(event){
    for (var i = 0; i < propFormulario.elementos.length; i++) {
      if (propFormulario.elementos[i].value == '') {
        event.preventDefault();
        propFormulario.error = document.createElement('p');
        propFormulario.textoError = document.createTextNode('Por favor, llena el campo con tu '+propFormulario.elementos[i].nodeName);
        propFormulario.error.appendChild(propFormulario.textoError);
      } else {

      }
    }
  }
}

metFormulario.Inicio();
