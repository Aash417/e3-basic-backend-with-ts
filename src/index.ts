require('dotenv').config()

import express,{ Express, } from 'express'

const app: Express = express()
const port: number = 4000;

app.get('/',(req,res) => {
  res.send('hello form ts server')
})
app.get('/check',(req,res) => {
  res.send('checking 1 2 3...!')
})
app.get('/you',(req,res) => {
  res.send('<h2>jai shri ram</h2>')
})

app.listen(process.env.PORT , ()=> console.log('running on 4000'))