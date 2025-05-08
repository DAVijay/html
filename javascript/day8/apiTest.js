fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(data => {
        let z = document.querySelectorAll('span')
        z[0].textContent = data[9].name
        z[1].textContent = data[9].email
        z[2].textContent = data[9].username
    })