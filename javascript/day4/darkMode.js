let website = document.querySelector('body')

let btn = document.querySelector('button')

btn.addEventListener('click', () =>{
    website.classList.toggle('night')
    website.style.transition = "1s"

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }
})

if (localStorage.getItem("theme") == "light") {
    website.classList.remove("night")
}
else if (localStorage.getItem("theme") == "dark") {
    website.classList.add("night")
}
else {
    localStorage.setItem("theme", "light")
}