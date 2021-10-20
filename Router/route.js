const express = require("express");
const route = expressRouter();



route.get('/',function(req,res,next){

    console.log("Hello World");
    res.send("<h1>Home</h1>")
})

module.exports = route;