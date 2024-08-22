const express = require("express")
const app = express()
const PORT = 5000


app.use(express.static('Public'))
app.get("", (request, response)=>{
    response.sendFile(__dirname + "/Public/index.html")
})


app.get("/signup", (request, response)=>{
    response.sendFile(__dirname + "/Public/signup.html")
})

app.get("/dashboard", (request, response)=>{
    response.sendFile(__dirname + "/Public/dashboard.html")
})



app.listen(PORT, ()=>{
    console.log(`I am running on port ${PORT}`);
})