function formulario_dados(){
    const nome = userData.name.value;
    const email = userData.email.value;
    const cpf = userData.cpf.value;
    const tel = userData.phone.value;
    const senha = userData.password.value;
    const novasenha = userData.newPassword.value;

    if( nome.indexOf(" ") == -1){
        alert("Preencha o nome completo");
        userData.name.focus();
        return false;
    }

    if( email == "" || email.indexOf('@')==-1 || email.indexOf('.')==-1 ){
        alert( "informe um e-mail válido!" );
        userData.email.focus();
        return false;
    }

    if( cpf.length != 11){
        alert("Preencha um cpf valido");
        userData.cpf.focus();
        return false
    }

    if( tel.length != 13){
        alert("Preencha um telefone valido");
        userData.phone.focus();
        return false;
    }

    if( senha.length < 8){
        alert("Preencha a senha deve conter 8 carateres");
        userData.password.focus();
        return false;
    }

    if( novasenha.length < 8){
        alert("Preencha a nova senha com mais de 8 caracteres");
        userData.newPassword.focus();
        return false;
    }
    
    alert("Dados alterados com sucesso");
}

function formulario_endereco(){
    const cep = address.cep.value;
    const rua = address.street.value;
    const numero = address.num.value;
    const cidade = address.city.value;
    const bairro = address.district.value;
    const uf = address.uf.value;

    if(cep.length != 8 ){
        alert("Preencha o cep corretamente");
        address.cep.focus();
        return false;
    }

    if(rua.length == 0){ 
        alert("Digite o nome da rua");
        address.street.focus();
        return false;
    }

    if(numero.length == 0 ){ 
        alert("Digite o numero da rua");
        address.num.focus();
        return false;
    }

    if(cidade.length == 0){ 
        alert("Digite o nome da cidade");
        address.city.focus();
        return false;
    }

    if(bairro.length == 0){ 
        alert("Digite o nome do bairro");
        address.district.focus();
        return false;
    }

    if(uf.length != 2){ 
        alert("Digite a UF");
        address.uf.focus();
        return false;
    }

    alert("Endereço adicionado com sucesso")
}

function formulario_cartao(){
    var cardName = paymentCard.cardName.value;
    var cardNumber = paymentCard.cardNumber.value;
    var cvv = paymentCard.cvv.value;
    var expirationDate = paymentCard.expirationDate.value;

    if(cardName.indexOf(" ") == -1){
        alert("Preencha o nome corretamente")
        paymentCard.cardName.focus();
        return false;
 
    }
 
    if(cardNumber.length != 16 ){ 
        alert("digite um valor de cartão valido");
        paymentCard.cardNumber.focus();
        return false;
    }
    
    if(cvv.length != 3 ){ 
        alert("digite um CVV valido");
        paymentCard.cvv.focus();
        return false;
    }

    if(expirationDate.length != 5 ){ 
        alert("digite um ano valido");
        paymentCard.expirationDate.focus();
        return false;
    }
    
    alert("Cartão adicionado com sucesso")
}