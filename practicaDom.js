// //document.


//// getElementsByTagName()
// //obtener estructura por etiqueta. 
// // Devuelve por consola todos los h1
// let a = document.getElementsByTagName("h1");
// //accediendo al contenido del primer h1 que absorbe la variable a.
// console.log(a[0].innerText);

//------------------------
// getElementsByClassName()
// let a = document.getElementsByClassName("myClass");
// //Si hay mas elementos con la clase "myClass" devuelve la coleccion de estructuras con estra clase como html colection
// console.log(a)


//-------------------------
//se explica solo el uso bruno!
// getElementById()
//si hay 2 elementos con el mismo id toma el primero del documento. UNICO ID
// let a = document.getElementById("myId");
// console.log(a)


//-------------------------
//querySelector()
//"#Id" ".clase" "Tag" 
// let a = document.querySelector("#myId")
// console.log(a.getAttribute("href"))


//-------------------------
// querySelectorall()
// let a = document.querySelectorAll(".myClass");
// console.log(a[0].innerText);



//-------------------------
// getAttribute()

//Necesita tener los elementos linkeados en alguna variable 
// let a = document.querySelector("#myId")
// console.log(a.getAttribute("href"))
//devuelve el contenido 
let b = document.getElementsByClassName("tagA");
console.log(b)
b.setAttribute("href", "https://youtube.com");
console.log(b.getAttribute())
//-------------------------
// setAttribute()

