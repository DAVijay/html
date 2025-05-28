console.log("hello")
console.log("bye")

setTimeout(() => {
    console.log("I am lerning Backend")
}, 2000)


const stop = setInterval(() => {
    console.log("I take Breaks")
}, 1000)

setTimeout(()=>{
    clearInterval(stop)
    console.log("no more breaks")
},6000)

