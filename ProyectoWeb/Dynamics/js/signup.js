let formulario_signup= document.getElementById("signup");
let div_signup= document.getElementById("divdatosIngreso");
let input_usuario= document.getElementById("usuario");
let boton_ingreso= document.getElementById("botonIngreso");
let contraseña= document.getElementById("contraseña");
let submit_login= document.getElementById("btn_ingresar");
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