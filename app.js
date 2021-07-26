var a = document.getElementById("main")
var b = document.getElementById("ABC")


function inp(){
    var newElement = document.createElement('P')
    var text = b.value
    text = document.createTextNode(text)
    newElement.setAttribute('class','inside')

    newElement.append(text)
    a.appendChild(newElement)
    b.value = ''

    var editBtn = document.createElement('BUTTON')
    var editBtnText = document.createTextNode('Edit')
    editBtn.appendChild(editBtnText)
    editBtn.setAttribute('onClick','editTodo(this)')
    editBtn.setAttribute('class','add')
    newElement.appendChild(editBtn)


    var deleteBtn = document.createElement('BUTTON')
    var deleteBtnText = document.createTextNode('Remove')
    deleteBtn.appendChild(deleteBtnText)
    deleteBtn.setAttribute('onClick','deleteTodo(this)')
    deleteBtn.setAttribute('class','remove')
    newElement.appendChild(deleteBtn)


}

function deleteTodo(e){
    console.log(e.parentNode)
    e.parentNode.remove()
}


function editTodo(e){
    console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue = prompt('Enter new value')
}



function deleteAll(){
    a.innerHTML = ''
}


