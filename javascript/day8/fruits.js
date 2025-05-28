fetch("https://sweetfruit.vercel.app/fruits")
    .then(data => data.json())
    .then(data => {
        let z = document.querySelectorAll('span')
        z[0].textContent = data[5].name
        z[1].textContent = data[5].taste

        z[2].textContent += data[1].name
        z[2].textContent += ", " + data[7].name

        z[3].textContent += data[1].taste
        z[3].textContent += ", " + data[7].taste

        for (let i = 0; i < data.length; i++) {
            if (data[i].taste == "Sweet")
                z[4].textContent += ", " + data[i].name
        }
    })