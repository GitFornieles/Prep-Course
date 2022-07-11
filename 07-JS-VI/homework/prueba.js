function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    let array2=[];
    array2=array.filter(palabra => palabra[0]==="a")
    return array2;
  }
array=["abajo","pera","escalera","alerta","indice","azteca","arbol","buzo"]
console.log(filter(array))