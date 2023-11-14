const { exec, spawn } = require('child_process');

/* exec('node modulos/consola.js', (error, stdout, stderr) => {
    (error) ? console.error(`Error: ${error}`) : console.log(`Standard out ${stdout}`);
}); */

let process = spawn('node', ['async/promesas.js']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (data) => {
    console.log('Standard out: ' + data.toString());
});

process.on('close', code => {
    console.log(`Process finished with out code: ${code}`);
})




