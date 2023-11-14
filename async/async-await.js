function greeting(name){
    console.log('Begin of the process...');
    return new Promise((resolve,reject)=>{
        name ? setTimeout(()=>{
                console.log(`Hello ${name}!!`);
                resolve(name); // we resolve the promise and then we send this parameter to the next promise if needed
            },1000) :
            reject('Error: the name is undefined');
    });
}

function talking(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                console.log('Bla bla bla...');
                resolve();//we just resolve the promise but we dont return anything;
            },1500);
    });
}

function goodbye(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('End of the process...');
            console.log(`Goodbye ${name}!!`);
            resolve(); //we just indicate that the promise is resolve
        },2500);
    });
}

async function main(){
    let name = await greeting('Kevin');
    await talking();
    await talking()
    await goodbye(name);
}

main();