let cat = document.querySelector('img')
const myApi = "https://api.thecatapi.com/v1/images/search"
let btn = document.querySelector('button')

// btn.addEventListener('click', () => {
//     fetch(myApi)
//         .then(data => data.json())
//         .then(url => {
//             cat.src = url[0].url
//         })
// })

async function change(){
    try{
        const res = await fetch(myApi)
        const data = await res.json()
        cat.src = data[0].url
    }
    catch(err){
        console.log(err)
    }
}