const JvModels = require('../models/Jv');

//Fonctions pour verifier si le Jv existe deja 
const findJv = async (req) => {
    return await JvModels.findOne({
        titre: req.body.titre,
        url: req.body.url,
    });
};

module.exports = findJv;