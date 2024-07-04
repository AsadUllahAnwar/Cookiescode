const cookieParser = require('cookie-parser');
const express = require ('express');
const app = express();

app.use(cookieParser())


app.get("/", function (req, res) {
    
res.cookie("name", "Asad Ullah");
res.send("Done boss Cookie Set succesfully!");

})

app.get("/readdata", function (req, res) {
   console.log(req.cookies)
   res.send("read data")
    
    })


app.listen(3000); 