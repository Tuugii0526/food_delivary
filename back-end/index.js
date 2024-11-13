import express from 'express'
const PORT=1234;
const app=express()
 app.listen(PORT,()=>{
    console.log(`server started working at: http://localhost:${PORT}`)
 })
 app.get('/',(req,res)=>{
res.json(
    {
        success:'Yes you have successfully gotten a response from the server'
    }
)
 })
 app.get('/exp',(req,res)=>{
   res.json({
    success:'Yes iam working'
   })
 })