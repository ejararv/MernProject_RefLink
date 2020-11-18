const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
[
    check('email', 'Niekorektny email').isEmail(),
    check('password', 'Minimum 6 znaków').isLength({min: 6}),
    check('first_name', 'Wpisz imie').isLength({min: 1}),
    check('last_name', 'Wpisz Nazwisko').isLength({min:1})
],

    async (req, res) => {
    try{

        const erorrs = validationResult(req)

        if (!erorrs.isEmpty()){
            return res.status(400).json({
                erorrs: erorrs.array(),
                message: 'Blednie dane'
            })
        }


        const {email, password, first_name, last_name} = req.body

        const candidate = await User.findOne({email})
        if (candidate){
            res.status(400).json({message: 'Uzytkownik z takim email juz istneje'})
        }

        const hashePassword =await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashePassword
            ,first_name,last_name
        })

        await user.save()

        res.status(201).json({message: 'Uzytkownik jest dodany'})
        



    } catch (e) {
        res.status(500).json({message: 'Wystapil blad'})    
    }
})


// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Wpisz prawidlowy email').normalizeEmail().isEmail(),
        check('password', 'Wpis haslo').exists()  //должен существовать
    ],
     async (req, res) => {
    
            try{
        
                const erorrs = validationResult(req)
        
                if (!erorrs.isEmpty()){
                    return res.status(400).json({
                        erorrs: erorrs.array(),
                        message: 'Blednie dane'
                    })
                }
        
        const {email, password} = req.body



        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({message: 'Nie znaleziono takiego uzytkownika'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Bledne haslo, sprobuj ponownie'})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            { expiresIn: '1h'}

        )
        
            res.json({ token, userId: user.id})
                
        
        
        
            } catch (e) {
                res.status(500).json({message: 'Wystapil blad'})    
            }
})

module.exports = router