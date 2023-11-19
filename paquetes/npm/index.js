const isOdd = require('is-odd');

function isOddOrEven(num){
    isOdd(num) ? console.log(`the number ${num} is odd`) : console.log(`the number ${num} is even`);

}

isOddOrEven(13);

//personal made home function
function oddOrEven(num){
    num % 2 === 0 ? console.log('is even') : console.log('is odd'); 
}

oddOrEven(1);