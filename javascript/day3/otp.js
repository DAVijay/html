let z = Math.random()

let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let otp = ''
    for(let i = 0; i < 6; i++){
        otp += Math.floor(Math.random() * 10)
    }

    document.getElementById('s').textContent = otp
    document.querySelector('h3').style.display = 'block'
})