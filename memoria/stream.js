const fs = require('fs');
const { Transform } = require('stream');

//creating a transform to upper case the words
const upperCaseTr = new Transform({
    transform(chunk, encoding, callback){
        //convert the chunk to upper case
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

let readStream = fs.createReadStream(__dirname + '/input.txt');
let data = '';
readStream.setEncoding('UTF8');

readStream.on('data', (chunk)=>{
    data += chunk;
})

readStream.pipe(upperCaseTr).pipe(process.stdout);

readStream.on('end', ()=> {
    console.log(data);
})

