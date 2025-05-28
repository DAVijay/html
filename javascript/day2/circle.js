function change() {
    let x = document.getElementById('a')

    if (x.style.background == 'yellow')
        x.style.background = 'green'
    else if (x.style.background == 'blue')
        x.style.background = 'yellow'
    else if (x.style.background == 'green')
        x.style.background = 'red'
    else x.style.background = 'blue'
}