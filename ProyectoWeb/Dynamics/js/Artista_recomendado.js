let boton_Der=document.getElementById("Derecha");
let boton_Der2=document.getElementById("Derecha2");
let boton_Izq=document.getElementById("Izquierda");
let boton_Izq2=document.getElementById("Izquierda2");
let contiene_artistas=document.getElementById("contiene_artistas");
let contiene_album=document.getElementById("contiene_album");
boton_Der.addEventListener("click", function(){
     console.log("Iván");
        contiene_artistas.scrollBy({
        left: 100,
        behavior: 'smooth',  //Para que se desplace suavemente
     }
    )
});

boton_Izq.addEventListener("click", function(){
     console.log("Iván");
        contiene_artistas.scrollBy({
        left: -100,
        behavior: 'smooth',  //Para que se desplace suavemente
     }
    )
});

boton_Der2.addEventListener("click", function(){
     console.log("Prueba");
        contiene_album.scrollBy({
        left: 100,
        behavior: 'smooth',  //Para que se desplace suavemente
     }
    )
});

boton_Izq2.addEventListener("click", function(){
     console.log("Prueba");
        contiene_album.scrollBy({
        left: -100,
        behavior: 'smooth',  //Para que se desplace suavemente
     }
    )
});