const user = getCookie("username");
const loginText = document.querySelector("#loginAnchor span");
const loginAnchorEL = document.getElementById("loginAnchor");
const signUpAnchorText = document.querySelector("#signUpAnchor span");
const signUpAnchorEl = document.getElementById("signUpAnchor");

if ( user ){
    loginText.innerText = 'Bem vindo, ' + user + "!";
    loginAnchorEL.href = "../perfil/index.html";

    signUpAnchorText.innerText = 'Sair';
    signUpAnchorEl.href = "../login/index.html";

    signUpAnchorEl.onclick = () => {
        signUpAnchorText.innerText = 'Cadastre-se';
        document.cookie = "username=Fulano; Dominio=drogaabc.000webhostapp.com; expires=Thu, 17 Jul 1998 00:00:00 UTC; path=/; Secure;"
    }
}