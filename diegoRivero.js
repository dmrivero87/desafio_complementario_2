let edad_ingresada = parseInt( prompt("Sabes cual es mi edad? Ingrese un numero del 1 al 99"));

while (edad_ingresada != 34) {
    if( edad_ingresada >= 1 && edad_ingresada <=12 ){

  edad_ingresada = prompt("No soy un niño, ingresa un numero mayor");
  }
  else if (edad_ingresada >=13 && edad_ingresada <= 18) {
    edad_ingresada = prompt("No soy un adolescente, ingrersa un numero mayor");
  }
  else if ( edad_ingresada >=19 && edad_ingresada <=33 ){
    edad_ingresada = prompt ("Estas cerca, ingresa una edad mayor");
  }
  else if (edad_ingresada >=35 && edad_ingresada <= 49){
    edad_ingresada = prompt ("Estas cerca, ingresa una edad menor");
  }
  else if ( edad_ingresada >= 50 && edad_ingresada <= 99 ){
    edad_ingresada = prompt("Epa!! no soy tan anciano, ingresa una edad menor")
  }
  else{
    edad_ingresada = prompt("Ingresaste un numero incorrecto, Ingresa un numero del 1 al 99")
  }
}

alert("FELICITACIONES! has acertado mi edad!")