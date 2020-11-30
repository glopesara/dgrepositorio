const filterList = document.getElementById("productsFilter");
let open = false;

function openFilter(){
    if(open === true){
        document.getElementById("buttonFilterIcon").style.display = 'block';
        document.getElementById("buttonBackIcon").style.display = 'none';
        filterList.classList.add("hideFilter")
    }else if(open === false){
        document.getElementById("buttonFilterIcon").style.display = 'none';
        document.getElementById("buttonBackIcon").style.display = 'block';
        filterList.classList.remove("hideFilter");
    }
    open = !open;
}