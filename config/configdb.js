const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect('mongodb+srv://tanmoysin1997:Iamgood111@blog-app.2swpsxg.mongodb.net/test?retryWrites=true&w=majority');
    console.log("Connection MongoDB SuccessFull !!");
}
main().catch((error) =>{console.log("Connection MongoDB Not Success Full !!");})
