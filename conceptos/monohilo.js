console.log('Hello World');

let i = 0;
setInterval(()=> {
    console.log(i);
    i++;
    if(i === 5){
        console.log('We throw an error');
        let j = 5 + z;
    }
},1000);

console.log('I got after!');