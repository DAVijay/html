x = document.getElementById('click')
y = document.getElementById('hide')

function clickMe() {
   
    if(x.textContent == "Now i know JS" && x.style.background == 'white'){
        x.textContent = "javascript is interesting"
        x.style.color = 'yellow'
        x.style.background = 'black'
    }else {
        x.textContent = "Now i know JS"
        x.style.color = 'blue'
        x.style.background = 'white'
    }
}

function hide() {
    
    if (y.style.visibility == 'hidden')
        y.style.visibility = 'visible'
    else
        y.style.visibility = 'hidden'
}

function vote(){
    z = document.getElementById('vote')
    l = document.getElementById('nationality')

    if( z.value == 18 && l.value == 'indian')
        alert("Vote carefully")
    else if( z.value > 18 && l.value == 'indian')
        alert("You know whom to vote")
    else if(z.value < 18 || l.value != 'indian')
    alert(" You cannot vote")
}