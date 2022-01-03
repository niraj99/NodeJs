const express = require("express");

const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

var userArr = [
    {
        name: "Niraj",
        email: "nirajsahni04@gmail.com"
    },
    {
        name: "Satyam",
        email: "satyamraj@gmail.com"
    },
    {
        name : "Random",
        email : "random@gmail.com"

    }
];

app.set("views", "./views");
app.set('view engine','ejs');


app.get("/" ,(req,res) =>{
    res.render("landing",{userArr});
});

app.get("/form",(req,res) =>{
    res.render("form");

});

app.post("/user/add",urlencodedParser,(req,res)=>{
    userArr.push(req.body);
    res.redirect("/");
})


app.listen(3000, ()=>{
    console.log("Server is Running at Port 3000");
});