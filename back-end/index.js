import express from 'express'
const app=express()
 
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
 app.listen(_,()=>{
  console.log('Service started working')
})