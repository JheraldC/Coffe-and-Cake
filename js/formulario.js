
var propFormulario = {
  formulario: document.getElementsByName('formulario_contacto')[0],
  elementos: document.getElementsByName('formulario_contacto')[0].elements,

}

var metFormulario = {
  Inicio: function(){
    for (var i = 0; i < propFormulario.elementos.length; i++) {
      if (propFormulario.elementos[i].type != 'submit') {
        propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
        propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
      }
    }
  },
  focusInput: function(){
    
  },
  blurInput: function(){

  }
}

metFormulario.Inicio();
