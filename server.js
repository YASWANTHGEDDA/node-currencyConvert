const express = require("express");
const path = require("path");
const app = express();
const port = 2039;

// const replica = process.env.APP_NAME || 


app.use('/',(req,res)=> {
  res.sendFile(path.join(__dirname,'index.html'));
  console.log(`request serverd by the  app`);
  
});

app.listen(port,() =>{
  console.log(` is listening on the port:${port}`);
  
})
