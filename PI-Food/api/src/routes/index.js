const { Router } = require('express');
const recipeRouter = require('./recipe')
const recipesRouter = require('./recipes')
const typesRouter = require('./types')


const router = Router();

router.use('/recipe', recipeRouter);
router.use('/recipes', recipesRouter);
router.use('/types', typesRouter);


module.exports = router;




