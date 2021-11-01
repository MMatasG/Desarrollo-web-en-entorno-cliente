function potencia(base, exponente){
    if(exponente == 0){
      return 1;
    }
    else{
      return base * potencia(base, exponente - 1);
    }
  }
 
  var base = 3;
  var exponente = 4;
  
  document.write(base + " elevado a " + exponente + " es " + potencia(base, exponente));