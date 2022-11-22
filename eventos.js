//eventos-----------------------------
//------------------------------------


//mouseover
//mouseout
//click

//SELECCIONAR ELEMENTOS
let testNum = 0;
let test = document.querySelector("#test");
console.log(test)
test.innerText=`${testNum}`

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");

//PASO DOS

//AGREGAR ESCUCHADOR DE EVENTOS EN LOS ELEMENTOS ANTERIORMENTE SELECCIONADOS

one.addEventListener("mouseover",function(){
    one.textContent = "Mouse esta sobre mi";
});
one.addEventListener("mouseout",function(){
    one.textContent = "Mouse no esta sobre mi";
});
two.addEventListener("click",function(){
    testNum++
    test.innerText=`${testNum}`
});
three.addEventListener("dblclick",function(){
   three.textContent ="Me dieron doble click"
});





