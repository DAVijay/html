/*function change() {
    let x = document.getElementById('a')
    x.innerText = 'Leaning ES6 syntax'
}*/

function add(a, b) {
    return (a + b)
}
console.log(add(6, 7))

const add1 = (x, y) => {
    return (x + y)
}
console.log(add1(5, 2))

let z = document.querySelector('h1')
let btn = document.querySelector('button')

let x = document.querySelector('h3')
let redBtn = document.querySelectorAll('button')[1]

btn.addEventListener('click', () => {
    z.textContent = "Demo of es6 context"
})

redBtn.addEventListener('click', () => {

    if (x.style.background == 'yellow') {
        x.style.background = 'red'
        x.style.color = 'white'
    }
    else if (x.style.background == 'red'){
        x.style.background = 'blue'
    x.style.color = 'black'
}
    else {
        x.style.background = 'yellow'
        x.style.color = 'majenta'
    }


    x.style.textAlign = 'center'
})