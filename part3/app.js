const express = require("express")
require("dotenv").config()
const path = require("path")
const app = express()

const server = app.listen(process.env.PORT, function(){
    console.log("listening on port"+server.address().port);
})
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"))
})