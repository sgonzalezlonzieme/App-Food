const {Router} = require('express');
const {Recipe} = require('../db.js')
const { v4: uuidv4 } = require('uuid');

const router = Router()

router.post('/', async (req, res, next)=>{
     
     try{

     let id = uuidv4();
     
     const {title, summary, spoonacularScore,  healthScore,  analyzedInstructions, types} = req.body;

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
       next(error)
     }

})

module.exports = router;