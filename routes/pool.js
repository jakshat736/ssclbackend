var mysql=require('mysql')
const mongoose=require('mongoose')
const DB='mongodb+srv://Akshat12345:Akshat@cluster0.ouiqyg9.mongodb.net/sscl?retryWrites=true&w=majority'

mongoose.connect(DB,{
   
}).then(()=>{
    console.log('success all good')
}).catch((err)=>console.log('no connection',err))

var pool=mysql.createPool({
host:'localhost',
port:3306,
user:'root',
password:'2209',
database:'sscl',
connectionLimit:100

})
module.exports=pool