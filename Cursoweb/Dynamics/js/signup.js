formulario_signup= document.getElementById("signup");
div_signup= document.getElementById("divdatosIngreso");
input_usuario= document.getElementById("usuario");
boton_ingreso= document.getElementById("botonIngreso") 
input_usuario.addEventListener('keydown', e => {
    if( (e.key === 'Enter') && !document.getElementById('contraseña'))
    {
        e.preventDefault();
        let contraseña= document.createElement("input");
        let submit_login= document.createElement("input");
        contraseña.type = "password";
        submit_login.type= "submit";
        contraseña.id = "contraseña";
        submit_login.id="botonIngreso";
        contraseña.placeholder = "password";
        contraseña.required=true;
        contraseña.style.display = "block"; 
        submit_login.style.direction= "block";
        contraseña.style.marginTop= '10px';
        submit_login.style.marginTop= '10px';
        contraseña.classList.add("animar-aparicion");
        submit_login.classList.add("animar-aparicion");
        div_signup.appendChild(contraseña);
        div_signup.appendChild(submit_login);
        contraseña.focus();
    }
    else
    {
        if(e.key === 'Enter')
        {
            e.preventDefault();
            let contraseña= document.createElement("input");
            contraseña.focus();
        }
    }
});