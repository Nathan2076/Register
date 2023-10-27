"use strict";  // Modo restrito
// https://viacep.com.br

// Função para limpar formulário

/*const limparForm = () => {
    document.getElementById("address").value = "";
    document.getElementById("neighborhood").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
}*/

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Responsável pelo preenchimento do formulário

const preencherForm = (endereco) => {
    document.getElementById("address").value = endereco.logradouro;
    document.getElementById("neighborhood").value = endereco.bairro;
    document.getElementById("city").value = endereco.localidade;
    document.getElementById("state").value = endereco.uf;
}

// Função para consumo de API da Via CEP

const pesquisarCep = async() => {
    //limparForm();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    if (cepValido(cep.value)) {
        const dados = await fetch(url);  // Espera
        const address = await dados.json();  // Retorna dados no formato JSON
        
        if (address.hasOwnProperty("erro")) {
            alert("CEP não encontrado");
        } else {
            preencherForm(address);
        }
    } else {
        alert("CEP incorreto");
    }
}

// Adiciona um evento DOM no input do CEP

document.getElementById("cep").addEventListener("focusout", pesquisarCep);

function validateForm(e)
{
    e.preventDefault();

    let name            = document.getElementById("name").value;
    let email           = document.getElementById("email").value;
    let emailConfirm    = document.getElementById("email-confirm").value;
    let phone           = document.getElementById("phone").value;
    let birthdate       = document.getElementById("birthdate").value;
    let cpf             = document.getElementById("cpf").value;
    let cep             = document.getElementById("cep").value;
    let address         = document.getElementById("address").value;
    let number          = document.getElementById("number").value;
    let complement      = document.getElementById("complement").value;
    let neighborhood    = document.getElementById("neighborhood").value;
    let city            = document.getElementById("city").value;
    let state           = document.getElementById("state").value;
    let reference       = document.getElementById("reference").value;
    let password        = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("password-confirm").value;

    if (password != passwordConfirm)
    {
        alert("A senha confirmada não é a mesma!");
        return;
    }
    if (email != emailConfirm)
    {
        alert("O email confirmado não é o mesmo!");
        return;
    }
    
    alert("Cadastro realizado com sucesso!\n\n"
        + `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\n`
        + `Data de nascimento: ${birthdate}\nCPF: ${cpf}\nCEP: ${cep}\n`
        + `Endereço: ${address}\nNúmero: ${number}\n`
        + `Complemento: ${complement}\nBairro: ${neighborhood}\n`
        + `Cidade: ${city}\nEstado: ${state}\n`
        + `Ponto de referência: ${reference}\nSenha: ${password}`);
}
