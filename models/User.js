const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true }, // тип- стринг. обязательное поле. Уникальным должен быть
  password: { type: String, required: true },

  // К каждому юзеру присваиваем айди пользователя из МонгоДБ
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

module.exports = model("User", schema);
