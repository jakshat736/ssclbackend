var express = require('express');
var router = express.Router();
var pool=require('./pool');
const upload = require('./multer');



/* GET home page. */


router.post('/chkadminlogin',upload.single() ,function(req, res, next) {
    console.log("sssssssssss",req.body)
    pool.query('select * from adminlogin where adminid=? and adminpassword=?',[req.body.adminid,req.body.adminpassword],function(error,result){
        if(error)
        {console.log(error)
            return res.status(500).json({status: false,error:error})
        }
        else{
            if(result.length==1)
            {
             
                return res.status(200).json({status: true,data: result})
            }
            else
            {
                return res.status(200).json({status: false,error:error})
            }
        }
    
      })
    });

module.exports = router;