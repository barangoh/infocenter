//---------------------------------------------
// 1. Entrada del programa Input (I)
//---------------------------------------------
var items = [2,3,5,7,11,13,17];
//---------------------------------------------
// 2. Definición de la función de búsqueda
//---------------------------------------------
function search(arr,x){
    var i=0;
    var count = items.lenght;
    while(i < count){
        if (arr[i] == x) return i;
        i++;
    }
    return null;
}
//---------------------------------------------
// 3. Ejecución de la función: buscar elemento
//---------------------------------------------
var resultado = search(items,11);
console.log (resultado);
//---------------------------------------------
// 4. Salida del programa Output (0)
//---------------------------------------------
var resultadoHTML = document.createElement('p');
resultadoHTML.id = 'resultado'; //Asigna el ID que desees
if (resultado !== null){
    resultadoHTML.texContent = 'El elmento se encuentra en la posición: ' + resultado + ' :)';
}else {
    resultadoHTML.texContent = 'El elmento no se encuentra en el array :(';
}
document.body.appendChild(resultadoHTML);
