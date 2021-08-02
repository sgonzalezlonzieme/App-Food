const {Router} = require('express');
const axios = require('axios').default;
const router = Router()

router.get('/', async (req, res) => {

    res.send("hola")

}) 

module.exports = router;