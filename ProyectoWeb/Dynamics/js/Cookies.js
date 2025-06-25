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
let boton_inicio_sesion=document.getElementById("signup"); //es el formulario de inicio de sesión
let usuario_puesto;
let contrasena_puesta;
let cookie_formada;
let verifica_coincidencia;

boton_inicio_sesion.addEventListener("submit", function(event){
    //guardo los valores que el usuario ponga para iniciar sesión
    usuario_puesto=document.getElementById("usuario").value.trim();
    contrasena_puesta=document.getElementById("contraseña").value.trim();
    cookie_formada=`${usuario_puesto}=${contrasena_puesta}`;
    console.log(usuario_puesto);
    console.log(contrasena_puesta);
    console.log("NAranja");
   for(let a=0; a<arreglo_usuarios.length; a++)
    {
        verifica_coincidencia=arreglo_usuarios[a].include(cookie_formada); //esto devuelve verdadero o falso
        //si no hay coincidenci en el elemento actual, será falso
        if(verifica_coincidencia)
        {
            console.log("Todo Bien :)");
        }
        else
        {
            event.preventDefault();
            alert("EL usuario o la contraseña es incorrecta");
        }
    }
});