
let nameForm = document.querySelector('#nameForm')
console.log(nameForm)

nameForm.addEventListener('submit', function (eventObject) {
    
 eventObject.preventDefault()
console.dir(eventObject)


let nameInput = document.querySelector('#nameInput')
let name = nameInput.value
appendParagraph('Welcome' + name)

})

let pageForm = document.querySelector('#pageForm')
console.log(pageForm)

pageForm.addEventListener(`submit`, function(eventObject){
    eventObject.preventDefault()

    let pageInput = document.querySelector(`input[type=number]`)
    console.log(pageInput)

    let pageNumber = pageInput.value
    let page = pages[pageNumber]
    appendParagraph(pages[pageNumber])



})
