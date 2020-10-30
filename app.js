const express = require("express")
const config = require("config")
const nongoose = require("mongoose")

const app = express()

app.use('/api/auth' , require('./routes/auth.routes'))


const PORT = config.get('port') || 5000

async function start() {

    try{
        await nongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true   
        })
        app.listen(PORT, () => console.log('Aplikacja działa na porcie ' + PORT ) )
        
    }catch (e){
        console.log('Blad servera' , e.message)
        process.exitCode(1)  
       }


}

start()


