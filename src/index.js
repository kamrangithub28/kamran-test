import express from 'express'

const app = express()

app.get('/hello', (req, res)=>{
    res.json({name:'Rahman Bros'})
})

app.listen(9000)