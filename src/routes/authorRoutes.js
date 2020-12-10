var express = require("express");
const authorRouter = express.Router();
function router(nav){

    var authors = [
        {
                name : "Charles Dickens",
                books : "Old Twist",
                img: "charles.jfif"
                
        },
        {
                name : "Ernest Hemingway",
                books : "The oldman and the sea",
                img: "Ernest Hemingway.jfif" 
                
        },
        {
                name : "Mark Twain",
                books : "Life on Mississippi",
                img:"mark twain.jfif"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                
        }
    ]
    console.log("exit");
    
    authorRouter.get('/',function(req,res){
        
    
        res.render("authors",{
                nav,    
                title:'Library',
                authors
        })
        console.log("entered");
        
    
    })
    
    
    
    authorRouter.get("/:id",function(req,res){
    
    console.log("entered 123");
    const id = req.params.id
    console.log("exit1")
    
    res.render("author",{ //change to author when the file is created
        nav,   
        title:'Library',
        author: authors[id]
    })
    console.log("exit")
    })
    return authorRouter;
}


module.exports = router;
