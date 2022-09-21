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
        console.log(e)
        res.status(400).send(e)
    }
})

module.exports= router