const {Router} = require('express')
const router = Router()
const Link = require('../models/Link')

router.post('/generate', async (req, res) => {
try{

} catch (e) {
res.status(500).json({message: 'Wystapil blad'})
}
}
)

router.get( '/', async (req, res) => {
try{

} catch (e) {
res.status(500).json({message: 'Wystapil blad'})
}
}
)

router.get( '/:id', async (req, res) => {
try{

} catch (e) {
res.status(500).json({message: 'Wystapil blad'})
}
}
)



module.exports = router