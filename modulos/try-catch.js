function breakFn(){
    return 3 + z;
}

function callFn(){
    breakFn();
}

function asyncFn(cb){
    setTimeout(()=>{
        try{
            return 3 + z;
        }catch(err){
            cb(err.message);
        }
    },500);
}


try{
    //callFn();
    asyncFn(console.log);
}catch(err){
    console.log(err.message);
}