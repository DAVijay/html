const http = require('http')

const server = http.createServer((req,res)=>{})

server.listen(5004, ()=>{
    console.log("server ready")
})

