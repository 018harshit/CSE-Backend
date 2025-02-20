const http = require('http');
const users = [{
    id: 1, name: 'Harshit', email: 'harshit@gmail.com'},
    {
        id: 2, name: 'Harsh', email: 'harsh@gmail.com'
    },
    {id: 3, name: 'Har', email: 'har@gmail.com'
}]
const server = http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"application/json"});
    const namedata = users.map((user)=>{
        return user.name
    });
    res.end(JSON.stringify(namedata));
});
const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);  
});