//const process = require('process');


process.on('beforeExit', () => {
    console.log('This is before the process end');
   /*  setTimeout(() => {
        console.log('This is going to cause a infinite cicle');
    },1000); */
});

process.on('exit', () => {
    console.log('The process end');
    setTimeout(() => {
        console.log('This is not going to execute');
    },0)
});

process.on('uncaughtException', (err, origen) => {
    console.log('An error happen');
    setTimeout(() => {
        console.log('Im a timeout that came from the uncaughtException');
    },0);
});

fnUndefined();

console.log('Im just a simple console.log, but im not going to be execute cause the error');

