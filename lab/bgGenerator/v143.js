'use strict'

const css = document.querySelector('h3')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.querySelector('body')

function setBG(bg1, bg2) {
    body.style.background = `linear-gradient(to right, ${bg1.value}, ${bg2.value})`
    css.textContent = body.style.background
}

color1.addEventListener('input', () => { setBG(color1, color2) })
color2.addEventListener('input', () => { setBG(color1, color2) })

// color2.addEventListener('input', (e) => {
//     body.style.background = `linear-gradient(to right, ${color1.value}, ${e.target.value})`
// })

