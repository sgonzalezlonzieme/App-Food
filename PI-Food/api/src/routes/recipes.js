const {Router} = require('express');
const axios = require('axios').default;


const router = Router()

router.get('/', async (req, res) => {
    const {name} = req.query;
    

    
})


router.get('/recipes/{idReceta}', async (req, res) => {

    res.json('Mensaje de prueba recipes')
})
    



module.exports = router;