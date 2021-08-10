const {Router} = require('express');
const axios = require('axios');
const router = Router()
const {Diet} = require('../db.js')
const {API_KEY} = process.env;


router.get('/', async (req, res, next) => {
  
   try{

     let allDiets = await Diet.findAll()
  
     if(!allDiets.length){
    
       let recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=50`)
       let recipesAll = recipes.data.results
       let result = recipesAll.map(p => p.diets)
       let result2 = result.flat()
       let recipesArray = [];
       result2.forEach(elem => {
           if(!recipesArray.includes(elem)){
               recipesArray.push(elem)
           }
       })
       console.log(recipesArray)
       let arreglo2 = []
       recipesArray.map(p => arreglo2.push({name:p}))
       const bulk = await Diet.bulkCreate(arreglo2)
       let names = bulk.map(p => p.name)
       res.json(names);
       //adentro de recipesArray están todas las dietas menos vegetarian
     }else{    
       let names = allDiets.map(p => p.name)
       res.json(names);  
   }
   }catch(error){
     next(error)
   }
 }) 

module.exports = router;