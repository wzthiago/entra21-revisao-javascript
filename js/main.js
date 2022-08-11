
// window.alert("Vamos iniciar...")
// window.confirm("Vamos iniciar...")


// 1 - Crie uma variável para cada tipo existente com let ou var
// 2 - Exiba em log o valor de cada variável e o tipo da variável com typeof(variável)
function funcaoVariaveis() {
    console.warn("VARIAVEIS");
    console.warn("Iniciando...Revisão JavaScript...");

    console.group('1 - Criando Variáveis')
    let nome = "Thiago"; // let cria uma variável com escopo limitado
    var sobrenome = "Souza"; // var cria uma variável que continua existindo mesmo depois do escopo
    console.log("Aluno:", nome, sobrenome);

    let idade = 31;
    var lista = [10, 22, 35, 46, 52, "JavaScript"];
    let boolean = true;
    console.log("Variável boolean = " + boolean + " / Tipo da variável = " + typeof (boolean));
    console.log("Variáveis :", nome, typeof (nome), idade, typeof (idade), lista, typeof (lista));

    var objeto = {
        nome: "Thiago",
        idade: "numero",
        lista: "lista"
    }

    let json = {
        name: "Thiago",
        age: 31,
        city: "Florianópolis",
        profession: "developer"
    }
    console.log("Variável json", json);
    console.table(["lista", "de", "exercícios", "JavaScript"]);
    console.groupEnd()

    console.group('2 - Tipo das Variáveis')
    console.log(typeof (nome));
    console.log(typeof (idade));
    console.log(typeof (boolean));
    console.log(typeof (lista));
    console.log(typeof (json));
    console.groupEnd();
}

// 3 - Para cada variável faça um IF que tome uma decisão e também no ELSE
function condicionalIfElse() {
    console.warn("IF ELSE");
    console.group('3 - condicionais IF-ELSE')
    let nome = "Thiago";
    let idade = "31";
    let boolean = true;
    var lista = [10, 22, 35, 46, 52, "JavaScript"];

    var objeto = {
        nome: "Thiago",
        idade: "numero",
        lista: "lista"
    }

    let json = {
        name: "Thiago",
        age: 31,
        city: "Florianópolis",
        profession: "developer"
    }

    if (nome == "Thiago") {
        console.log("if(nome=='Thiago') Achei -->", nome);
    } else {
        console.log("Não encontrado...");
    }

    if (idade > 31) {
        console.log("Ta ficando velho");
    } else {
        console.log("if(idade <= '32') Novinho...");
    }

    if (boolean == true) {
        console.log("if(boolean == 'true') Variável true");
    } else {
        console.log("False");
    }

    if (lista.length > 1) {
        console.log("if(lista > 1) Lista atualmente tem:", lista.length, "itens");
    } else {
        console.log("Poucos itens na lista");
    }

    if (json.city == "Florianópolis") {
        console.log("Objeto não é null:", json.name, json.age, json.city);
    } else {
        console.log("null");
    }
    console.groupEnd();
}

// 4 - Para uma variável string e number, faça um switch que tome uma decisão
function usandoSwitch() {
    console.warn("SWITCH");
    console.group('4 - Switch ');

    let nome = "Thiago";
    let idade = 31;

    switch (nome) {
        case "Maria":
            console.log("Mensagem");
            break;
        case "Thiago":
            console.log("Nome 'Thiago' encontrado usando Switch");
            break;
        default:
            console.log("Mensagem default");
            break;
    }

    switch (idade) {
        case 17:
            console.log("Menor de idade");
            break;
        case 31:
            console.log("Decisão com switch - Ficando velho ;)");
            break;
        default:
            console.log("Mensagem default");
            break;
    }


    console.groupEnd();
}

// 5 - Para uma variável do tipo array, faça as repetições possíveis - for com índice / foreach
function funcaoArray() {
    console.warn("FOR");
    console.group('5 - For');

    let lista = ["João", "Maria", "Joaquina", "Darci", "Jovelina"]
    console.log(lista);
    console.log("Lista de nomes: " + typeof (lista));
    for (let count = 0; count < lista.length; count++) {
        console.log("Usando for, índice: " + count + " = " + lista[count]);

    }
    console.groupEnd()

    console.warn("FOREACH");
    console.group('5 - Foreach');
    lista.forEach(item => {
        console.log("Usando forEach para listar " + item);
    });
    console.groupEnd();
}

// 6 - Se cada exercício anterior foi feito de forma unica no arquivo JS, separe-os em funções especificas
funcaoVariaveis();
condicionalIfElse();
usandoSwitch();
funcaoArray();

//======================================= Manipular html com Javascript ===============================================//

console.warn("Manipular HTML com JavaScript");

//1 - Com javascript puro (É importante saber o básico)
//1.1 - Localize um elemento no html por id
console.group("Localizando elemento no HTML por id:");
let tituloId = document.getElementById("titulo");
console.log(tituloId);
console.log("Conteúdo...", tituloId.textContent);
console.groupEnd();

//1.2 - Localize um ou mais elementos por class
console.group("Localizando elemento no HTML por class:")
let subtitulo = document.getElementsByClassName('subtitulo');
console.log(subtitulo);
console.groupEnd();

//1.3 - Localize um ou mais elementos por nome do seletor <tag>
console.group("Localizando elemento no HTML por nome do seletor <tag>:")
let linha = document.getElementsByTagName('p');
console.log(linha);
console.groupEnd();

//1.4 - Crie um novo paragrafo no body
let criarParagrafo = document.createElement("h1");
document.body.append(criarParagrafo);
criarParagrafo.textContent = "Este título foi escrito por JavaScript...";

//1.5 - Crie um novo paragrafo em algum elemento por ID,CLASS,ou seletor
let paragrafoId = document.createElement("p");
document.getElementById("Criar paragrafo em elemento Id...")
document.body.append(paragrafoId);
paragrafoId.textContent = "Este paragrafo foi criado dentro de um elemento por ID...escrito por JavaScript...";


//======================================= jQuery =============================================//
console.warn("jQuery");
//2.1 - Com jQuery (É importante otimizar o trabalho)
//2.1.1 - Localize um elemento por ID
console.group("Localizar um elemento por id:");
console.log($("#paragrafo_jQuery"));
console.groupEnd();

//2.1.2 Exiba em log o conteúdo desse elemento
console.group("Exibir conteúdo do elemento:");
console.log($("#paragrafo_jQuery").text());
console.groupEnd();

//2.1.3 - Exiba em log o conteúdo HTML desse elemento 
console.group("Exibir conteúdo HTML desse elemento:");
console.log($("#paragrafo_jQuery").val());
console.groupEnd();

//2.1.4 - Altere o conteúdo desse elemento por outro
console.group("Alterar o conteúdo desse elemento por outro:");
$("li").text("Texto da li alterado com jQuery...")
console.groupEnd();

//2.1.5 - Insira um novo elemento internamente a esse com append
$("<p>", { text: "Adicionando mais um paragrafo..." }).appendTo("#paragrafo_1")

console.group("Insira um novo elemento internamente a esse com append:");
function addConteudo(conteudo) {
    let enter = document.createElement("br");
    document.body.append(enter);
    let elemento = document.createElement("div");
    elemento.textContent = conteudo;
    document.body.append(elemento);
}

console.groupEnd();

//2.2 - Localize uma lista de elementos por class
let elementoLista = [...$(".tituloExemplo")]

//2.2.1 - Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
console.group("Converter elementos em uma lista e exibir de forma individual - por class");
console.log(elementoLista);
for (let contador = 0; contador < elementoLista.length; contador++) {
    console.log("Repetindo com for o índice " + " = " + contador + elementoLista[contador].textContent);
}
console.groupEnd()

console.group("Converter elementos em uma lista e exibir de forma individual - por nome do seletor");
//2.2.2 - Altere o conteúdo desses elementos por outro
$(".tituloExemplo").text("Tudo alterado...Alterações")

//2.3 - Localize uma lista de elementos por nome de seletor
let elementoSeletor = [...$("p")]

//2.3.1 - Converta esses elementos em uma lista e exiba de forma individual o seu conteúdo
console.log(elementoSeletor);
for (let contador = 0; contador < elementoSeletor.length; contador++) {
    console.log("Repetindo com for o índice " + " = " + contador + elementoSeletor[contador].textContent);
}
//2.3.2 - Altere o conteúdo desses elementos por outro
$("h1").text("Alterando titulo...");

//======================================= Eventos entre HTML e JS =============================================//

//3 - Com javascript puro (É importante saber o básico)
//3.1 - No html utilize o atributo de seletor onclick para executar funções existente no javascript
$("#add").on("click", function () {
    $("<p>", { text: "Adicionando Aauuuur...", class: "alert alert-danger" }).appendTo("#paragrafo_1")
})

$("#clean").on("click", function () {
    $(".alert").remove()
})

//3.2 - No javascript crie funções para as operações matemáticas onde o resultado deve ser exibido em log



//4 - Com jQuery(É importante otimizar o trabalho)
// - No html não teve ter menção ao javascript, mas deve permitir o acesso facilitado ao mesmo por id,class ou nome do seletor
// - Crie eventos de click para botoes onde a função deve exibir em log apenas que o click funcionou
$("#clickMensagem").click(() => {
    console.log("Você clicou, confirmado!!!");
})

//4.1 - Crie evento de submit que exiba em log os dados capturados nos input
$("form").on("submit", function (event) {
    event.preventDefault();
    obterDados();
})

function obterDados() {
    let nome = $("#nome").val()
    let linguagem = $("#linguagem").val()

    console.log("Seu nome é:", nome, "sua linguagem de programaçao favorita é:", linguagem);
}