const {Router} = require('express');
const axios = require('axios');
const {Recipe} = require('../db.js')
const { v4: uuidv4 } = require('uuid');

const router = Router()

router.post('/', async (req, res)=>{
     let id = uuidv4();
     const {title, summary, spoonacularScore,  healthScore,  analyzedInstructions, types} = req.body;

     try{
     const newRecipe = await Recipe.create({
        id,
        title: title,
        summary: summary,
        spoonacularScore: spoonacularScore,
        healthScore: healthScore,
        analyzedInstructions: analyzedInstructions,
     })
     
     await newRecipe.addDiets(types);
     
     res.json(newRecipe)

     }catch(error){
          res.send(error)
     }

})

module.exports = router;