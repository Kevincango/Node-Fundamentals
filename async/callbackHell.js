function greeting(name,myCallback){
    console.log('Begin of the process...');
    setTimeout(()=>{
        console.log(`Hello ${name}!!`);
        myCallback(name);
    },1000);
}

function talking(callbackTalk){
    setTimeout(()=>{
        console.log('Bla bla bla...');
        callbackTalk();
    },1500);
}

function goodbye(name){
    setTimeout(()=>{
        console.log('End of the process...');
        console.log(`Goodbye ${name}!!`);
    },2500);
}

function conversation(name,count){
    if(count > 0){
        talking(()=>{conversation(name, --count)});
    }else{
        goodbye(name);
    }
}

greeting('Kevin', (name)=>{conversation(name,3)});

