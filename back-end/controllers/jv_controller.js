const path = require('path');
const JvModels = require('../models/Jv');
const verifJv = require('../middlewares/verifJv');
const findJv = require('../middlewares/findJv')

const findJvById = async (id) => {
    return await JvModels.findOne({_id: id});
};

// Création d'un nouveau jeux videos 

const newJv = async (req, res) => {
    const jv = new JvModels({
        titre: req.body.titre,
        image: req.body.image,
        url: req.body.url,
    });

// Sauvegarde des données du nouveau jeux videos

    jv.save().then(result => {
        req.session.successCreateJv = `Le jeu : ${result.titre} a été ajouté avec succés.`

// o On redirige vers la page de création d'un nouveau jeu 
        res.status(200).redirect('/jv/create');
    })
    .catch(error => 
        res.status(500).json({error : error}))
};

// Fonction pour mettre à jour un jeux videos

const refreshJv = async (req, res) => {

    // On recupére les information venant du formulaire du jeux videos
    
    const updateJv = {
        _id: req.params.id,
        titre: req.body.titre,
        url: req.body.url,
    }

    // On utilise la methode updateOne de mongoose pour effectuer la mise a jour 

    await JvModels.updateOne({_id: req.params.id}, {...updateJv})
        .then(result => {

            //Quand la MAJ s'éffectue on enregistre un message de succes 

            req.session.successUpdateJv = `Le jeux: ${updateJv.titre} à étais mis a jour avec succés.`;

            //Puis on redirige vers la page de MAJ

            res.redirect(`/jv/${req.params.id}/update`);
        }).catch(error => {
            console.log(error.message)
            console.log('Le jeu n\'as pas était mis a jour ');
        });
    }

    exports.getJvById = async(req, res, next) => {
        try{
            const jv = await JvModels.findOne({_id: req.params.id})
            /* 
            On stocke les données de l'utilisateur localement avec la propriété locals de l'objet request  
            qui permet de transférer des informations d'une requête vers    elle-même (get /users/:id => get /users/:id)
            */
            res.locals.detailsJv = jv

            next();
        } catch(error) {
            console.error(error.message);
            res.status(500).send('Serveur Error');
        }
    };

    // Middleware pour afficher la page "Créer un Jeux videos"
exports.addJv = (req, res) => {

    /* On récupère si c'est le cas, la variable de session successCreateJv pour afficher son contenu dans la page */

    const successCreateJv = req.session.successCreateJv ? req.session.successCreateJv : null; 
    const JvExiste = req.session.JvExiste ? req.session.JvExiste : null;
    const isConnected = req.session.isConnected ? req.session.isConnected : null;
    res.status(200).render(path.join(__dirname, '../views/management/jvs/create-jv.ejs'), {successCreateJv, isConnected, JvExiste}
    );
}


    // Middleware pour valider de formulaire de création d'un jeux videos 

    exports.createJv = (req, res) => {
        try {
            /* On vérifie et sécurise les données qui sont envoyées */
            verifJv(req, res)
            // On vérifie si le jeu existe déja
            findJv(req)
            .then(jv => {
                if(jv) {
                    return req.session.JvExiste = `Le jeu ${jv.titre} existe déja`,
                    res.status(200).redirect('/jv/create');
                }
                else {
                    newJv(req, res)
                 }
            })
            } catch(error) {
                console.log('try error', error);
            }
        }
    
// Middleware pour afficher la page "Liste des utilisateurs"

    exports.getJvs = async (req, res) => {
        try{
            const successDeleteJv = req.session.successDeleteJv ? req.session.successDeleteJv : null;
            const isConnected = req.session.isConnected ? req.session.isConnected : null;
                /* On récupère les informations des jeux videos */
                const jvs = await JvModels.find()
                res.status(200).render(path.join(__dirname, '../views/management/jvs/list-jv.ejs'), { jvs, successDeleteJv, isConnected})
            }
            catch(error){
                console.error(error.message);
                res.status(500).send('Server Errreur liste jv');
            }
        }

// Middleware pour afficher la page "Détails d'un jeu"
   
    exports.getJv = (req, res) => {
    /* On récupère les informations issue du middleware getUserById en les stockant dans une variable */
        const detailsJv = res.locals.detailsJv ? res.locals.detailsJv: null;
        const isConnected = req.session.isConnected ? req.session.isConnected : null;
        res.status(200).render(path.join(__dirname, '../views/management/jvs/detail-jv.ejs'), { detailsJv, isConnected});
}

// Middleware pour afficher la page "Mise à jour d'un jeu"
    exports.modifyJv = async (req, res) => {
    const detailsJv = res.locals.detailsJv;
    
    const successUpdateJv = req.session.successUpdateJv
    ? req.session.successUpdateJv : null;
    const isConnected = req.session.isConnected ? req.session.isConnected : null;
    
    res.status(200).render(path.join(__dirname, `../views/management/jvs/update-jv.ejs`),    { detailsJv, successUpdateJv, isConnected });
};

// Middleware pour afficher la page "Supprimer un Jeu"
exports.removeJv = async (req, res) => {
    const detailsJv = res.locals.detailsJv;
    const isConnected = req.session.isConnected ? req.session.isConnected: null;
    res.status(200).render(path.join(__dirname, `../views/management/jvs/delete-jv.ejs`), { detailsJv, isConnected})
}

// Middleware de validation du formulaire de la page "Supprimer un jeu"

exports.deleteJv = async (req, res) => {
    try{
        await findJvById(req.params.id).then (jv => {  
            if(!jv){
                res.status(404).send('Jeux non trouvé');
            }
            else {
                jv.deleteOne({_id: req.params.id}).then(() => {
                    req.session.successDeleteJv = `Le jeu ${jv.titre} à étais supprimer avec succés`;
                    res.redirect('/jv');
                }).catch(error => res.status(400).send('Erreur suppression jeux' + error.message))
            }
        }).catch(error => res.status(400).send('Erreur find jv' + error.message))
    } catch(error) {res.status(404).send('erreur delete' + error.message); }
}

exports.updateJv = async (req, res) => {
    try {
        const jv = await findJvById(req.params.id);

        if (!jv) {
            return res.status(404).send('Jeu non trouvé');
        }
        refreshJv (req, res)
    } catch (error) {
        console.error('Erreur de mise à jour du jeu', error.message);
        res.status(500).send('Erreur de mise à jour du jeu');
    }
};
       
// pour le fecth 
exports.getListJv = async (req, res) => {
  try {
    const jvs = await JvModels.find();
    res.status(200).json(jvs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};









