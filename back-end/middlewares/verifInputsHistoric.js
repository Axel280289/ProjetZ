// appel des méthodes liées à express-validator
const { body, validationResult } = require('express-validator');

// verifInputs va verifier la conformité des données et les sécuriser 
const verifInputsHistoric = (req, res) => {
    body('date', 'La date de l\'historique est obligatoire').isString().notEmpty();
    body('amount', 'Le montant récolté est obligatoire.').isString().notEmpty();
    body('associations', 'Les associations bénéficiaires sont obligatoires.').isString().notEmpty();

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
};

// Export du middleware
module.exports = verifInputsHistoric;
// appel des méthodes liées à express-validator
const { body, validationResult } = require('express-validator');

// verifInputs va verifier la conformité des données et les sécuriser 
const verifInputsHistoric = (req, res) => {
    body('date', 'La date de l\'historique est obligatoire').isString().notEmpty();
    body('amount', 'Le montant récolté est obligatoire.').isString().notEmpty();
    body('associations', 'Les associations bénéficiaires sont obligatoires.').isString().notEmpty();

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
}

// Export du middleware
module.exports = verifInputsHistoric;