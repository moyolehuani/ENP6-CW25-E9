///////////////////////////////////////////Declaraciones///////////////////////////////////////////
let contenedor_dinamico_biblioteca= document.getElementById('contenedor_dinamico_biblioteca');
let selectArtis= document.getElementById('selectArtis');
/*Funciones*/
function limpiar()
{
    contenedor_dinamico_biblioteca.innerHTML = "";
}
function mostrarArtistas()
{
    baseDatosJSON.artistas.forEach(artista =>
    {
        let div = document.createElement("div");
        div.classList.add('blur');
        div.innerHTML = `
            <h3>${artista.nombre}</h3>
            <button class="btn-artista rep_button">
                <img src="${artista.url_img}" class="elemento">
            </button>
            <p class="descripcion-artista oculto">${artista.descripcion}</p>
        `
        contenedor_dinamico_biblioteca.appendChild(div);
        let btn = div.querySelector(".btn-artista");
        let descripcion = div.querySelector(".descripcion-artista");
        btn.addEventListener("click", () => //evento para 
        {
            descripcion.classList.toggle("oculto");
            descripcion.classList.add('animar-aparicion')
            div.classList.toggle("expandido");
        });
    });
}
function mostrarAlbumes()
{
    baseDatosJSON.album.forEach(album =>
    {
        let div = document.createElement('div');
        div.classList.add('blur');
        div.innerHTML = `
            <h3>${album.nombre}</h3>
            <button class="btn-album rep_button">
                <img src="${album.url_img}" class="elemento">
            </button>
            <p>-${album.artista}-</p>
            <p class="descripcion-album oculto">${album.descripcion}</p>
        `   
        contenedor_dinamico_biblioteca.appendChild(div);
        let btn = div.querySelector(".btn-album");
        let descripcion = div.querySelector(".descripcion-album");
        btn.addEventListener("click", () => 
        {
            descripcion.classList.toggle("oculto");
            descripcion.classList.add('animar-aparicion')
            div.classList.toggle("expandido");
        });
    });
}
function mostrarcanciones()
{
    for(let i=0;i<baseDatosJSON.canciones.length;i++)
    {
        formato_resultado=document.createElement("button");
        formato_resultado.classList.add("estilo_por_resultado_biblio");
        formato_resultado.id = baseDatosJSON.canciones[i].nombre;
        formato_resultado.textContent=`${baseDatosJSON.canciones[i].nombre} - ${baseDatosJSON.canciones[i].artista}`;
        contenedor_dinamico_biblioteca.appendChild(formato_resultado); 
    }
    let butones = contenedor_dinamico_biblioteca.querySelectorAll("button.estilo_por_resultado_biblio");
    butones.forEach(boton => 
    {
        boton.classList.add('glow_crezca');
        boton.addEventListener("click", ()=>
        {
            console.log(boton + "se presiono")
            for(let e=0;e<baseDatosJSON.canciones.length;e++)
            {
                if(boton.id ===baseDatosJSON.canciones[e].nombre)
                {
                    link=baseDatosJSON.canciones[e].link;
                }
            }
            console.log(link);  
            hacer(link);
        });
    });
}
btnArtistas = document.getElementById("selectArtis");
btnAlbumes = document.getElementById("selectAlbumes");
btnCanciones = document.getElementById("selectCanciones");
mostrarArtistas();
btnArtistas.addEventListener("click", ()=>
{
    limpiar();
    mostrarArtistas();
});
btnAlbumes.addEventListener('click', ()=>
{
    limpiar();
    mostrarAlbumes();
});
btnCanciones.addEventListener('click', () =>
{
    limpiar();
    mostrarcanciones();
})