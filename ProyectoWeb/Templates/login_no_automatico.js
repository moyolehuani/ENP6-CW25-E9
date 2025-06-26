///////////////////////////////////////////////////////////////////////////
let formulario_registro=document.getElementById("registrarse_form");
let usuario_creado;
let contrasena_creada;
let arreglo_usuarios;
let usuarios_creados
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
    console.log=(cookies);
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
/////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////REGISTRAR USUARIO//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
formulario_registro.addEventListener("submit", function(e) //Evento que registra a un nuevo usuario
{
    e.preventDefault();
    usuario_creado=document.getElementById("usuario_nuevo").value; //guarda el valor del usuario 
    contrasena_creada=document.getElementById("contrasena_del_usuario_nuevo").value; //y la contraseña que ingresó para la creación de la cuenta
    
    console.log(usuario_creado +"= usuario creado");
    console.log(contrasena_creada + "= contra creada");
    //se crea la cookie de la cuenta
    
    setCookie(usuario_creado, contrasena_creada, 1000) // cookie perpetua
    
    console.log(document.cookie + "estas son las cookies");//lo anterior es una pequeña comprobación de que todo salió bien
    window.location.reload();
});
//////////////////////////////////////////////////////////////////////////////////
//////////////////Comprobación de información al iniciar sesión///////////////////
//////////////////////////////////////////////////////////////////////////////////
//variables
let form_inicio_sesion=document.getElementById("signup"); //es el formulario de inicio de sesión
let envia_sesion=document.getElementById("btn_ingresar");
let usuario_puesto;
let contrasena_puesta;
let cookie_formada;
let verifica_coincidencia;
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
//-/////////////////////////////////////////////////////////////////////////////////
/*let verificacion2;
let arreglo_cuenta=document.cookie.split(";"); //guarda las cookies en arreglos
//pude haber usado directamente el valor de arreglo_usuarios, pero así mantengo un orden
let numero=arreglo_cuenta.length;  
let inicio_automatico=arreglo_cuenta[numero-1]; //obtengo la cookie más reciente del arreglo
//que es el iniciode sesión
console.log("ESPEREMOS");
console.log(inicio_automatico)

for(let d=0; d<arreglo_cuenta.length; d++) //itero para comparar la última cookie
//con las demás que contiene las cuentas
{
    let texto_de_cookie=inicio_automatico.slice(2); //para que no tome el _I y compare
    //de manera la cookie del inicio de sesión (_I) con la de la cuenta
    console.log(texto_de_cookie);
    console.log("Ya se hizo");
    //devuelve verdadero o falso
    verificacion2=arreglo_cuenta[d].includes(texto_de_cookie);
    console.log(verificacion2);
    if(arreglo_cuenta.length>1)
    {
        if(verificacion2) 
            {
                console.log("Se inició automáticamente");
                //esconder la interfaz del login
                display_signup.classList.add('oculto');
                //Para que aparezca ahora el display de home con el reproductor, el aside
                cont_reproduciendo.classList.remove('oculto');
                buscador_sec.classList.remove('oculto');
                interfaz.classList.remove('oculto');
                break; //se pone para evitar el resto de iteraciones
            }
            else
            {
                console.log("No se pudo iniciar sesión de manera automática");
            }
        }
    }
console.log("MANZANANANANANANA");
let numero2=arreglo_cuenta.length;
let cookie_sesion=arreglo_cuenta[numero2-1]; //selecciona el último elemento de la lista de 
//todas las cookies, el cual es la cookie que tiene _I
console.log(cookie_sesion);
console.log("TAKAKAKAKAK");
cerrar_sesion_btn= document.getElementById("cerrar_sesion_btn");
cerrar_sesion_btn.addEventListener("click", ()=>{
    let solo_nombre=cookie_sesion.split("=");
    let nombre_correcto=solo_nombre[0];
    let valor_correcto=solo_nombre[1];
    console.log("TATGSGSGSGSHSJSJSJSJSK");
    document.cookie=`${cookie_sesion}; max-age=0; path=/`;
    window.location.reload();
});*/