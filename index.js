const express = require("express");

const app = express();

app.use("/test", (req, res)=>{
    console.log("Received request successful");
    res.status(200).send("successful")

});
app.listen(3000, ()=>{
    console.log("I am listening to port 3000")
});