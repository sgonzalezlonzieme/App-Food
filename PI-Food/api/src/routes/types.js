const {Router} = require('express');
const axios = require('axios');
const router = Router()
const {Diet} = require('../db.js')

router.get('/', async (req, res) => {
  
    let allDiets = await Diet.findAll()
 
    if(!allDiets.length){
    try{
      // const diets = [{id, name:'Gluten Free'}, {id, name:'Ketogenic'}]
      let recipes = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=bc992422a742427e84181e1ef7f78961&addRecipeInformation=true&number=50')
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
    }catch(error){
        res.send(error)
    }
  }else{    
    let names = allDiets.map(p => p.name)
    res.json(names);

  }


 }) 

module.exports = router;