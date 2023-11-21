import {hash, compare} from "bcrypt";

//Using callbacks
const password = '1234!';

hash(password, 5, (err, hash) => {
    console.log(hash);
    compare(password, hash, (err, res) => {
        console.log(res);
    });
})

//Using promises
const password2 = '123!';

hash(password2, 5)
    .then(hash => {
        console.log(hash);
        return compare(password2, hash);
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })

//Using async await

const password3 = 'kcg123!';

async function verifyPassword(){
    try{
        const hashedPassword = await hash(password3, 5);
        const match = await compare(password3, hashedPassword);

        console.log(hashedPassword);
        console.log(match);
    }catch(err){
        console.error(err);
    }
}

verifyPassword();