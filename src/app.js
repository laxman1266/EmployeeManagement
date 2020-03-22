const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname,"./dist/employee-management/")));
app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname+"/dist/employee-management/index.html"));
})
app.listen(port,()=> {
    console.log("Server runs on: "+port);
})