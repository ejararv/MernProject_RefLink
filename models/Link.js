const {Schema, model, Types} = require('mongoose')

const schema = new Schema({

   from: {type: String, required: true},
   to: {type:String, required:true, unique:true},
   code: {type:String, required:true, unique:true},
    date: {type: Date, default: Date.now},
    click: {type: Number, default: 0},
    owner: {type: Types.ObjectId, ref: 'User'}
    // К каждому юзеру присваиваем айди пользователя из МонгоДБ
    

})

module.exports = model('Link', schema)