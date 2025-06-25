/*//////Variables para proceso del login/////// */
let formulario_signup= document.getElementById("signup");
let div_signup= document.getElementById("divdatosIngreso");
let input_usuario= document.getElementById("usuario");
let boton_ingreso= document.getElementById("botonIngreso");
let contraseña= document.getElementById("contraseña");
let submit_login= document.getElementById("btn_ingresar");
let display_signup= document.getElementById("contenedor_del_contenedor_form_signup");
let contenedor_signup= document.getElementById("contenedor_signup");

let interfaz= document.getElementById("interfaz"); //interfaz con lo del home y el aside y el reproductor
let contenedor_playlist=document.getElementById("playlist_contenedor");
let playlist_input=document.getElementById("Playlist_input");
let recomendaciones=document.getElementById("recomendados");
let menu_input=document.getElementById("menu_input");
let btn_registrarse= document.getElementById("btn_registarte");
let contenedor_registarse= document.getElementById("contenedor_registarse");
let buscador_sec= document.getElementById("buscador_sec"); //estas como no se pueden ocultar ya que (position:fixed),se tienen que ocultar una por una
let cont_reproduciendo= document.getElementById("cont_reproduciendo");

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/*//////////////////////////////////////////////LOGICA DEL LOGIN/////////////////////////////////////////////////////////////////////// */
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////:)// */
btn_registrarse.addEventListener("click", e =>  // al picar el boton de registrarse, oculta el div de iniciar sesion y aparece el de registro de usuario
{
    contenedor_signup.classList.add('oculto')
    contenedor_registarse.classList.remove('oculto');
    contenedor_registarse.classList.add("animar-aparicion");

});

input_usuario.addEventListener('keydown', e => //evento que cuando se presiona enter en el input usuario, aparece el input contraseña y el boton submit
{
    if( (e.key === 'Enter') && contraseña.classList.contains('oculto') ) // si el evento key detecta la tecla enter
    {
        e.preventDefault();
        contraseña.classList.remove("oculto"); // aparece la contraseña
        contraseña.style.display = "block";
        submit_login.classList.remove("oculto"); // y el input igual
        submit_login.style.display = "block";
        contraseña.style.marginTop = "10px";
        submit_login.style.marginTop = "10px";
        contraseña.classList.add("animar-aparicion"); // se le agregan a ambos animaciones de entrada
        submit_login.classList.add("animar-aparicion");
        contraseña.focus(); // metodo que automaticamente pone para de que ya escribir en el input contraseña
    }
    else
    {
        if(e.key === 'Enter') // si ya contraseña y el boton de submit tienen apariencia, enfoca a contraseña en el caso de que se quiera cambiar el usuario y hacerle enter
        {
            e.preventDefault(); 
            contraseña.focus();
        }
    }
});

//------------------Proceso de login----------------//

//
//AQUI COOKIES DE REGISTRO
///

submit_login.addEventListener('click', e => //*******VALIDAR*******/
{
    e.preventDefault();
    if(input_usuario.value === "" || contraseña.value === "")
    {
        alert("Por favor, complete todos los campos.");
    }
    else
    {   
        //aqui irian las cookies VALIDACION DE EXISTENCIA, y la de USUARIO ACTUAL




        //esconder la interfaz del login
        display_signup.classList.add('oculto');
        //Para que aparezca ahora el display de home con el reproductor, el aside
        cont_reproduciendo.classList.remove('oculto');
        buscador_sec.classList.remove('oculto');
        interfaz.classList.remove('oculto');
    }
});

////////////////////////////////////////Logica de la animacion del aside, barra de interfaces////////////////////////////////////////

const Op = document.querySelectorAll(".animacion_icono");
const indicador = document.querySelector(".indicator");
const labels = document.querySelectorAll(".icono_label");

function moverIndicator(index) // Calcular la posicion del que esta escojido [el current interface es un input tipo radio]
{
    const label = labels[index];
    indicador.style.top = (label.offsetTop + label.offsetHeight / 2 - indicador.offsetHeight / 2) + "px";
    indicador.style.left = (label.offsetLeft + label.offsetWidth / 2 - indicador.offsetWidth / 2) + "px";
}

Op.forEach((oP, index) => 
{
    oP.addEventListener('change', () => //evento tipo change para mover el indicador
    {
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