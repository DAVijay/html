z = document.querySelectorAll('h1')[1]
z.style.background = 'blue'

x = document.getElementsByTagName('h1')[0]
x.style.fontSize = '20px'

y = document.getElementsByClassName('a')[3]
y.style.background = 'yellow'

let myText = document.querySelector('h2')

function hi(){
    if(myText.textContent == "Learning If else"){
        myText.textContent = "I like Mern stack"
    }
    else{
        myText.textContent = "Learning If else"
    }
}