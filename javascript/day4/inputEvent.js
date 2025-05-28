document.querySelector('input').addEventListener('input',() => { 

    document.getElementById('s').textContent = document.querySelector('input').value
})

/*
this work after enterning enter key not live

document.querySelector('input').addEventListener('input',() => { 

    document.getElementById('s').textContent = document.querySelector('input').value
})
    */