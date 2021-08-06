const {Router} = require('express');
const axios = require('axios').default;
const {Recipe, Diet} = require('../db.js')
const validate = require('uuid-validate');
const {Op}  = require('sequelize')


const router = Router()

router.get('/', async (req, res, next) => { 
    try{
        const {name} = req.query;
    
        const findDatabase = await Recipe.findAll({
            where: {
               title: {
                    [Op.iLike]: `%${name}%`,
                }
            },
            include: Diet      
        });
           
          
        let recipes = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=bc992422a742427e84181e1ef7f78961&addRecipeInformation=true&number=100')

        let recipesAll = recipes.data.results

        let result2 = recipesAll.filter(obj => obj.title.includes(name))

        let mapResult = result2.map(p => {return {
            vegetarian: p.vegetarian,
            vegan: p.vegan,
            glutenFree: p.glutenFree,
            dairyFree: p.dairyFree,
            healthScore: p.healthScore,
            spoonacularScore: p.spoonacularScore,
            title: p.title,
            image: p.image,
            summary: p.summary,
            diets: p.diets,
            analyzedInstructions: p.analyzedInstructions,
        }})

        let result3 = findDatabase.concat(mapResult)
    
        res.send(result3)

    }catch(error){

        next(error);
    }
    
})

   router.get('/:id', async (req, res, next)=>{

    const idReceta = req.params.id
    
      try{
          if(validate(idReceta)){
 
             const findDatabase = await Recipe.findAll({include: Diet})
             
             const filtrado = findDatabase.find(p => p.id == idReceta)
        
             if(filtrado){
                 res.send(filtrado)
             }else{
                 res.send('No recipes found')
             }
         
     }else if(!validate(idReceta)){
   
            let recipes = await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=bc992422a742427e84181e1ef7f78961`)
     
            let recipesAll = recipes.data
    
            let {image, title,
                dishTypes, diets, summary, spoonacularScore, healthScore, analyzedInstructions} = recipesAll
            
            let obj = {
                image: image,
                title: title,
                dishTypes: dishTypes,
                diets: diets,
                summary: summary,
                spoonacularScore: spoonacularScore,
                healthScore: healthScore,
                analyzedInstructions: analyzedInstructions,
        }
           return res.json(obj)

      }else{
        res.json('No recipes found')
    
       }}catch(error){
           next(error);
       }}) 



module.exports = router;