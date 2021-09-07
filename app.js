  
//------------------APLICAÇÃO CJRM TO-DO LIST-------------------------
const form_Add = document.querySelector('.form-add-todo')
const ul = document.querySelector('.todos-container')
const div = document.querySelector('.container')
const body = document.querySelector('body')
const all_Nodes_LI = document.querySelectorAll('li')
const array_Nodes_LI = Array.from(all_Nodes_LI)

function add_LI (inputValueADD){
    if(inputValueADD.length){
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValueADD}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>`     
        event.target.reset()
    }
}


form_Add.addEventListener('submit',event => {
    event.preventDefault()

    const inputValueADD = event.target.add.value.trim() 
    add_LI(inputValueADD)
    
    console.log(ul.children)
})
  
body.addEventListener('click',event =>{
    clickedElement = event.target
    const classRefTRASH = Array.from(clickedElement.classList)

        classRefTRASH.includes('delete') ? console.log(clickedElement.parentElement) : 
       
    // classRefTRASH.includes('delete') ? clickedElement.parentElement.remove() : console.log('NAO,não é uma lixeira')

    // classRefTRASH.includes('delete') ? console.log('SIM, é uma lixeira') : console.log('NAO,não é uma lixeira')

    console.log(clickedElement)
    // console.log(array_Nodes_LI)
})  

/*--------------------------------------------------------------------
/*03 - Impplementação da remoção do To-Do List e Refatoração*/
/*
- Refatore a implementação da remoção do to-do (li) da tela;
- Tente implementar essa remoção sem "navegar pelo DOM" usando propriedades
  como a parentElement.
  
  Por que? 

  Se futuramente a marcação HTML da aplicação mudar, se o parentElement mudar, 
  o código que foi implementado na aula não funcionará.
  */
 /*
   04
 
   Algumas sugestões de refactoring
   
   - Isole em funções de responsabilidade única:
     - O código que adiciona os to-dos;
     - O código que filtra e adiciona as classes CSS nos to-dos.
 */
//-------------------------------------------------------------------

/*----------------------REVISÂO E05-----------------------------------
______________________E05 - Aula 01-06________________________________
__Centro de qualqquer modificação na WebPage;

__Quando o HTML é carregado no Browser; O Browser cria um "Document Object Model" para que seja possível a interação com o documento HTML através do código "JavaScript";

__O Browser cria o "document", com Properties e Métodos que dizem respeito ao documento HTML;

______________________E05 - Aula 01-07________________________________
__Para alterar um elemento no D.O.M, obtem-se a sua referência usando o método "querySelector()";

__Como "querySelector()" é um método de "document" a construção para obter-se a referência é:
    >const nome_Ref = document.querySelector("seletor CSS do item")

__O D.O.M é percorrido de cima para baixo, alcançando a primeira <tag> referenciada as outras de mesmo 'nome' são ignoradas;

__Obtendo múltiplos elementos do documento HTML:
    >...querySelectorAll() //R: NodeList: Lista de nós apresenta-se similar a um array, mas alguns métodos de array não funcionam em um 'NodeList'; O 'forEach()' pode ser usado para iterar dentro do 'NodeList';

______________________E05 - Aula 01-08________________________________

__**MDN_QUERY_SELECTOR_ALL: representa uma NodeList estática que representa uma lista dos elementos do documento que correspondem a  um espec´fico grupo de seletores;

__Obter referência através da 'tagName':
    >const nome_Ref = doc...getElementByTagName('string comtagName')
**RM: "...Dar preferência por'querySelector' pela flexibilidade, por aceitarem seletores CSS e fazer 'query(consulta)' de qualquer elemento necessário, e retornam um 'NodeList' que são menos limitados  se comparados ao 'HTML-Collection';..."    


______________________E05 - Aula 03-02________________________________
__PARENT_CHILDREN_SIBLING: Fazer queries no D.O.M, buscar elementos e fazer manipulações básicas;

______________________E05 - Aula 03-04________________________________
__CRIANDO_REMOVENDO_ELEMENTOS_D.O.M: Obtendo a referência do elemento; Adicionar o método 'remove()' no bloco da 'callback' para que o elemento acionado pelo clique seja removido;

//----------------------------**NA**----------------------------------
__**NA: Não usar 'parentElement' através da <ul>(parent), cria um código dinâmico, agindo sobre qualquer elemento <li> do D.O.M;
    1º opção: 'querySelectorAll' nas <li>;//R: O retorno foi um 'NodeList' com todas as <li> do D.O.M , mas ao inserir uma nova, o nº de elementos não se altera;

_**NA: Usando a referência de 'body', com um evento de 'click', qualquer elemento clicado no D.O.M retorna seu conteúdo;

**ISSUE???: Como referenciar a lixeira ao elemento <li> que é seu parent direto.....sem usar 'parentElement' e tornar o código 'dinâmico'....

**ISSUE: O elemento adicionado não é exibido, como se não existisse...

**NA: Acessando o elemento adicionado:
    >classRefTRASH.includes('delete') ? console.log(clickedElement.parentElement) : ''//R: Dentro da <li> criada, a referência é a lixeira(classRefTRASH) e seu 'parent' é a <li> criada....

**NA: Acesso a todas as <li>(add ou não):'console.log(ul.children)'   ; Quando fiz isso na referência da <div>, apenas <form>, <ul>, <header> foram exibidos; Uma sa´da é remover <ul> deixando tudo dentro da <div>;
*/