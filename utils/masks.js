function mascara(sub, pg){
    let i = pg.value.length;
    let saida = sub.substring(0,1);
    let alterar = sub.substring(i);

    if (event.keyCode < 48 || event.keyCode > 57){
         event.returnValue = false;
    }

    if (alterar.substring(0,1) != saida){
        pg.value += alterar.substring(0,1);
    }
}

function soletras(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = "abcdefghijklmnopqrstuvwxyz "
    especial = "8-37-38-46-164"
    teclado_especial = false;

    for (let i in especial) {
        if(key==especial[i]){
            teclado_especial=true;break;
        }
    }
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false
    }
}