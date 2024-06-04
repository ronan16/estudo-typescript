"use strict";
/* //Exemplo Aula 1
const total = 10 + 10;
const body = document.body;
body.innerText = `Valor total: ${total}`;

//Exemplo Aula 2 - Annotations e inferences

//Tipos de dados: string, number, object
const produto: string = "livro";
const idade: number = 200;

//Para tipar um objeto, devemos tipar seus atributos
const carro: {
  marca: string; //interface do objeto
  portas: number; //interface do objeto
} = {
  marca: "uno", //Conteúdo do objeto (sob restrição da interface)
  portas: 4,
};

//Inferencia quer dizer que o typescript assume que o valor original de uma
//variável é o seu tipo. Assim uma variável que começe como String, sempre será String por INFERENCIA.
//Devido a essa característica, não há necessidade de fazer annotations em todas as variáveis
//Annotations se mostra necessária principalmente em FUNÇÃO

function somar(a: number, b: number) {
  return a + b;
}

const nintendo = {
  nome: "nintendo",
  preco: "2000.0",
};

function transformaPreco(produto: { nome: string; preco: string }) {
  produto.preco = `R$ ${produto.preco}`;
  return produto;
}

console.log(transformaPreco(nintendo));

//Atividade 1
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

// Exemplo Aula 3 - Atividades práticas
const input = document.querySelector("input");
const total = localStorage.getItem("total");
const p = document.querySelector("p");

if (total && input) {
  input.value = total;
  calcularGanho(total);
  input.addEventListener("keyup", totalMudou);
}

function calcularGanho(value: string) {
  localStorage.setItem("total", value); //o + no  começo converte para NUMBER.

  if (p) {
    p.innerText = `ganho Total: ${+value + 100 * 0.8}`;
  }
}

function totalMudou() {
  const value = input ? input.value : "0";
  calcularGanho(value);
}

// Exemplo aula 04
function toNumber(num: number | string) {
  if (typeof num === "number") {
    return num;
  } else if (typeof num === "string") {
    return Number(num);
  } else {
    throw "value deve ser um numero ou uma string";
  }
}

console.log(toNumber("Roberto"));

//Exemplo Aula 05

//Criando meu próprio TIPO / Interface

//Para objetos, usar preferencialmente INTERFACE
interface Produto {
  nome: string;
  preco: number;
  teclado: boolean;
};

//Posso criar um tipo de limita as opções, evitando problemas na programação
type Categorias = "Frios" | "Enlatados" | "Frutaria";

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
  <div>
  <h2> ${dados.nome} </h2>
  <p> ${dados.preco}</p>
  <p>Inclui Teclado: ${dados.teclado ? "sim" : "nao"}</p>
  </div>
  `;
}

preencherDados({
  nome: "Computador",
  preco: 2000,
  teclado: true,
});

preencherDados({
  nome: "Notebook",
  preco: 4000,
  teclado: false,
});

//Aula 06 - Exercicio de Interface
 
interface IEmpresa {
  nome: "string";
  fundacao: "number";
  pais: "string";
}
interface IProduto {
  nome: "string";
  preco: "number";
  descricao: "string";
  garantia: "string";
  seguroAcidentes: "boolean";
  empresaFabricante: IEmpresa;
  empresaMontadora: IEmpresa;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();

function showProduct(data: IProduto) {
  document.body.innerHTML = `
    <div>
      <h2>${JSON.stringify(data)}</h2>
    </div>
  `;
}


//Exemplo 07 - Array
//Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o
//título de azul, para avançado pinte de vermelho.

interface ICursos {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  nivel: "iniciante" | "avancado";
  tags: Array<string>;
  idAulas: Array<number>;
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  console.log(data);
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Array<ICursos>) {
  cursos.map((curso: ICursos) => {
    let cor = "";
    if (curso.nivel === "iniciante") {
      cor = "blue";
    } else {
      cor = "red";
    }

    document.body.innerHTML += `
    <div>
      <h2 style='color: ${cor}'>${curso.nome}</h2>
    </div>
    <div>
      <p>Nível: ${curso.nivel}</p>
      <p>Num. Horas: ${curso.horas} </p>
      <p>Num. Aulas: ${curso.aulas} </p>
      <p>Gratuito? ${curso.gratuito ? "Sim" : "Não"}
      <p>TAGS: ${curso.tags.join(", ")}</p>
      <p>id das Aulas: ${curso.idAulas.join(" | ")}</p>
    </div>
      `;
  });
}

//Exemplo Aula 08 - Itens opcionais nos tipos
//Quando temos campos que podem ou não ser preenchidos em uma interface ou type,
//podemos usar o "?" para indicar que é opcional

interface IUsuario {
  nome: string;
  senha: string;
  email?: string;
}
*/
//Exemplos Aula 09 - Class e InstanceOf
/*
class Produto {
  nome: string; //Definindo os atributos da class

  constructor(nome: string) {
    //Parâmetros do método construtor
    this.nome = nome; //Usando o método construtor para passar para o atributo da class
  }
}

const livro = new Produto("Senhor dos Aneis");

console.log(livro instanceof Produto); // permite verificar se um objeto pertence aquela Classe
-----------------------------------------------------
*/
/*
class Produto {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

class Livro extends Produto {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === "O Hobbit") {
    return new Livro("O Hobbit", "J. R. R. Tolkien");
  }
  if (busca === "Dark Souls") {
    return new Jogo("Dark Souls", 1);
  }
  return null;
}

const produto1 = buscarProduto("O Hobbit");
const produto2 = buscarProduto("Dark Souls");

if (produto1 instanceof Produto) {
  produto1.nome;
}
if (produto2 instanceof Produto) {
  produto2.nome;
}

//NÃO CONFUNDIR - instanceOf é referente a CLASS e não à interface.



// Exercício aula 09

const elemento = document.getElementById("origamid");

if (elemento instanceof HTMLAnchorElement) {
  elemento.href = elemento.href.replace("http://", "https://");
}
*/
