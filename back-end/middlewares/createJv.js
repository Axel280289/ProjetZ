// Appel du models JV 
const JvModels = require('../models/Jv')

// Fonction pour ajouter un JV dans la base de données

const createJv = async (req) => {
    const newJV = new jeux({
        titre: req.body.titre,
        url: req.body.url,
    });
    return await newJv.save();
}

module.exports = createJv;
