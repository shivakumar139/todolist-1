const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const APP_PORT = process.env.APP_PORT || 3000;
var items = [];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  var today = new Date();
  var options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day = today.toLocaleDateString("en-US",options);
  res.render("list",{kindOfDay: day, newListItems:items});
});

app.post("/",function(req,res){
  var item = req.body.newItem;
  items.push(item)
  res.redirect("/");
});
app.listen(APP_PORT,function(){
  console.log("Server started on port 3000");
});
