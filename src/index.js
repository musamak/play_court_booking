const port=8070;
const express = require("express");
const app = express();
app.use(express.json());

app.get('/', function (request, response){
    response.send("lol test message");
});

app.post('/', function (request, response){
    
});

app.put('/', function (request, response){
    
});

app.delete('/', function (request, response){
    
});

app.listen(port, ()=>{ console.log("application is running at port: " + port);})