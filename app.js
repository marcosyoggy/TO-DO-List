  
const form_Add = document.querySelector('.form-add-todo')
const div = document.querySelector('.todos-container')

const newLi =  (inputValueADD) => {
    if(inputValueADD.length){
        div.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValueADD}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>`     
        event.target.reset()
    }
}

const addLi = event => {
    event.preventDefault()

    const inputValueADD = event.target.add.value.trim() 
    newLi(inputValueADD)
    
}

const removeLi = event =>{
    clickedElement = event.target
    const classRefTRASH = Array.from(clickedElement.classList)
    
    classRefTRASH.includes('delete') ? clickedElement.parentElement.remove() :  console.log(item_Node)
    
}

form_Add.addEventListener('submit', addLi)
  
div.addEventListener('click', removeLi)  





    
