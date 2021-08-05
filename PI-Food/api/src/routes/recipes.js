const {Router} = require('express');
const axios = require('axios').default;
const {Recipe, Diet} = require('../db.js')
const validate = require('uuid-validate');


const router = Router()

router.get('/', async (req, res) => {
    const {name} = req.query;

    const findDatabase = await Recipe.findAll();
    
    const filtrado = findDatabase.filter(p => p.title == name);

    const responder = filtrado.map(p => p.title);
    
    let recipes = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=bc992422a742427e84181e1ef7f78961&addRecipeInformation=true&number=50')
    let recipesAll = recipes.data.results
    let result = recipesAll.map(obj => obj.title)
    let result2 = result.filter(recipe => recipe.includes(name))
     
    let result3 = responder.concat(result2)

    res.send(result3)
    
})

   router.get('/:id', async (req, res)=>{

    const idReceta = req.params.id
    
    if(validate(idReceta)){

        try{
            const findDatabase = await Recipe.findAll({include: Diet})
            
            const filtrado = findDatabase.find(p => p.id == idReceta)

            console.log(filtrado)

            return filtrado ? res.send(filtrado) : res.send('No recipes found')

        }catch(error){
            res.send('Id no valido');
        }
        
    }else if(!validate(idReceta)){
       try{
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

    }catch(error){
        res.send('Id no valido');
    }
       
    }else{
        res.json('No recipes found')
    }})



module.exports = router;