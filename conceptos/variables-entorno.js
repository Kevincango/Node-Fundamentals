let nombre = process.env.NOMBRE || 'name not defined';
let web = process.env.WEB || 'web not defined';

console.log({nombre, web});

console.log('I got second');