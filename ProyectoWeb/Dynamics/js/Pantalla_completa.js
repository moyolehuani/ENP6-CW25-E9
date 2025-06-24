let boton=document.getElementById("despliega");
let barra_izq=document.getElementsByClassName("barra"); //esto es un arreglo de un sólo elemento
let verifica=null;

boton.addEventListener("click", ()=>{
    
    if(verifica==null)
    {
        barra_izq[0].classList.add("normal");
        barra_izq[0].classList.remove("compacto");
        verifica=1;

    }
    else
    {
        barra_izq[0].classList.add("compacto");
        barra_izq[0].classList.remove("normal");
        verifica=null;

    }
    
});