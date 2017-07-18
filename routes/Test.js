var express = require('express');
var router = express.Router();
var Test=require('../models/Test');

/**
 * @apiDoc {get} /:id 根据ID请求信息.
 * @apiName getId.
 * @apiGroup test.
 * @apiParam {Number} id unique.
 * @apiSuccess {Object} firstname Firstname of the User.
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "content": "This is an example content"
 * }
 */
router.get('/:id?',function(req,res,next){
  
  if(req.params.id){
  
    Test.getTestById(req.params.id,function(err,rows){
      
      if(err)
      {
        res.json({
          "status": "failure",
          "message": err
        });
      }
      else{
        res.json(
          { "status": "success",
            "data": rows
          }
        );
      }
    });
  }
  else{
  
    Test.getAllTest(function(err,rows){
      
      if(err)
      {
        res.json({
          "status": "failure",
          "message": err
        });
      }
      else
      {
        res.json({ "status": "success",
          "data": rows
        });
      }
      
    });
  }
});

module.exports=router;
