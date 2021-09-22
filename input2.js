function verificaEntrada(){
    NomeConvidado= document.getElementById('nome').value;
    ConvidadosCristian=['Amanda','Sabrina','Rafael','Jonas','Carol','Joao']
    console.log(ConvidadosCristian.includes(NomeConvidado))
    if (ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoEntrada').innerText = 'Voce pode Entrar!'
    }else{
        document.getElementById('PermissaoEntrada').innerText = 'Voce não pode Entrar!'
    }
}