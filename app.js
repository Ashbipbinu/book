var express = require("express");

var app = new express();

const port = process.env.PORT || 3000;

const nav = [
        {
                link:'/books',name:'Books'
        },
        {
                link:'/authors',name:'Authors'
        },
        {
                link:'/Addbooks',name:'Add Books'
        },
        {
                link:'/AddAuthor',name:'add authors'
        },
        {
                link:'/login',name:'Login'
        },
        {
                link:'/signUp',name:'signup'
        }
];




const booksRouter = require("./src/routes/bookRoutes")(nav);

const authorRouter = require("./src/routes/authorRoutes")(nav);

const loginRouter = require("./src/routes/loginRoutes")(nav);

const signUpRouter = require("./src/routes/signUpRoutes")(nav);

const addBookRouter = require("./src/routes/addBRoutes")(nav);

const addAuthorRouter = require("./src/routes/addARoutes")(nav);


app.use(express.static(__dirname+"/public"))
app.set("view engine","ejs");
app.set("views","./src/views")
app.use("/books",booksRouter);
app.use("/authors",authorRouter);
app.use("/login",loginRouter);
app.use("/signUp",signUpRouter);
app.use("/Addbooks",addBookRouter);
app.use("/AddAuthor",addAuthorRouter);



app.get("/",function(req,res){
      
        res.render("index",
        {       nav,
                title:'Library'
                
        })
});
        

       

app.listen(port,()=>{console.log("Server Ready at " +port)});



