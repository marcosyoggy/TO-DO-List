const form = document.querySelector(".form-add-todo")
const ul = document.querySelector(".todos-container")
const input = document.querySelector(".form-search input")
const toDoContent = Array.from(ul.children)

const insertNewToDo = event => {
    event.preventDefault()
    const inputToDoValue = event.target.add.value.trim()   
    if(inputToDoValue.length){
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputToDoValue}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>`
        event.target.reset()
    }
}    
const removeToDo = event => {
    const clickedElement = event.target
    const arrayElementClasslist = Array.from(clickedElement.classList)
    arrayElementClasslist.includes('delete') ? clickedElement.parentElement.remove() : ''
}

const compareEvent = event => {
    const inputCompareValue = event.target.value.trim().toLowerCase()
    hideToDo(inputCompareValue)
    showToDo(inputCompareValue)

}

function showToDo(inputCompareValue) {
    const toDoContent = Array.from(ul.children)
    toDoContent.filter(itemToDo => itemToDo.textContent.toLowerCase().includes(inputCompareValue))
    .forEach( itemToDo => {
    itemToDo.classList.remove('hidden')
    itemToDo.classList.add('d-flex')
    })   
}

function hideToDo(inputCompareValue) {
    const toDoContent = Array.from(ul.children)
    toDoContent.filter(itemToDo => ! itemToDo.textContent.toLowerCase().includes(inputCompareValue))
    .forEach( itemToDo => {
    itemToDo.classList.remove('d-flex')
    itemToDo.classList.add('hidden')
    })   
}
//------------------BLOCO DE CODIGO---------------------------------
form.addEventListener('submit', insertNewToDo )

ul.addEventListener('click', removeToDo)

input.addEventListener("input", compareEvent) 