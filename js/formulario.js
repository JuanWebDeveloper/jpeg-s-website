(function() {

  var formulario = document.formulario_registro,
    elementos = formulario.elements;

    // validando que haya contenido en los input checkbox

    // var validarCheckbox = function(){
    //   var opciones = document.getElementsByName('terminos'),
    //       resultado = false;

    //   for(var i = 0; i < elementos.length; i++){
    //     if (elementos[i].type == "checkbox") {
    //       for(var o = 0; o < opciones.length; o++){
    //         if (opciones[o].checked) {
    //           resultado = true;
    //           break;
    //         }
    //       }
    //       if (resultado == false) {
    //         alert("falto el campo checkbox");
    //         elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
    //         return false;
    //       }else {
    //         elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
    //         return true;
    //       }
    //     }
    //   }
    // };

    // validando que haya contenido en los input radio
    var validarRadios = function(){
      var opciones = document.getElementsByName('sexo'),
          resultado = false;

       for(var i = 0; i < elementos.length; i++){
         if (elementos[i].type == "radio") {
           for(var o = 0; o < opciones.length; o++){
             if (opciones[o].checked) {
               resultado = true;
               break;
             }
           }
           if (resultado == false) {
             alert("falto el campo sexo");
             elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
             return false;
           }else {
             elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
             return true;
           }
         }
       }
    };

      // validando que haya contenido en los input de tipo text, email y password
      var validarInputs = function(){
        for(var i = 0; i <elementos.length; i++){
          if (elementos[i].type == "text" || elementos[i].type =="email" || elementos[i].type == "password") {
            if (elementos[i].value.length == 0) {
              alert("falto completar el campo " + elementos[i].name);
              elementos[i].className = elementos[i].className + " error";
              return false;
            }else {
              elementos[i].className = elementos[i].className.replace(" error", "");
            }
          }
        }
        //comprovando que las contraseñas coincidan
        if (elementos.pass.value !== elementos.pass2.value) {
          elementos.pass.value = "";
          elementos.pass2.value = "";
          elementos.pass.className = elementos.pass.className + " error";
          elementos.pass2.className = elementos.pass2.className + " error";
        }else {
          elementos.pass.className = elementos.pass.className.replace(" error", "");
          elementos.pass2.className = elementos.pass2.className.replace(" error", "");
        }
        return true;
      };

      var focusInput = function(){
        this.parentElement.children[1].className = "label active";
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace(" error", "");
      };

      var blurInput = function(){
        if (this.value <= 0) {
          this.parentElement.children[1].className = "label";
          this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
        }
      };


      for(var i = 0; i < elementos.length; i++){
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password" ) {
          elementos[i].addEventListener("focus", focusInput);
          elementos[i].addEventListener("blur", blurInput);
        }
      }

      var enviar = function(e){
        if (!validarInputs()) {
          console.log("falto validar los input");
          e.preventDefault();
        }else if (!validarRadios()) {
          console.log("falto validar los radio");
          e.preventDefault();
        }else {
          alert("datos enviados correctamente");
        }
      };

      //eventos
      formulario.addEventListener("submit", enviar);
}());
