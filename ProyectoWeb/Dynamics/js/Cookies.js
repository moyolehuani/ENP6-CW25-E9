let formulario_registro=document.getElementById("registrarse_form");
let usuario_creado;
let contrasena_creada;
let arreglo_usuarios;

formulario_registro.addEventListener("submit", function(){
    //guarda el valor del usuario y la contraseña que ingresó para la creación de la cuenta
    usuario_creado=document.getElementById("usuario_nuevo").value; 
    contrasena_creada=document.getElementById("contrasena_del_usuario_nuevo").value;
    console.log(usuario_creado);
    console.log(contrasena_creada);
    //se crea la cookie de la cuenta
    document.cookie=`${usuario_creado}=${contrasena_creada}; max-age=3600; path=/`;
    console.log(document.cookie);
    //lo siguiente es una pequeña comprobación de que todo salió bien
    todos_usuarios=document.cookie.split(";");
    for(let i=0; i<todos_usuarios.length; i++)
    {
      console.log(todos_usuarios[i]);
      console.log("Hola Mundo");
    }
});
//como no se puede sacar el arreglo del evento, hacemos un arreglo por fuera
//la variable se convierte en arreglo al agregar el split y delimitar cada elemento a
//formar, gracias al ";" que se usa de separación cuando se enlistan los elementos con 
// document.cookie
arreglo_usuarios=document.cookie.split(";");
//lectura del arreglo con todas las cuentas creadas
//para verificar que todo está en orden
    for(let i=0; i<arreglo_usuarios.length; i++)
    {
      console.log(arreglo_usuarios[i]);
      arreglo_usuarios[i]=arreglo_usuarios[i].trim(); //esto quita los espacios
      //del inicio y del final de cada elemento del arreglo
      console.log("Hola Mundo");
    }

//Comprobación de información al iniciar sesión
let form_inicio_sesion=document.getElementById("signup"); //es el formulario de inicio de sesión
let usuario_puesto;
let contrasena_puesta;
let cookie_formada;
let verifica_coincidencia;
console.log(form_inicio_sesion);
console.log("manzana");
console.log("Pera");

let envia_sesion=document.getElementById("btn_ingresar");

envia_sesion.addEventListener("click", function(event){
    //guardo los valores que el usuario ponga para iniciar sesión
    usuario_puesto=document.getElementById("usuario").value.trim();
    contrasena_puesta=document.getElementById("contraseña").value.trim();
    input_formado=`${usuario_puesto}=${contrasena_puesta}`;
    console.log(usuario_puesto);
    console.log(contrasena_puesta);
    console.log("DSJHSDUHGSDSGSDSSSSDDSHJSDHDUEWUW");
   for(let a=0; a<arreglo_usuarios.length; a++)
    {
        verifica_coincidencia=arreglo_usuarios[a].includes(input_formado); //esto devuelve verdadero o falso
        //si no hay coincidenci en el elemento actual, será falso
        console.log("No la politzia");
        console.log(verifica_coincidencia);
    
        if(verifica_coincidencia)
        {
            console.log("Todo Bien :)");
            //esconder la interfaz del login
            display_signup.classList.add('oculto');
            //Para que aparezca ahora el display de home con el reproductor, el aside
            cont_reproduciendo.classList.remove('oculto');
            buscador_sec.classList.remove('oculto');
            interfaz.classList.remove('oculto'); 
            //y no sobreescriba la de la cuenta que se creó
            document.cookie=`_I${usuario_puesto}=${contrasena_puesta}; max-age=100; path=/`;
            console.log("Cookie de inición de sesión automático creada");
            break; //detiene la ejecución del for cuando ya se inicia sesión
            //esto evita el resto de las alertas por los demás elementos 
        }
        else
        {
            console.log("entristeciste a dedede");
            event.preventDefault();
            alert("EL usuario o la contraseña es incorrecta");
        }
    }
});


    let arreglo_cuenta=document.cookie.split(";"); //guarda las cookies en arreglos
    //pude haber usado directamente el valor de arreglo_usuarios, pero así mantengo un orden
    let numero=arreglo_cuenta.length;  
    let inicio_automatico=arreglo_cuenta[numero-1]; //obtengo la cookie más reciente del arreglo
    //que es el iniciode sesión

    for(let d=0; d<arreglo_usuarios.length; d++) //itero para comparar la última cookie
    //con las demás que contiene las cuentas
    {
        let texto_de_cookie=inicio_automatico.slice(2); //para que no tome el _C y compare
        //de manera la cookie del inicio de sesión (_C) con la de la cuenta
        console.log(texto_de_cookie);
        let verificacion=arreglo_usuarios[d].includes(texto_de_cookie);
        console.log(verificacion);
        if(arreglo_usuarios.length>1)
        {
                if(verificacion) 
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

cerrar_sesion_btn= document.getElementById('cerrar_sesion_btn');
cerrar_sesion_btn.addEventListener("click", ()=>
{
    let hola_mundo=arreglocuenta[arreglo_cuenta.length-1];
    document.cookie=`${hola_mundo} ; max-age=-1000 path=/`;
});


