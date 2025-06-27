let boton_Der=document.getElementById("Derecha");
let boton_Der2=document.getElementById("Derecha2");
let boton_Izq=document.getElementById("Izquierda");
let boton_Izq2=document.getElementById("Izquierda2");
let contiene_artistas=document.getElementById("cont_art_recom");
boton_Der.addEventListener("click", function(){
     console.log("Iván");
    contiene_artistas.scrollBy({
        left: 100,
        behavior: 'smooth'  //Para que se desplace suavemente
     }
    )
})