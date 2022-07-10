function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i=0
  do{
    i=i+1;
    numero = numero + 5;
  }while(i<8);
  return numero;
}
console.log("5 da " + doWhile(5));
console.log("100 da " + doWhile(100));
console.log("-1 da " + doWhile(-1));
