'use strict'

const input = document.querySelector('#input')
const form = document.querySelector('#form')
const btn = document.querySelector('button')
const ul = document.querySelector('ul')


// Adds new items IF string > 0 && clears input field
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    const newItem = input.value
    if (newItem.length > 0) {
        li.append(newItem)
        ul.append(li)
        input.value = ""
    }
})

// Toggling “.done” class which adds a line through each item
// Possible issue:
// - Button is being selected with “childNodes” on index 1
//   .. I dont like to keep things hard coded like this
//   .. but couldnt find a better approach
ul.addEventListener('click', (e) => {
    e.stopPropagation()

    // Adding “.done” class, if applied
    if (e.target.className !== "done" && e.target.nodeName === "LI") {
        e.target.classList.add('done')
        const newBtn = document.createElement('button')
        newBtn.append('Delete')
        newBtn.classList.add('delBtn')
        e.target.append(newBtn)

    // Conditional to avoid unecessary errors on console
    } else if (e.target.className === "done" && e.target.nodeName === "LI") {
        e.target.classList.remove('done')
        e.target.childNodes[1].remove()

    // Deleting
    } else if (e.target.className === "delBtn" && e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove()
    }
})

