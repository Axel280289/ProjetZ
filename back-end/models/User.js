// J'importe les modules et les potentiels modèles nécessaires
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// J'utilise la méthode Schema pour définir le model de document pour la collection users
const userSchema = mongoose.Schema({
  lastname: { type: String, required: true, trim: true },
  firstname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  birthdate: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  fullaccess: {
    type: String,
    enum: ["adminPrincipal", "admin"],
    required: true,
  },
});

userSchema.plugin(uniqueValidator);

// J'exporte mon model en lui donnant un nom, lui associant son schéma ainsi que la collection de la base de données
module.exports = mongoose.model("User", userSchema, "users");
