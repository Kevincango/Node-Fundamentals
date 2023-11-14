function greeting(name, myCallback){
    console.log('Begin of the process...');
    setTimeout(()=>{
        console.log(`Hello ${name}!!`);
        myCallback(name);
    },1500);
}

function goodbye(name){
    console.log('End of the process...');
    setTimeout(()=>{
        console.log(`Goodbye ${name}!!`);
    },2500);
}

greeting('Kevin', goodbye);

