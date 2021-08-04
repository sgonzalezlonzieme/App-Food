const {Router} = require('express');
const axios = require('axios');
const {Recipe} = require('../db.js')
const { v4: uuidv4 } = require('uuid');

const router = Router()

router.post('/', async (req, res)=>{
     let id = uuidv4();
     const {title, summary, spoonacularScore,  healthScore,  analyzedInstructions, types} = req.body;

     try{
     const New = await Recipe.create({
        id,
        title: title,
        summary: summary,
        spoonacularScore: spoonacularScore,
        healthScore: healthScore,
        analyzedInstructions: analyzedInstructions,
     })
     
     await New.addDiets(types);

     res.json(New)

     }catch(error){
          res.send(error)
     }

})

module.exports = router;