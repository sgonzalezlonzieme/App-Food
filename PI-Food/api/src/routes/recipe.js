const {Router} = require('express');
const {Recipe} = require('../db.js')
const { v4: uuidv4 } = require('uuid');

const router = Router()

router.post('/create', async (req, res, next)=>{
     
     try{

     let id = uuidv4();
     
     const {title, image, summary, spoonacularScore,  healthScore,  analyzedInstructions, diets} = req.body;

     const newRecipe = await Recipe.create({
        image,
        id,
        title: title,
        summary: summary,
        spoonacularScore: spoonacularScore,
        healthScore: healthScore,
        analyzedInstructions: analyzedInstructions,    
     })
          
     await newRecipe.addDiets(diets);
     
     res.json(newRecipe)

     }catch(error){
       next(error)
     }

})

module.exports = router;