//Buffer with 4 free spaces
const buffer = Buffer.alloc(4);
console.log(buffer);

//Buffer create from array
const bufferArray = Buffer.from([3,4,5]);
console.log(bufferArray);

//Buffer data string type
const bufferString = Buffer.from('Hello');
console.log(bufferString);
console.log(bufferString.toString());

//ABC in buffer
const bufferABC = Buffer.alloc(26);

for(let i = 0; i < bufferABC.length; i++){
    bufferABC[i] = i + 97 + ' ';
}
console.log(bufferABC.toString());
