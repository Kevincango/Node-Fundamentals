console.clear();

//I group consoles
console.group('Basic console types');

//to print in the console
console.log('I am a console.log');

//similar to console.log but it use to inform
console.info('I am a console.info');

//to show that a error occur
console.error('I am a console.error');

// to warn a a but a possible error o just a warning
console.warn('I am a console.warn');

console.groupEnd('Basic console types');

//I display a table to show the properties of a object
const personalInformation = {
    'kevin': {
        age: 25,
        profesion: 'Enginner',
    },
    'Nicolle':{
        age: 20,
        profesion: 'student',
    }
}

console.table(personalInformation);

//I take the time in ms
console.time('PersonalCount timer')

//I count in autoincremental
const personalCount = (timeNumer) => {
    for(let i = 0; i < timeNumer; i++){
        console.count(`I am the count`);
        if(i === 2){
            console.log('I reset the count');
            console.countReset('I am the count');
        }
    }
}

personalCount(6);

//I am the time end count
console.timeEnd('PersonalCount timer');
