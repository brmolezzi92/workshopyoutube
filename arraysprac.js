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

//AGREGAR ELEMENTOS AL ARRAY
//--------------------------------------
bebidas.push("heineken"); // AGREGA AL FINAL
bebidas.unshift("Pronto shake");// AGREGA AL PRINCIPIO
//------------------------------------

//METODO SPLICE
//Se pueden meter elementos con el primer parametro y la posicion puede ser guardada en una variable.
bebidas.splice(2,0,"fullers");
//------------------------------------
//METODO POP
//ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
let b = bebidas.pop();
console.log(b)

//METODO SHIFT 
//ELIMINA EL PRIMER ELEMENTO DEL ARRAY
// bebidas.shift()

//---------------------------------
//METODO indexOf
console.log(numbers.indexOf(1))
//REALIZA COMPARACION ESTRICA int int string string o devuelve -1 a modo de error.

//METODO INMUTABLE
//METODO slice genera array a partir de grupo de parametros
const bebidas2 = bebidas.slice(0,2);
console.log(bebidas2);

//METODO MUTABLE
//metodo fill
//posicion 1 y 2 cambia por palabra pato
//bebidas.fill("pato",1,3);
//aunque le ponga 15 como posicion final rellena la distancia de tu array. no crea elementos.

//OPERADOR SPREAD

function sum(a,b,c,d,e){
    return a+b+c+d+e
}
console.log(sum(...numbers))









showDom("array1",numbers); // IMPRIMIE EL ARRAY POR COMPLETO EN EL DOM CON UNA FUNCION QUE TOMA 2 PARAMETROS, CONTENEDOR ID ARRAY1 Y NOMBRE DEL ARRAY.
showDom("array2", bebidas);

