const fs = require('fs')
const http = require('http')

http.createServer((req,res)  => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200,{"content-type": "text/html"})
        res.end(data)
    })
}).listen(5000)

console.log("done")