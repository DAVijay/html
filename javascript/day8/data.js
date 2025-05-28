const heros =[{
    name : "SRK",
    age : 58,
    weigth : 65,
    height : 183,
    hobbies : ["reading", "writing", "movies"]
},
{
    name : "salman",
    age : 59,
    weigth : 78,
    height : 180,
    hobbies : ["Cars", "Acting", "movies"]
}]

let z = document.querySelectorAll('span')

z[0].textContent = heros[1].name
z[1].textContent = heros[1].hobbies[1]