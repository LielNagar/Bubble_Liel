const express=require('express')
const knex = require('../../knex/knex')
const router= new express.Router()

router.get('/notes', async(req,res)=>{
    try{
        const notes= await knex.select().from('notes').where('is_deleted', false)
        if(!notes) res.status(404).send()
        var data={
            data:{
                items:notes
            }
        }
        res.send(data)
    }catch(e){
        res.status(400).send(e)
    }
})
    
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