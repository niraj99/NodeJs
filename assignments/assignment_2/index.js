const fs = require("fs");
const http = require("http");


fs.writeFile("index.html","<h1>Hello World</h1>",(err)=>{
    console.log(err);
})

http.createServer((req,res) =>{
    fs.readFile("./index.html", (err,data) =>{
        if(err){
            console.log(err);
        }else{
            res.end(data);
        }
    })
}).listen(3000,()=>{
    console.log("server is listening at port 3000");
});
