const numbers = [1,2,3,4,5];
const bebidas = ["cerveza","fernet","cocacola"];
//length length length length length
//longitud total del array
// console.log(numbers.length);
//posicion especifica
// console.log(numbers[0]);
//FUNCION PARA IMPRIMIR ARRAYS
//console.log(arr.at(-1)) at.() sirve para poner valores en negativos y empezar de atras hacia adelante -- (o reverse() y recorrer normal)
function show(arr){
    for (i = 0 ; i<arr.length ; i++ ){
        console.log(arr[i])
    }
}
console.log(show(numbers));
console.log(show(bebidas));

function showDom(element, arr){
    document.getElementById(element).innerHTML = "";
    for (i = 0 ; i<arr.length ; i++ ){
        document.getElementById(element).innerHTML += `
        <div>${arr[i]}</div>
        `;
    }
}

showDom("array1",numbers); // IMPRIMIE EL ARRAY POR COMPLETO EN EL DOM CON UNA FUNCION QUE TOMA 2 PARAMETROS, CONTENEDOR ID ARRAY1 Y NOMBRE DEL ARRAY.

showDom("array2", bebidas);
