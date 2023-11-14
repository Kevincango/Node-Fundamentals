
// With callback devolution.
//const fs = require('fs');

/* function readFile(path, cb){
    fs.readFile(path, (error, data)=>{
        cb(data.toString());
    })
}

function writeFile(path, content, cb){
    fs.writeFile(path, content, (error,)=>{
        if(error){
            console.error('I cant write in the file');
        }else{
            console.log('We correctly write in the file');
        }
    });
}

function deleteFile(path, cb){
    fs.unlink(path, cb);
}

readFile(__dirname + '/file.txt', console.log);
writeFile(__dirname + '/file1.txt', 'Im a new file');
deleteFile(__dirname + '/file1.txt', console.log); */

// With promises, using async await

const fs = require('fs').promises;

async function readFile(path){
    try{
        const data = await fs.readFile(path);
        console.log(data.toString());
    }catch(error){
        console.error(error);
    }
}

async function writeFile(path, content){
    try{
        await fs.writeFile(path, content);
    }catch(error){
        console.error(error);
    }
}

async function deleteFile(path){
    try{
        await fs.unlink(path);
    }catch(error){
        console.error(error);
    }
}

readFile(__dirname + '/file.txt');
writeFile(__dirname + '/asyncFile.txt', 'Kevin creatd me with fs.promises');
readFile(__dirname + '/asyncFile.txt');
writeFile(__dirname + '/fileEliminate.txt', 'He is going to delete me');
readFile(__dirname + '/fileEliminate.txt');
deleteFile(__dirname + '/fileEliminate.txt');

