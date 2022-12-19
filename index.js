const express = require("express")

const PORT = process.env.PORT || 5000

const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname,'./public')))

app.get('/',(req,res)=>{
     res.render('./index.html')
})

app.listen(PORT,()=>{
    console.log("Spotify started", PORT);
})