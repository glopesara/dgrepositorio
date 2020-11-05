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

