const {createServer} = require('http');

/* createServer((req, res)=> {
    console.log('New petition');
    console.log(req.url);

    res.writeHead(201, {'Content-Type': 'text/plain'});
    res.write('Response from the server');
    res.end();
}).listen(3000); */

function router(req, res){
    console.log('New request');
    console.log(req.url);

    switch(req.url){
        case '/':
            let hi = hello();
            res.write(`<h1>${hi}</h1>`);
            res.end();
            break;
        default:
            res.write('404: The server dont know what you require');
            res.end();
    }
}

function hello(){
    return 'Hello my friend';
}
createServer(router).listen(3000);