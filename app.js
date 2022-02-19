const express=require('express');
const ejs=require("ejs");
const app=express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home2");
})

app.get("/techmodule",function(req,res){
    res.render("../SpectrumModule/technical");

});

app.get("/litmodule", function(req, res){
    res.render("../SpectrumModule/literary");
});
app.get("/funmodule", function(req, res){
    res.render("../SpectrumModule/fun")
});


app.listen(process.env.PORT || 3000,function(){
    console.log("started server");
});