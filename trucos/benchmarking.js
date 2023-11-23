const numbers = [2,4,6,8,10];

console.time('Loop: ');
let totalSum = 0;

numbers.forEach(number => {
    totalSum += number;
})

console.log(totalSum);
console.timeEnd('Loop: ');

console.time('Reduce: ');
let reduceSum = numbers.reduce((a,b) => a + b, 0);
console.log(reduceSum);
console.timeEnd('Reduce: ');

console.time('Total time of Async function: ');

async function fnAsync(){
    console.time('time of setTimeout');
    return new Promise((resolve) => {
        console.timeEnd('time of setTimeout');
        setTimeout(() => {
            console.log('Im a async function execute in a setTimeout');
            resolve();
        },1000);
    });
}

fnAsync()
.then(() => {
    console.timeEnd('Total time of Async function: ')
});