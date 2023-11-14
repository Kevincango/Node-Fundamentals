
let i = 0;
const interval = setInterval(()=>{
    console.log('Kevin Cantu Gomez');
    if(i === 2){
        clearInterval(interval);
    }
    i++;
}, 1000);

setImmediate(()=>{
    console.log('I am like setTimeout but without a timer, but i still async');
})

console.log('Im going first')
console.log(__filename);
console.log(__dirname);