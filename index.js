import dotenv from "dotenv";
import express from "express";

const app= express()
const PORT=4000 

dotenv.config()

app.get("/",(req,res)=>{
    res.send("API running")
})
app.get("/app",(req,res)=>{
    res.send("APP is running")
})
app.get("/head",(req,res)=>{
    res.send('<h1>This is heading block</h1>')
})

app.listen(process.env.PORT , ()=>{
    console.log(`Server running on port ${PORT}`);
    
})