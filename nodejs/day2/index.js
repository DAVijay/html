const task = require('./task')
const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === "/tasks" && req.method === 'GET'){
        res.writeHead(200, {'content-type' : 'application/json'})
        res.end(JSON.stringify(task))
    }else{
        res.writeHead(404, {'content-type' : 'application/json'})
        res.end(JSON.stringify({message : 'GFG'}))
    }
})

server.listen(3003,()=>{
    console.log("welcome to api")
})