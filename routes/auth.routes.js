const {Router} = require ('express')
const User =require('../routes/models/User')
const router =Router()


// /api/auth/register
router.post('/register', async (req, res) => {
    try{

        const {email, passwotd} = req.body

        const candidate = await User.findOne({email})
        if (candidate){
            res.status(400).json({message: 'Uzytkownik z takim email juz istneje'})
        }

        



    } catch (e) {
        res.status(500).json({message: 'Wystapil blad'})    
    }
})


// /api/auth/login
router.post('/login', async (req, res) => {
    
})

module.exports = router