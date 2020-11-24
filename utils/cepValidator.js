const addressData = [
    district = document.getElementById('district'),
    complement = document.getElementById('complement'),
    city = document.getElementById('city'),
    street = document.getElementById('street'),
    uf = document.getElementById('uf')
]

const spanWarning = document.querySelector('form[name="address"] .warning');

function fillFields(cepData) {
    for(let i in addressData) {
        addressData[i].value = cepData[i];
    } 
}   

async function verifyCep(){
    const cep = document.getElementById("cep").value;

    try {
        const responseStatus = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
        const { 
            bairro, 
            complemento, 
            localidade, 
            logradouro, 
            uf 
        } = await responseStatus.json();
        
        spanWarning.classList.add("successWarning");
        spanWarning.textContent = 'CEP válido';
        fillFields([ bairro, complemento, localidade, logradouro, uf ]);
    } catch (error) {
        spanWarning.classList.remove("successWarning");
        spanWarning.textContent = 'Erro, verifique o CEP e tente novamente';
    }
}