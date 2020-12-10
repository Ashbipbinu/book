var express = require("express");
const booksRouter = express.Router();
function router(nav){

    var books = [
        {
                title : "Tom and Jerry",
                author : "Joseph Babera",
                gener : "Cartoon",
                img: "tom.jpg"
                
        },
        {
                title : "Harry Potter",
                author : "J.K Rowling",
                gener : "Fantasy",
                img: "harry.jpg" 
                
        },
        {
                title : "Narnia",
                author : "C J Lewis",
                gener : "Fantasy",
                img:"narnia.jpg"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                
        }
    ]
    console.log("exit");
    
    booksRouter.get('/',function(req,res){
        
    
        res.render("books",{
                nav,    
                title:'Library',
                books
        })
        console.log("entered"); 
        
    
    })
    
    
    
    booksRouter.get("/:id",function(req,res){
    
    console.log("entered 123");
    const id = req.params.id
    console.log("exit1")
    
    res.render("book",{
        nav,   
        title:'Library',
        book: books[id]
    })
    console.log("exit")
    })
    return booksRouter;
}


module.exports = router;
