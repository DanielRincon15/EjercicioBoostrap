const login1 = document.getElementById("login1");
const login2 = document.getElementById("login2");
const loginUser = document.getElementById("loginUser");
const textLogin = document.getElementById("textLogin");
const textLogout = document.getElementById("textLogout");

/*Se esta editando un estilo desde JS, donde 
textLogin(parrafo).enlosestilos.lapropiedad, se le va a asignar
 el valor hidden(oculto)  */

textLogin.style.visibility = "hidden";
textLogout.style.visibility = "hidden";

//esta funcion la vamos a activar con un evento mouseover
//cuando el usuario le pase el mouse encima
//encima en el HTML, mostrar lo q esta oculto

const show = () => {
  // Al parrafo sus estilos, la propiedad visibilidad es iguaol a hidden

  if (textLogin.style.visibility == "hidden") {
    // El parrafo se le va a editar un estilo, que es la propiedad visibility
    // Y se le va a asignar el valor (visible)

    textLogin.style.visibility = "visible";
  } else {
    textLogin.style.visibility = "hidden";
  }
};

//logout

const show2 = () => {
  if (textLogout.style.visibility == "hidden") {
    textLogout.style.visibility = "visible";
  } else {
    textLogout.style.visibility = "hidden";
  }
};

//La propiedad de solo lectura localStorage te permite acceder al objeto local storage
//y los datos persisten almacenados en el navegador

/* Nos permite almacenar datos de manera local en el navegador
y sin necesidad de realizar alguna conexion a una base de datos */

const iniciarSesion =() =>{
    let usuario = prompt ("Ingresa tu nombre");
    
    // SetItem asignar dato

    localStorage.setItem("name", usuario);

    loginUser.innerHTML = usuario;
};

if(localStorage.getItem("name")){
    loginUser.innerHTML = localStorage.getItem("name");
}

const cerrarSesion = () =>{
    loginUser.innerHTML = " ";
    localStorage.clear();
}

login1.onclick = function () {
    iniciarSesion();
}

login2.onclick = function () {
    cerrarSesion();
}



