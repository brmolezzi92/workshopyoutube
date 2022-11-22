
//function con return para tomar como parametro para un if

function inputLength(){
    return input.value.length;
}
function createListElement(){
    let li = document.createElement("li");
    console.log(input.value)
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value="";
}



//declarando selectores


let button = document.querySelector("#btn-agregar");
let input = document.querySelector("#nueva-actividad");
let ul = document.querySelector("ul");
//agregando escuchador de eventos y funcion anonima con la accion cuando se haga click
button.addEventListener("click", function(){
if(inputLength()){
    createListElement();
}
});

input.addEventListener("keypress", function(e){
   if(inputLength() > 0 && e.keyCode == 13){
    createListElement();
   }
});

