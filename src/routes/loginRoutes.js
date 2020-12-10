var express = require("express");
const loginRouter = express.Router();
function router(nav){

    
    console.log("exit");
    
  loginRouter.get('/',function(req,res){
        
    
        res.render("login",{
                nav,    
                title:'Library',
                
        })
      
        
            console.log("entered");
        
    
        })

    

    
    
    
    // loginRouter.get("/:id",function(req,res){
    
    // console.log("entered 123");
    // const id = req.params.id
    // console.log("exit1")
    
    // res.render("author",{ //change to author when the file is created
    //     nav,   
    //     title:'Library',
    //     author: authors[id]
    // })
    // console.log("exit")
    // })
    return loginRouter;


}




module.exports = router;


  
