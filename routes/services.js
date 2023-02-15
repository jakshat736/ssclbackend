const { json } = require('express');
var express = require('express');
const upload = require('./multer');
const pool = require('./pool');
var router = express.Router();
var Service=require('./Schema/ServiceSchema')

/* GET home page. */
router.post('/addservice',upload.single() ,function(req, res, next) {
    console.log("sssssssssss",req.body)
pool.query('insert into services(servicename,servicedetails,price) values(?,?,?)',[req.body.servicename,req.body.servicedetails,req.body.price], function(error,result){
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

router.post('/addservices',upload.single() , async (req, res) => {
   try {
     const service = new Service(req.body);
     await service.save();
     return  res.status(200).json({status:true})
   } catch (error) {
      console.log(error)
    
     return res.status(500).json({status:false})
   }
 });

router.get('/displayallservics',function(req,res,next){
   
   pool.query("select * from services",function(error,result){
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

router.get('/displayallservices', async (req, res) => {
   try {
     const services = await Service.find();
     
     console.log(services)
     return res.status(200).json({data:services})
   } catch (error) {
      console.log(error)
      return res.status(500).json({Data:[]})
   }
 });

router.post('/Edit_product_data',function(req,res,next){
  pool.query('update products set categoryid=?,subcategoryid=?,productname=?,price=?,offerprice=?,stock=?,description=?,rating=?,status=?,salestatus=? where productid=?'
,[req.body.categoryid,req.body.subcategoryid,req.body.productname,req.body.price,req.body.offerprice,req.body.stock,req.body.description,req.body.rating,req.body.status,req.body.salestatus,req.body.productid], function(error,result){
    console.log(req.body)
    console.log(error)
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
router.post('/delete_product_data',function(req,res,next){
  pool.query('delete from products where productid=?',[req.body.productid], function(error,result){
    console.log(req.body)
    console.log(error)
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

router.post('/update_picture',upload.single('picture'),function(req, res ,next) {
  console.log(req.file)
  pool.query('update products set picture=? where productid=?',[req.file.originalname,req.body.productid],function(error,result){
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
  





module.exports = router;
