// appel des méthodes liées à express-validator
const { body, validationResult } = require('express-validator');

// verifInputs va verifier la conformité des données et les sécuriser 
const verifInputsStreamer = (req, res) => {
    body('name', 'Le nom du streamer est obligatoire').isString().notEmpty();
    body('twitch', 'L URL de la chaîne Twitch est obligatoire').isString().notEmpty();

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
}

// Export du middleware
module.exports = verifInputsStreamer;