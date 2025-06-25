let formulario_signup= document.getElementById("signup");
let div_signup= document.getElementById("divdatosIngreso");
let input_usuario= document.getElementById("usuario");
let boton_ingreso= document.getElementById("botonIngreso");
let contraseña= document.getElementById("contraseña");
let submit_login= document.getElementById("btn_ingresar");
let interfaz= document.getElementById("interfaz");
let display_signup= document.getElementById("contenedor_del_contenedor_form_signup");
let contenedor_signup= document.getElementById("contenedor_signup");
let contenedor_playlist=document.getElementById("playlist_contenedor");
let playlist_input=document.getElementById("Playlist_input");
let recomendaciones=document.getElementById("recomendados");
let menu_input=document.getElementById("menu_input");
let btn_registrarse= document.getElementById("btn_registarte");
let contenedor_registarse= document.getElementById("contenedor_registarse");
/*------Crear cuentas
*/
btn_registrarse.addEventListener("click", e =>{
    contenedor_signup.classList.add('oculto')
    contenedor_registarse.classList.remove('oculto');
    contenedor_registarse.classList.add("animar-aparicion");

});
input_usuario.addEventListener('keydown', e => {
    if( (e.key === 'Enter') && contraseña.classList.contains('oculto') ) //evento que cuando se presiona enter en el input usuario, aparece el input contraseña y el boton submit
    {
        e.preventDefault();
        contraseña.classList.remove("oculto");
        contraseña.style.display = "block";
        submit_login.classList.remove("oculto");
        submit_login.style.display = "block";
        contraseña.style.marginTop = "10px";
        submit_login.style.marginTop = "10px";
        contraseña.classList.add("animar-aparicion");
        submit_login.classList.add("animar-aparicion");
        contraseña.focus();
    }
    else
    {
        if(e.key === 'Enter')
        {
            e.preventDefault();
            contraseña.focus();
        }
    }
});

//Proceso de login
buscador_sec= document.getElementById("buscador_sec"); //estas no se pueden ocultar (position:fixed), so se tienen que ocultar una por una
cont_reproduciendo= document.getElementById("cont_reproduciendo");

submit_login.addEventListener('click', e => {
    e.preventDefault();
    if(input_usuario.value === "" || contraseña.value === "")
    {
        alert("Por favor, complete todos los campos.");
    }
    else
    {
        //esconder la interfaz del login
        display_signup.classList.add('oculto');
        //Para que aparezca ahora el display de home
        cont_reproduciendo.classList.remove('oculto');
        buscador_sec.classList.remove('oculto');
        interfaz.classList.remove('oculto');
    }
});
const Op = document.querySelectorAll(".animacion_icono");
const indicador = document.querySelector(".indicator");
const labels = document.querySelectorAll(".icono_label");

function moverIndicator(index) {
    const label = labels[index];
    indicador.style.top = (label.offsetTop + label.offsetHeight / 2 - indicador.offsetHeight / 2) + "px";
    indicador.style.left = (label.offsetLeft + label.offsetWidth / 2 - indicador.offsetWidth / 2) + "px";
}
Op.forEach((oP, index) => {
    oP.addEventListener('change', () => {
        moverIndicator(index);
    });
});
playlist_input.addEventListener("input", ()=>{
    recomendaciones.classList.add('oculto');
    contenedor_playlist.classList.remove('oculto')
});
menu_input.addEventListener("input", ()=>{
    recomendaciones.classList.remove('oculto');
    contenedor_playlist.classList.add('oculto');
});