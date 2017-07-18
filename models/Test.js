var db=require('../dbconnection');
var Test={
  
  getAllTest:function(callback){
    
    return db.query("Select * from menuinfo",callback);
    
  },
  getTestById:function(id,callback){
    
    return db.query("select * from menuinfo where menuid=?",[id],callback);
  }
  
};
module.exports=Test;