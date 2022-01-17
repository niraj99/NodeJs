const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const user = require("./model/users");
var methodOverride = require('method-override');

mongoose.connect("mongodb://localhost:27017/assignment_4");


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));
app.use(methodOverride("_method"));


app.set("views", "./views");
app.set('view engine','ejs');


app.get("/" ,async (req,res) =>{
    var userArr = await user.find();
    res.render("landing",{userArr});
});

app.get("/form",(req,res) =>{
    res.render("form");

});

app.post("/user/add",async (req,res)=>{
    if(req.body.isPromoted == "true" || req.body.isPromoted == "false"){
        await user.create({
            name : req.body.name,
            email: req.body.email,
            isPromoted : req.body.isPromoted
        });
    }else{
        await user.create({
            name : req.body.name,
            email: req.body.email,
        });
    }
    
    res.redirect("/");
})

app.put("/users/:id", async(req,res) =>{

    var d = await user.find({_id : req.params.id});
    var change = false;
    if(d[0].isPromoted === null || d[0].isPromoted === false){
        change = true;
    }else{
        change = false;
    }

    await user.updateOne({_id : req.params.id},{isPromoted: change});
    res.redirect("/");
})

app.delete("/users/:id", async(req,res) =>{
    await user.deleteOne({_id : req.params.id});
    res.redirect("/");
})


app.listen(3000, ()=>{
    console.log("Server is Running at Port 3000");
});