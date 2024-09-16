let nome = document.getElementById("nome");
let dataNascimento = document.getElementById("nasc");
let cpf = document.getElementById("cpf");
let cep = document.getElementById("cep");
let ruaOuAvenida = document.getElementById("rua");
let numeroRua = document.getElementById("nrua");
let complemento = document.getElementById("comple");
let pontoReferencia = document.getElementById("pref");
let ddd = document.getElementById("ddd");
let telefone = document.getElementById("tel");
let email = document.getElementById("email");
let enviar = document.getElementById("enviar");
let salvar = document.getElementById("salvar");

let pessoas = [];

// Configuração do input nome para receber apenas valor caracteres
nome.addEventListener("input", apenasLetrasNome);
function apenasLetrasNome() {
  nome.value = nome.value.replace(/[^a-zA-Z]/, ""); 
};

// Configuração do input cpf para receber apenas valores númericos
cpf.addEventListener("input", apenasNumeroCpf);
function apenasNumeroCpf() {
  cpf.value = cpf.value.replace(/[^0-9]/g, "");
};

// Configuração do input cep para receber apenas valores númericos
cep.addEventListener("input", apenasNumeroCep);
function apenasNumeroCep() {
  cep.value = cep.value.replace(/[^0-9]/g, "");
};

// Configuração do input número da rua para receber apenas valores númerico
numeroRua.addEventListener("input", apenasNumeroNRua);
function apenasNumeroNRua() {
  numeroRua.value = numeroRua.value.replace(/[^0-9]/g, "");
};

// Configuração do input ddd para receber apenas valores númerico
ddd.addEventListener("input", apenasNumeroddd);
function apenasNumeroddd() {
  ddd.value = ddd.value.replace(/[^0-9]/g, "");
};

// Configuração do input telefone para receber apenas valores númerico
telefone.addEventListener("input", apenasNumeroTel);
function apenasNumeroTel() {
  telefone.value = telefone.value.replace(/[^0-9]/g, "");
};

pessoas.push("usuario1");

let usuario1 = {
  nome: "",
  nascimento: "",
  cpf: "",
  endereco: "",
  contato: "",
};

salvar.addEventListener("click", function() {
  usuario1.endereco = endereco();
  usuario1.contato = contato();
  usuario1.nome = nome.value;
  usuario1.nascimento = dataNascimento.value;
  usuario1.cpf = cpf.value;
  if((usuario1.endereco !== "" && usuario1.contato !== "" && usuario1.nome !== "" && usuario1.nascimento !== "" && usuario1.cpf !== "")) {
    console.log(usuario1);
    alert("Dados Cadastrado com Sucesso:");
  }
});

function endereco() {
  return cep.value + " " + ruaOuAvenida.value + " " + numeroRua.value + " " + complemento.value + " " + pontoReferencia.value;
};

function contato() {
  return ddd.value + " " + telefone.value + " " + email.value;
};

