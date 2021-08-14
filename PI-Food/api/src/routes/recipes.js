const {Router} = require('express');
const axios = require('axios').default;
const {Recipe, Diet} = require('../db.js')
const validate = require('uuid-validate');
const {Op}  = require('sequelize')
const {API_KEY} = process.env;


const router = Router()

router.get('/', async (req, res, next) => { 

    const {name} = req.query;


    if(!name){
        let recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
       
        let recipesAll = recipes.data.results
        
                let recipesAll1 = recipesAll.map(p => {return {  
                    title: p.title,
                    image: p.image,
                    diets: p.diets,
                    id: p.id,
                    spoonacularScore: p.spoonacularScore
                }
            })

        const database = await Recipe.findAll({include: Diet})

        //let result3 = recipesAll.concat(database)

        let databaseResult = database.map(p => {return {  
            title: p.title,
            image: p.image,
            diets: p.diets.map(r => r.name),
            id: p.id,
            spoonacularScore: p.spoonacularScore,
        }})
         
        let render = recipesAll1.concat(databaseResult)
        res.send(render)
        return res.send(render)
    } 
    try{
        const findDatabase = await Recipe.findAll({
            where: {
               title: {
                    [Op.iLike]: `%${name}%`,
                }
            },
            include: Diet      
        });
          
        let recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)

        let recipesAll = recipes.data.results
                                                //Para evitar el sensite case
        let result2 = recipesAll.filter(obj => {return obj.title.toLowerCase().includes(name.toLowerCase())})

      
        let mapResultApi = result2.map(p => {return {
            title: p.title,
            image: p.image,
            diets: p.diets,
            id: p.id,
        }})

        let mapResultData = findDatabase.map(p => {return {
            title: p.title,
            image: p.image,
            diets: p.diets.map(p => p.name),
            id: p.id,
        }})
       

        let result3 = mapResultData.concat(mapResultApi)
    
        return res.send(result3)

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
        
             let {image, title,
                dishTypes, diets, summary, spoonacularScore, healthScore, analyzedInstructions, id} = filtrado

             let obj = {
                id: id,
                image: image,
                title: title,
                dishTypes: dishTypes,
                diets: diets.map(p => p.name),
                summary: summary,
                spoonacularScore: spoonacularScore,
                healthScore: healthScore,
                analyzedInstructions,
        }

             if(filtrado){
                 res.send(obj)
             }else{
                 res.send('No recipes found')
             }
         
     }else if(!validate(idReceta)){
   
            let recipes = await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=cfe63d3aea03481db67fdb27f394dcd6`)
     
            let recipesAll = recipes.data
    
            let {image, title,
                dishTypes, diets, summary, spoonacularScore, healthScore, analyzedInstructions, id} = recipesAll
                
            let analyzedResult1 = analyzedInstructions[0]?.steps.map(p => p.step)
        
            
            let obj = {
                id: id,
                image: image,
                title: title,
                dishTypes: dishTypes,
                diets: diets,
                summary: summary,
                spoonacularScore: spoonacularScore,
                healthScore: healthScore,
                analyzedInstructions: analyzedResult1,
        }
           return res.json(obj)

      }else{
        res.json('No recipes found')
    
       }}catch(error){
           next(error);
       }}) 



module.exports = router;