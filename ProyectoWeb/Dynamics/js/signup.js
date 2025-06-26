const temas = {
Gael: 
{
    '--color-glow': '#ffffffe3',
    '--color-texto': '#ffffff',
    '--color-texto_nollamativo': '#c5c5c5',
    '--color-fondo': '#202020',
    '--color-blur': '#c5c5c533',
    '--color-barra': '#303030',
    '--color-icono-aside': '#ffffff88',
    '--color-indicador': '#221f1fbf',
    '--color-borde-indicador': '#0303031c',
    '--color-buscador': '#5a5a5ab6',
    '--color-resultado-busqueda-hover': '#505050',
    '--color-resultado-busqueda': '#303030b0',
    '--color-resultado-busqueda-placehover':'#727272',
    '--color-reproductor': '#b0afaf27',
    '--color-icon-reproductor': '#c5c5c5',
    '--color-reproduciendo-back-next-play-stop': '#202020b8'
 },
  Ari: 
  {
    '--color-glow': '#d2b4e2e3',
    '--color-texto': '#efc9ce',
    '--color-texto_nollamativo': '#ffffffaa',
    '--color-fondo': '#9b7171',
    '--color-blur': '#987d9b7b',
    '--color-barra': '#624e5fc3',
    '--color-icono-aside': '#ffffff5c',
    '--color-indicador': 'rgba(63, 47, 47, 0.204)',
    '--color-borde-indicador': '#6d31838c',
    '--color-buscador': '#875663b6',
    '--color-resultado-busqueda-hover': '#ffffff',
    '--color-resultado-busqueda': '#988484b0',
    '--color-resultado-busqueda-placehover': '#eaa5a58b',
    '--color-reproductor': '#b19d9d27',
    '--color-icon-reproductor': '#d1a8a8d2',
    '--color-reproduciendo-back-next-play-stop': '#805365b8'
  },
  Mich:
  {
    '--color-glow': '#f2f2f2e3',
    '--color-texto': '#242424',
    '--color-texto_nollamativo': '#ffffffaa',
    '--color-fondo': '#dadada',
    '--color-blur': '#440d2c7b',
    '--color-barra': '#1a1a2ffb',
    '--color-icono-aside': '#ffffffbe',
    '--color-indicador': '#b82165b6',
    '--color-borde-indicador': '#ffffff8c',
    '--color-buscador': '#424250b6',
    '--color-resultado-busqueda-hover': '#ffffff',
    '--color-resultado-busqueda': '#988484b0',
    '--color-resultado-busqueda-placehover': '#ffffff85',
    '--color-reproductor': '#00000027',
    '--color-icon-reproductor': '#ffffffd5',
    '--color-reproduciendo-back-next-play-stop': '#424250b6'
  },
  Brau: 
  {
  '--color-glow': '#6f7650e3',
  '--color-texto': '#101010',
  '--color-texto_nollamativo': '#ffffffaa',
  '--color-fondo': '#23422c71',
  '--color-blur': '#00000052',
  '--color-barra': '#b3ada4fb',
  '--color-icono-aside': '#3c3f2dbf',
  '--color-indicador': '#cfd28be0',
  '--color-borde-indicador': '#0000002c',
  '--color-buscador': '#8a8b78b6',
  '--color-resultado-busqueda-hover': '#ffffff',
  '--color-resultado-busqueda': '#adbaa5b0',
  '--color-resultado-busqueda-placehover': '#ffffffb0',
  '--color-reproductor': '#ffffff27',
  '--color-icon-reproductor': '#000000d5',
  '--color-reproduciendo-back-next-play-stop': '#504a42b6'
  },  
  Ivan: {
    '--color-glow': '#ffffffe3',
    '--color-texto': '#ffffffca',
    '--color-texto_nollamativo': '#ffffffaa',
    '--color-fondo': '#0a120f',
    '--color-blur': '#ffffff46',
    '--color-barra': '#1a3f3dfb',
    '--color-icono-aside': '#ffffff80',
    '--color-indicador': '#23493b37',
    '--color-borde-indicador': '#0000002c',
    '--color-buscador': '#ffffff5e',
    '--color-resultado-busqueda-hover': '#ffffff',
    '--color-resultado-busqueda': '#336058b0',
    '--color-resultado-busqueda-placehover': '#ffffffb0',
    '--color-reproductor': '#73d0ba27',
    '--color-icon-reproductor': '#ffffff87',
    '--color-reproduciendo-back-next-play-stop': '#14342cb6'
  },
  Dante:
  {
  '--color-glow': '#5900ff',
  '--color-texto': '#006eff',
  '--color-texto_nollamativo': '#00fbffaa',
  '--color-fondo': '#000000',
  '--color-blur': '#7b00ff94',
  '--color-barra': '#ff0000fb',
  '--color-icono-aside': '#8c00ff',
  '--color-indicador': '#e5df36',
  '--color-borde-indicador': '#0000002c',
  '--color-buscador': '#f34e4eb5',
  '--color-resultado-busqueda-hover': '#ffffff',
  '--color-resultado-busqueda': '#ffeb12df',
  '--color-resultado-busqueda-placehover': '#00aaff',
  '--color-reproductor': '#fff70071',
  '--color-icon-reproductor': '#8c00ff',
  '--color-reproduciendo-back-next-play-stop': '#504a42b6'
  }
};
/*//////Variables para proceso del login/////// */
let formulario_signup= document.getElementById("signup");
let div_signup= document.getElementById("divdatosIngreso");
let input_usuario= document.getElementById("usuario");
let boton_ingreso= document.getElementById("botonIngreso");
let contraseña= document.getElementById("contraseña");
let submit_login= document.getElementById("btn_ingresar");
let display_signup= document.getElementById("contenedor_del_contenedor_form_signup");
let contenedor_signup= document.getElementById("contenedor_signup");
let añadir_playlistBtn=document.getElementById("añadir_playlistBtn");
let quitar_crear_playlistBtn=document.getElementById("quitar_crear_playlistBtn");
let crear_playlist=document.getElementById("crear_playlist");

let interfaz= document.getElementById("interfaz"); //interfaz con lo del home y el aside y el reproductor
let contenedor_playlist=document.getElementById("playlist_contenedor");
let playlist_input=document.getElementById("Playlist_input");
let contenedor_Biblioteca=document.getElementById("Biblioteca_contenedor");
let Biblioteca_input=document.getElementById("Biblioteca_input");
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

/*

submit_login.addEventListener('click', e => //*******VALIDAR*******/
/*
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
}); */

////////////////////////////////////////Lógica de la animación del aside, barra de interfaces////////////////////////////////////////

const Op = document.querySelectorAll(".animacion_icono");
const indicador = document.querySelector(".indicator");
const labels = document.querySelectorAll(".icono_label");

function moverIndicator(index) // Calcular la posición del que esta escogido [el current interface es un input tipo radio]
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
    contenedor_Biblioteca.classList.add('oculto');
});
menu_input.addEventListener("input", ()=>{
    recomendaciones.classList.remove('oculto');
    contenedor_playlist.classList.add('oculto');
    contenedor_Biblioteca.classList.add('oculto');
});
/*Cambia de recomedaciones a biblioteca y viceversa*/
Biblioteca_input.addEventListener("input",()=>{
    recomendaciones.classList.add('oculto');
    contenedor_playlist.classList.add('oculto')
    contenedor_Biblioteca.classList.remove('oculto');
})

///////////////////Lógica settings y cierre de sesión/////////////////////////////
contenedor_op_confi= document.getElementById("contenedor_op_confi");
Configuracion_btn= document.getElementById("Configuracion_btn");
Configuracion_btn= document.getElementById("Configuracion_btn");
Cuenta_btn= document.getElementById('Cuenta');
function aparecer_contendor(contenedor)
{
    contenedor.classList.remove("oculto");
    contenedor.classList.add("animar-aparicion");
    contenedor.classList.add("desvanecido_out");
}
function desaparecer_contenedor(contenedor)
{
    contenedor.style.opacity = "0";
    setTimeout(() => 
    {
       contenedor.classList.add("oculto");
       contenedor.classList.remove("animar-aparicion");
       contenedor.style.opacity = ""
    }, 1000);
}
function esta_el_otro_pregunta(contenedorevento, otrocontenedor)
{
    if(!otrocontenedor.classList.contains("oculto"))
    {
        desaparecer_contenedor(otrocontenedor);
        aparecer_contendor(contenedorevento);
    }
    else
    {
        desaparecer_contenedor(contenedorevento);
    }
}
Configuracion_btn.addEventListener("click", e =>
{
    if(contenedor_op_confi.classList.contains("oculto") && contenedor_op_account.classList.contains('oculto'))
    {
        aparecer_contendor(contenedor_op_confi);
    }
    else
    {
        esta_el_otro_pregunta(contenedor_op_confi, contenedor_op_account);
    }
});
Cuenta_btn.addEventListener("click", e =>
{
    if(contenedor_op_confi.classList.contains("oculto") && contenedor_op_account.classList.contains('oculto'))
    {
        aparecer_contendor(contenedor_op_account);
    }
    else
    {
        esta_el_otro_pregunta(contenedor_op_account,contenedor_op_confi);
    }
});
///////////////////////Evento cambiar de temas///////////////////////
const seleccion_tema = document.getElementById('seleccion_tema');

function elegirTema(TemaElegido) {
  let tema = temas[TemaElegido];
  if (!tema) return;
  for (const variable in tema) {
    document.documentElement.style.setProperty(variable, tema[variable]);
  }
}

seleccion_tema.addEventListener("change", function () {
  let temaElegido = this.value;
  elegirTema(temaElegido);
  console.log(this.value);
});

//Crear y quitar playlist
añadir_playlistBtn.addEventListener("click", ()=>{
    crear_playlist.classList.remove("oculto");
    for(let i=0;i<baseDatosJSON.canciones.length;i++)
    {
        if(baseDatosJSON.canciones[i].nombre.includes(texto))
        {
            formato_resultado=document.createElement("button");
            formato_resultado.classList.add("estilo_por_resultado");
            formato_resultado.id = "cancion_" + baseDatosJSON.canciones[i].nombre;
            formato_resultado.textContent=baseDatosJSON.canciones[i].nombre;
            pi.appendChild(formato_resultado); 
        }
    }
});
quitar_crear_playlistBtn.addEventListener("click", ()=>{
    crear_playlist.classList.add("oculto");
});


