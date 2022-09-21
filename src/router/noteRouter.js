const express=require('express')
const knex = require('../../knex/knex')
const router= new express.Router()

router.post('/note', async(req,res)=>{
    try{
        knex('notes').insert({
            title: req.body.data.title,
            content: req.body.data.content,
            author: req.body.data.author,
        }).then(()=>{
            res.status(201).send()
        })
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports= router