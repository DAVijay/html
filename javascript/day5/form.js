let username = document.querySelectorAll('input')[0]
let pass = document.querySelectorAll('input')[1]
let myData = document.querySelector('form')

console.log(myData)

myData.addEventListener('submit', (event) => {

    event.preventDefault() /* not refrest and goes out */

    if (username.value.trim() == "" || pass.value.trim() == "") {
        alert("No blanks Allowed")
        return
    }

    if (pass.value.length < 6) {
        alert("Password must be 6 character")
        return
    }

    if (pass.value.length > 15) {
        alert("Password is big")
        return
    }
    else
        window.open('welcome.html', '_blank')
})