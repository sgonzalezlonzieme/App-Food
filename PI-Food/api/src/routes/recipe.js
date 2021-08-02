const {Router} = require('express');
const axios = require('axios').default;

const router = Router()

router.post('/', async (req, res)=>{
   

  res.json('Mensaje de prueba de recipe')

     
})

module.exports = router;