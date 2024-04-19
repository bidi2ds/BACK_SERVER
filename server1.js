// 19/04 - criando o primeiro servidor web usando node
const http =require('http');

const server =http.createServer((rreq,res)=>{
    console.log("Efetuando o pedido\n");
    //declarando um header
    res.setHeader('const-type','text/html'),
    res.write("<h1>o que vossa senhoria deseja?</h1>");
    res.write('<h2>dormir</h2>');
    res.write('<h3>cafezinho</h3>');
    res.end();
})

server.listen(3000,'localhost',()=>{
    console.log('Servidor no ar!!!!');
    
})