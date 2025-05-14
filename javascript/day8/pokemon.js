const data = document.querySelector('form')
const id = document.querySelector('input')
const poke = "https://pokeapi.co/api/v2/pokemon/"
const photo = document.createElement('img')
document.body.appendChild(photo)

const photo2 = document.createElement('img')
document.body.appendChild(photo2)

data.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = id.value.toLowerCase()
    console.log(name)
    id.value = ""

    fetch(poke + name)
        .then(res => {
            if (!res.ok)
                throw new error('Pokemon not found')
            return res.json()
        })
        .then(xyz => {
            photo.src = xyz.sprites.front_default
        })
        .catch(error => {
            alert("Pokemon not found")
        })

    fetch(poke + name)
        .then(res => {
            if (!res.ok)
                throw new error('Pokemon not found')
            return res.json()
        })
        .then(xyz => {
            console.log(xyz)
            photo2.src = xyz.sprites.back_default
        })
        .catch(error => {
            alert("Pokemon not found")
        })
})