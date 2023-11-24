
function asyncFn(callback){
    setTimeout(()=> {
        try{
            let a = 3 + z;
            callback(null, a);
        }catch(e){
            callback(e);
        }
    },1000);
}

asyncFn((err, data) => {
    if(err){
        console.error('We have an error');
        console.error(err);
        return;
    }

    console.log('Everything is going well:', data);
})