import express from 'express'
const app=express()
const PORT=1234
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
 app.listen(PORT,()=>{
  console.log('Service started working')
})