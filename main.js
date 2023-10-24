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
    
    alert(`Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\n`
        + `Data de nascimento: ${birthdate}\nCPF: ${cpf}\nCEP: ${cep}\n`
        + `Endereço: ${address}\nNúmero: ${number}\n`
        + `Complemento: ${complement}\nBairro: ${neighborhood}\n`
        + `Cidade: ${city}\nEstado: ${state}\n`
        + `Ponto de referência: ${reference}\nSenha: ${password}`);
}
