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

router.get( '/', async (req, res) =>  {
    try{
        const links = await Link.find({ owner: null }) // 
        res.json(links )

    } catch (e) {
        res.status(500).json({message: 'Wystapil blad'})    
    }
}
)

router.get( '/:id', async (req, res) =>  {
    try{

        const link = await Link.findById(req.params.id)
        res.json(Link)
    } catch (e) {
        res.status(500).json({message: 'Wystapil blad'})    
    }
}
)
try{

} catch (e) {
res.status(500).json({message: 'Wystapil blad'})
}



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