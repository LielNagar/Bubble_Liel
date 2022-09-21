const express=require('express')
const knex = require('../../knex/knex')
const router= new express.Router()

router.get('/allnotes', async(req,res)=>{
    try{
        const notes= await knex.select().from('notes')
        if(!notes) res.status(404).send()
        res.send(notes)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports= router