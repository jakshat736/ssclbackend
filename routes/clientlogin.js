const { json } = require('express');
var express = require('express');
const upload = require('./multer');
const pool = require('./pool');
var router = express.Router();
var Client=require('./Schema/ClientSchema')

/* GET home page. */

router.post('/signup',upload.single() , async (req, res) => {
    console.log("sssssssssss",req.body)
    try {
      const client = new Client(req.body);
      await client.save();
      return  res.status(200).json({status:true})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false})
      
    }
  });
  

  router.post('/chkclientlogin',upload.single() , async (req, res) => {
    try {
      const client = await Client.findOne({ username: req.body.username, password: req.body.password });
      if (!client) {
        return res.status(200).json({status: false,error:error})
      }
      console.log(client)
      return res.status(200).json({status: true,data: client})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false})
    }
  });
  



router.get('/display_all_products',function(req,res,next){
   
   pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid) as cn,(select S.subcategoryname from subcategory S where S.subcategoryid=P.subcategoryid) as sn from products P",function(error,result){
     if(error)
      { console.log(error)
        return res.status(500).json({Data:[]})
         
      }
      else{
        return res.status(200).json({data:result})
      }
   })
})





module.exports = router;
