const http = require('http');
const axios = require('axios');
const port =4000;
const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    const response =await axios.get("https://api.github.com/users");
    const alluser=response.data;
    let frontend=`<html><head></head><body>`
    alluser.forEach((user)=>{
        frontend+=`<div><img src = ${user.avatar_url}></div>`

    })
    frontend+=`</body></html>`

    res.end(frontend);

});
server.listen(port,()=>{
    console.log("first server listening on port" + port)
});