const { json } = require('express');
var express = require('express');
const upload = require('./multer');
const pool = require('./pool');
var router = express.Router();
var Booking=require('./Schema/BookingSchema')
/* GET home page. */
router.post('/addbookin',upload.single() ,function(req, res, next) {
    console.log("sssssssssss",req.body)
pool.query('insert into booking(clientid,servicesid,date,slot,price) values(?,?,?,?,?)',[req.body.clientid,req.body.services,req.body.date,req.body.slot,req.body.price], function(error,result){
    if(error)
    {       
        console.log(error)
      
       return res.status(500).json({status:false})
     
    }
    else{
   
       return  res.status(200).json({status:true})
    }
})
});

router.post('/addbooking',upload.single() , async (req, res) => {
  try {
    const appointment = new Booking(req.body);
    await appointment.save();
    return  res.status(200).json({status:true})
  } catch (error) {
    console.log(error)
      
       return res.status(500).json({status:false})
  }
});

router.get('/displayallbookings',function(req,res,next){
   
    pool.query("select * from booking",function(error,result){
      if(error)
       { console.log(error)
         return res.status(500).json({Data:[]})
          
       }
       else{
          console.log(result)
         return res.status(200).json({data:result})
       }
    })
 })


module.exports = router;