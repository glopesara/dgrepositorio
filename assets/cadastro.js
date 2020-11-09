document.getElementById('dadosOff').addEventListener('click',e=>{
    document.getElementById("dadosCol").classList.add("close");
    document.getElementById('fomDados').classList.add('dadosOff');
});

document.getElementById('dadosOn').addEventListener('click',e=>{
    document.getElementById("dadosCol").classList.remove("close"); 
    document.getElementById('fomDados').classList.remove('dadosOff');
});

document.getElementById('enderecoOff').addEventListener('click',e=>{
    document.getElementById("ederecoCol").classList.add("close");
    document.getElementById('formEndereco').classList.add('enderecoOff');
});

document.getElementById('enderecoOn').addEventListener('click',e=>{
    document.getElementById("ederecoCol").classList.remove("close"); 
    document.getElementById('formEndereco').classList.remove('enderecoOff');
});

document.getElementById('pedidoOff').addEventListener('click',e=>{
    document.getElementById("pedidosCol").classList.add("close");
    document.getElementById('formPedidos').classList.add('pedidosOff');
});

document.getElementById('pedidoOn').addEventListener('click',e=>{
    document.getElementById("pedidosCol").classList.remove("close"); 
    document.getElementById('formPedidos').classList.remove('pedidosOff');
});

document.getElementById('cartaoOff').addEventListener('click',e=>{
    document.getElementById("cartaoCol").classList.add("close");
    document.getElementById('formCartao').classList.add('pedidosOff');
});

document.getElementById('cartaoOn').addEventListener('click',e=>{
    document.getElementById("cartaoCol").classList.remove("close"); 
    document.getElementById('formCartao').classList.remove('pedidosOff');
});

function mascara(sub, pg){
    var i = pg.value.length;
    var saida = sub.substring(0,1);
    var alterar = sub.substring(i);
    if (event.keyCode < 48 || event.keyCode > 57){
      event.returnValue = false;
    }
    if (alterar.substring(0,1) != saida){
              pg.value += alterar.substring(0,1);
    }
}

function soletras(e){
    key=e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = "abcdefghijklmnopqrstuvwxyz "
    especial = "8-37-38-46-164"
    teclado_especial = false;
    for (var i in especial) {
        if(key==especial[i]){
            teclado_especial=true;break;
        }
    }
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
        return false
    }
}

function formulario_cartao(){
    var namecard = fomulario.namecard.value;
    var numbercard = fomulario.numbercard.value;
    var cvv = fomulario.cvv.value;
    var ano = fomulario.ano.value;
     var verifica

     if(namecard.indexOf(" ") == -1){
         alert("Preencha o nome corretamente")
     verifica = true
 
     }
 
    if(numbercard.length != 16 ){ 
         alert("digite um valor de cartão valido");
         verifica = true
    }
    if(cvv.length != 3 ){ 
     alert("digite um CVV valido");
     verifica = true
     }
     if(ano.length != 5 ){ 
         alert("digite um ano valido");
         verifica = true
     }
     if(verifica){
         return false;
     } 
     if(verifica != true){
         alert("PAGAMENTO REALIZADO COM SUCESSO")
     } 
 }