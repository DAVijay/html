let cat = document.querySelector('img')

const myApi = "https://api.thecatapi.com/v1/images/search"

let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    fetch(myApi)
        .then(data => data.json())
        .then(url => {
            cat.src = url[0].url
        })
})