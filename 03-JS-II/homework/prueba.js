function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let c=0;
  let array=[];
  do{
    c++;
    if(c===5){continue;}
    array.push(numero=numero+2);
  }while(c<10);
  return array;
}

console.log(continueStatement(50));


