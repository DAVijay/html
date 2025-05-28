const fs = require('fs')

fs.writeFileSync("hello.txt","Node js text file")


console.log("GM")
fs.readFile("hello.txt",'utf-8',(err,data) =>{
    if(err){
        console.log("error", err)
        return
    }
    console.log(data)
})
console.log("GN")