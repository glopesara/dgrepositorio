function formulario_contato(){
    let name = contactData.contactDataName.value;
    let email = contactData.contactDataEmail.value;
    let message = contactData.contactDataMessage.value;

    if(name.indexOf(" ") == -1){
        alert("Preencha o nome corretamente")
        contactData.contactDataName.focus();
        return false;
    } 

    if( email == "" || email.indexOf('@')==-1 || email.indexOf('.')==-1 ){
        alert( "informe um e-mail válido!" );
        contactData.contactDataName.focus();
        return false;
    }

    if(message == ""){
        alert("Digite alguma menssagem")
        contactData.contactDataMessage.focus();
        return false;
    }
    
    alert("Menssagem envia com sucesso!");
}