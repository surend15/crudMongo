const qry=require('./qry')
const route=require('express').Router()

route.get('/see',qry.see)
route.post('/reg',qry.register)

module.exports=route