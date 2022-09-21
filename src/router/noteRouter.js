const express=require('express')
const knex = require('../../knex/knex')
const router= new express.Router()

router.patch('/note/:id', async(req,res)=>{
    try{
        knex('notes').where('id',req.params.id).update({
            is_deleted:true
        }).then(()=>{
            res.status(200).send()
        })
    }catch(e){
        res.status(400).send()
    }
})

module.exports= router