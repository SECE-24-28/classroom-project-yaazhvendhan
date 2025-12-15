const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const PORT =4000

app.use(cors())
app.use(express.json())

console.log("connecting...")

mongoose.connect("mongodb://localhost:27017/mycourse").then(()=>    //This is a promise function
{
    console.log("DB connection successful...")
}
).catch((err)=>console.log(err))   


app.listen(PORT,()=>(console.log(`server is running on port ${PORT}`)))