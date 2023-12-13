const path= require('path');
const Historics = require('../models/Historics');
const verifInputsHistoric = require('../middlewares/verifInputsHistoric');

const findHistoricById = async (id) => {
    return await Historics.findOne({_id: id});
}

const findHistoricByDate = async (req) => {
    return await Historics.findOne({date: req.body.date});
}

// Création d'un nouvel histoique
const newHistoric = async (req, res) => {
    const historic = new Historics({
        date: req.body.date,
        amount: req.body.amount,
        associations: req.body.associations,
    });


    // Sauvegarde des données
    historic
    .save()
    .then((result) => {
        req.session.successCreateHistoric = `Historique du ${result.date} créé avec succès`;
        res.status(200).redirect('/historics/create');
    }).catch((error) => {
        res.status(500).json({message: 'Erreur de création de l\'historique : ' + error });
    });
}


// Mise à jour de l'historique
const refreshHistorics = async (req,res) => {
    const updatedHistorics = {
        _id: req.params.id,
        date: req.body.date,
        amount: req.body.amount,
        associations: req.body.associations,
    }

    await Historics.updateOne({_id: req.params.id}, {...updatedHistorics})
    .then((result) => {
        req.session.successUpdatedHistorics=`Historique du ${updatedHistorics.date} mis à jour avec succès.`;
        res.redirect(`/historics/${req.params.id}/update`);
    }).catch ((error) => {
        console.log(error.message)
        res.status(500).json({message: 'Erreur lors de la mise à jour de votre historique : ' + error})
    })
}



// Middleware : Affichage de la page de création d'historique
exports.addHistoric = async (req, res) => {
    const successCreateHistoric= req.session.successCreateHistoric ? req.session.successCreateHistoric : null;
    const isConnected = req.session.isConnected ? req.session.isConnected : false;
    res.status(200).render(path.join(__dirname, `../views/management/historics/create-historic.ejs`), {isConnected, successCreateHistoric});
    }

// Validation du formulaire de création d'historique
exports.createHistoric = async (req, res) => {
    try {
        verifInputsHistoric(req, res);
        findHistoricByDate(req)
        .then(historic => {
            if(historic) {
                return res.status(409).json({message: 'L\'historique existe déjà.'});
            } else {
                newHistoric(req,res);
            }
        })
                .catch(saveError => {
                    console.log('La sauvegarde de l\'historique a échoué', saveError);
                    res.status(500).json({ message: 'Erreur lors de la sauvegarde de l\'historique ' + saveError });
                });
    }   
    catch(error) {
        console.log('Erreur lors de la création de l\'historique', error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'historique: ' + error });
    }
}

// Middleware pour l'affichage de la page de liste des historiques
exports.getHistorics = async (req, res) => {
    try {
        const successDeleteHistoric = req.session.successDeleteHistoric ? req.session.successDeleteHistoric : null;
        const isConnected = req.session.isConnected ? req.session.isConnected : false;
        res.status(200).render(path.join(__dirname, `../views/management/historics/historics.ejs`));
    } catch(error){
        console.log('Erreur', error);
        res.status(500).json({message: 'Erreur: Page introuvable' + error});
         }
    }

// Middleware recherche d'historique
exports.getHistoricById = async (req, res, next) => {
    try {
        const historic = await Historics.findOne({_id: req.params.id});
        res.locals.detailsHistoric= historic;
    } catch(error) {
        console.log('Erreur', error);
        res.status(500).json({message: 'Erreur: Historique introuvable' + error});
    }
}

// Détails de l'historique
exports.getHistoric = async (req, res) => {
    const detailsHistoric= res.locals.detailsHistoric ? res.locals.detailsHistoric : null;
    const isConnected= req.session.isConnected ? req.session.isConnected : false;
    res.status(200).render(path.join(__dirname, '../views/management/historics/details-historic.ejs'), {historic, successDeleteHistoric, isConnected});
    }

// Middleware affichage de la page de modification de l'historique
exports.modifyHistoric = async (req, res) => {
    const detailsHistoric = res.locals.detailsHistoric ? res.localcs.detailsHistoric : null;
    const isConnected= req.session.isConnected ? req.session.isConnected : false;
    res.status(200).render(path.join(__dirname, `../views/management/historics/update-historic.ejs`), {detailsHistoric, successUpdateHistoric, isConnected});
    }

// Middleware de validation du formulaire de modification d'un historique.
exports.updateHistoric = async (req, res) => {
    try {
        verifInputsHistoric(req, res);
    
        await findHistoricById (req.params.id)
        .then((item) => {
            refreshHistorics(req,res,item);
        })
        
        .catch ((error) => {
            res.status(400).send("Erreur recherche historique" + error.message);
        });
    } catch(error) {
        console.error(error.message);
        res.status(500).send("Server error: controller.");
    }
};

exports.removeHistoric = async (req, res) => {
    const detailsHistoric = res.locals.detailsHistoric ? res.locals.detailsHistoric : null ;

    const isConnected = req.session.isConnected ? req.session.isConnected : false;

    res.status(200).render(path.join(__dirname, `../views/management/historics/delete-historic.ejs`))
}


exports.deleteHistoric = async (req, res) => {
    try {
        const historic = await Historics.findOne({_id: req.params.id});
        if(!historic) {res.status(404).send('Historique non trouvé');}
        else{
            historic.deleteOne({_id: req.params.id}).then(() => {
                req.session.successDeleteHistoric = `Historique ${historic} du ${date} supprimé avec succès.`;

                res.redirect(`/historics`);
            }).catch(error => res.status(400).send('Erreur lors de la suppression' + error.message))
        }
    } catch(error) {res.status(404).send('Erreur lors de la suppression' + error.message);}
}
   