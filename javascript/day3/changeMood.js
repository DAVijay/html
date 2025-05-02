let x = document.querySelectorAll('button')[0]
let y = document.querySelectorAll('button')[1]

x.addEventListener('click', () =>{
    document.querySelector('img').src = 'happy.jpeg'
    document.querySelector('h1').textContent = "So Happy"
})

y.addEventListener('click', () =>{
    document.querySelector('img').src = 'sad.jpeg'
    document.querySelector('h1').textContent = "So SAD"
})
