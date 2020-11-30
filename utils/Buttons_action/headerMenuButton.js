const sideNavMenu = document.getElementById("sideNavigationMenu");
let droped = false;

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