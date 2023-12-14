// Apppel des methodes liées a express-validator 
const { body, validationResult } = require('express-validator');

//verifJv va verifier la conformité des donnees et les securisé 

const verifJv = (req, res) => {
    body('titre', 'Le titre est obligatoire').isString().notEmpty();
    body('url', 'Le lien est obligatoire').isString().notEmpty();

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
};

module.exports = verifJv;