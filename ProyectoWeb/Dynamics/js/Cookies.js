///////////////////////////////////////////////////////////////////////////
//variables
let form_inicio_sesion=document.getElementById("signup"); //es el formulario de inicio de sesión
let envia_sesion=document.getElementById("btn_ingresar");
let usuario_puesto;
let contrasena_puesta;
let cookie_formada;
let verifica_coincidencia;
let formulario_registro=document.getElementById("registrarse_form");
let usuario_creado;
let contrasena_creada;
let arreglo_usuarios;
let usuarios_creados;
let input_usuario_creado=document.getElementById("usuario_nuevo");
let input_contrasena_creada=document.getElementById("contrasena_del_usuario_nuevo");
let usuarios={};
/*contenedores*/
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////Declaracion de funciones
/*configurar cookie*/
function setCookie(nombre, valor, dias){
    let date = new Date();
    date.setTime(date.getTime() + (dias*24*60*60*1000));
    expiracion =date.toGMTString();
    document.cookie = `${nombre}=${valor}; expires=${expiracion}`;
}
/*Obtener cookie*/
function getCookie(nombre){
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for(let i=0 ; i<cookies.length; i++)
    {
        let galleta = cookies[i].trim();
        if(galleta.indexOf(nombre + "=") === 0)
        {
            return galleta.slice(nombre.length +1);
        }
    }
    return null;
}
/*Delete cookie */
function deleteCookie(nombre){
    setCookie(nombre, "", -1);
}
/*Establecer las cookies como arreglo*/
function obtenerCookiesComoArreglo() 
{
    let arreglo = document.cookie.split(";");
    for (let i = 0; i < arreglo.length; i++) 
    {
        arreglo[i] = arreglo[i].trim();
    }
    return arreglo;
}
////////////////////////////
//FUNCIONES DE ANIMACION
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
////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////REGISTRAR USUARIO//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
formulario_registro.addEventListener("submit", function(e) //Evento que registra a un nuevo usuario
{
    e.preventDefault();
    usuario_creado=input_usuario_creado.value; //guarda el valor del usuario 
    contrasena_creada=input_contrasena_creada.value; //y la contraseña que ingresó para la creación de la cuenta
    input_usuario_creado.value="";
    input_contrasena_creada.value="";
    console.log(usuario_creado +"= usuario creado");
    console.log(contrasena_creada + "= contra creada");
    
    setCookie(usuario_creado, contrasena_creada, 1000); // cookie perpetua

    //Crea el arreglo para cada usuarui
    let arregloUsuario = [];
    setCookie(usuario_creado+"_are",JSON.stringify(arregloUsuario), 1000);
    console.log(document.cookie);
    //Desaparecer contenedor
    desaparecer_contenedor(contenedor_registarse);
    aparecer_contendor(contenedor_signup);
    console.log(document.cookie + "estas son las cookies");//lo anterior es una pequeña comprobación de que todo salió bien
    //se crea la cookie de la cuenta
});
//////////////////////////////////////////////////////////////////////////////////
//////////////////Comprobación de información al iniciar sesión///////////////////
//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Eventos
//-//
envia_sesion.addEventListener("click", function(event) // Evento detecta cuando se le da click al btn submit del inicio de sesion
{
    arreglo_usuarios = obtenerCookiesComoArreglo();
    let coincidencia = false;
    //guardar valores input inicio de sesion, usuario y contraseña
    usuario_puesto=document.getElementById("usuario").value.trim();
    contrasena_puesta=document.getElementById("contraseña").value.trim();
    /////////////////////////////////////////////////////////////////////
    input_formado=`${usuario_puesto}=${contrasena_puesta}`; //no poner _I, porque sólo compara después
    /////////////////Verificar que los inputs si entren
    console.log(usuario_puesto);
    console.log(contrasena_puesta);
    //////////////////////////////////////////////////
    for(let a=0; a<arreglo_usuarios.length; a++)
    {
        verifica_coincidencia=arreglo_usuarios[a].includes(input_formado); //esto devuelve verdadero o falso
        //si no hay coincidenci en el elemento actual, será falso
        console.log("la coincidencia de lo ingresado y la cookie es =" + verifica_coincidencia);
        ////////////////////// If verificacion de coincidencia///////////////////////////
        if(verifica_coincidencia)
        {
            event.preventDefault();
            coincidencia = true;
            console.log("correcto");
            //////////////////////////////////////ESCONDER DISPLAY LOGIN Y MOSTRAR INTERFAZ DE LA APP/////////////////////////////////////////////////
            display_signup.classList.add('oculto'); //esconder la interfaz del login
            cont_reproduciendo.classList.remove('oculto'); //Para que aparezca ahora el display de home con el reproductor, el aside
            buscador_sec.classList.remove('oculto');
            interfaz.classList.remove('oculto'); 
            ////////////////////////////////////////////////////////////////////////////////////////
            setCookie("ACTUAL", usuario_puesto, 10000);

            break; //detiene la ejecución del for cuando ya se inicia sesión//esto evita el resto de las alertas por los demás elementos
        }
    }
    if(!coincidencia)
    {
        event.preventDefault();
        alert("EL usuario o la contraseña es incorrecta")
    }
});
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
////////////////////////////INICIO DE SESION AUTOMATICO///////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", ()=>
{
    let Usuario_actual = getCookie("ACTUAL");
    if(Usuario_actual !== null)
    {
        contra = getCookie(Usuario_actual);
        if(contra)
        {
            console.log("Inicio automatico con" + Usuario_actual)
            //////////////////////////////////////ESCONDER DISPLAY LOGIN Y MOSTRAR INTERFAZ DE LA APP/////////////////////////////////////////////////
            display_signup.classList.add('oculto'); //esconder la interfaz del login
            cont_reproduciendo.classList.remove('oculto'); //Para que aparezca ahora el display de home con el reproductor, el aside
            buscador_sec.classList.remove('oculto');
            interfaz.classList.remove('oculto'); 
        }
    }

});
////////////////////CERRAR SESION///////////////////////
let cerrar_sesion_btn = document.getElementById('cerrar_sesion_btn');
cerrar_sesion_btn.addEventListener('click', ()=>
{
    deleteCookie("ACTUAL");
    window.location.reload();
})