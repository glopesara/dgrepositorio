const [ , user ] = document.cookie.split('=');
const sideNavMenu = document.getElementById("sideNavigationMenu");
let droped = false;
let loginText = document.querySelector("#loginAnchor span");
let loginAnchorEL = document.getElementById("loginAnchor");
let signUpAnchorText = document.querySelector("#signUpAnchor span");
let signUpAnchorEl = document.getElementById("signUpAnchor");

if ( user ){
    loginText.innerText = 'Bem vindo, ' + user + "!";
    loginAnchorEL.href = "../perfil/index.html";

    signUpAnchorText.innerText = 'Sair';
    signUpAnchorEl.href = "../login/index.html";

    signUpAnchorEl.onclick = () => {
        signUpAnchorText.innerText = 'Cadastre-se aqui';
        document.cookie = "username=Fulano; expires=Thu, 17 Jul 1998 00:00:00 UTC; path=/;"
    }
}

function openMenu(){
    droped ? sideNavMenu.classList.add("hide")
        : sideNavMenu.classList.remove("hide");
    droped = !droped;
}

window.onclick = function(event) {
    if (event.target == sideNavMenu) {
        sideNavMenu.classList.add("hide");
        droped = !droped;
    }
}