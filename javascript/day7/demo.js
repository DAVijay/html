// function add(a,b){
//     return a+b
// }

// console.log(add(3,4))

// const add1=(x,y)=>{
//     return x+y
// }

// console.log(add1(7,4))

console.log("good morning")

setTimeout(()=>{
    console.log("good night")
},3000)

const z = setInterval(()=>{
    console.log("tea time")
},1000)

setTimeout(()=>{
    clearInterval(z)
    console.log("bye bye")
}, 7000)

console.log("good evening")
