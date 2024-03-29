const Streamers = require('../models/Streamers');
const path= require('path');
const verifInputsStreamer = require('../middlewares/verifInputsStreamer');

const findStreamerById = async (id) => {
    return await Streamers.findOne({_id: id});
}

const findStreamerByName = async (req) => {
    return await Streamers.findOne({name: req.body.name});
}

const newStreamer = async (req, res) => {
    const streamer = new Streamers({
        name: req.body.name,
        twitch: req.body.twitch,
    });

    streamer
    .save()
    .then((result) => {
        req.session.successCreateStreamer = `Streamer ${result.name} créé avec succès.`
        res.status(200).redirect('/streamers/create');
    }).catch((error) => {
        res.status(500).json({message: 'Erreur création streamer : ' + error});
    });
}

const refreshStreamer = async (req, res) => {
    const updatedStreamer = {
        _id: req.params.id,
        name: req.body.name,
        twitch: req.body.twitch,
    }

    await Streamers.updateOne({_id: req.params.id}, {...updatedStreamer})
    .then((result) => {
        req.session.successUpdatedStreamer= `Streamer ${streamer.name} mis à jour avec succès.`;
        res.redirect(`/streamers/${req.params.id}/update`);
    }).catch((error) => {
        console.log(error.message)
        res.status(500).json({message: 'Erreur mise à jour streamer :' + error})
    })
}

exports.addStreamer = async (req, res) => {
    const successCreateStreamer= req.session.successCreateStreamer ? req.session.successCreateStreamer : null;
    const isConnected = req.session.isConnected ? req.session.isConnected : false;
    res.status(200).render(path.join(__dirname, `../views/management/streamers/create-streamer.ejs`), {isConnected, successCreateStreamer});
}

exports.createStreamer = async (req, res) => {
    try {
        verifInputsStreamer(req, res);
        findStreamerByName(req)
        .then(streamer => {
            if(streamer) {
                return res.status(409).json({message: 'Le streamer existe déjà.'});
            } else {
                newStreamer(req,res);
            }
        })                
            .catch(saveError => {
                console.log('La sauvegarde du streamer a échoué', saveError);
                res.status(500).json({ message: 'Erreur lors de la sauvegarde du streamer ' + saveError });
            });
        }
        catch(error) {
            console.log('Erreur lors de la recherche du streamer par nom.', error);
            res.status(500).json({ message: 'Erreur lors de la recherche du streamer: ' + error });
        }
    }


exports.getStreamers = async (req, res) => {
    try {
        const successDeleteStreamer = req.session.successDeleteStreamer ? req.session.successDeleteStreamer : null;
        const isConnected = req.session.isConnected ? req.session.isConnected : false;

        const streamer = await Streamers.find();
        
        res.status(200).render(path.join(__dirname, `../views/management/streamers/list-streamers.ejs`), { successDeleteStreamer, isConnected, streamer}); 

    } catch(error){
        console.log('Erreur', error);
        res.status(500).json({message: 'Erreur: Page Introuvable' + error});
     }
};

exports.getStreamerById = async (req, res, next) => {
    try {
        const streamer = await Streamers.findOne({_id: req.params.id});
        res.locals.detailsStreamer= streamer;
    } catch(error) {
        console.log('Erreur', error);
        res.status(500).json({message: 'Erreur: Streamer introuvable' + error});
    }
}

exports.getStreamer = async (req, res) => {
    const detailsStreamer= res.locals.detailsStreamer ? res.locals.detailsStreamer : null;
    const isConnected= req.session.isConnected ? req.session.isConnected : false;
    res.status(200).render(path.join(__dirname, '../views/management/streamers/details-streamer.ejs'), {detailsStreamer, streamer, successDeleteStreamer, isConnected});
    }

exports.modifyStreamer = async (req, res) => {
    const detailsStreamer = res.locals.detailsStreamer ? res.localcs.detailsStreamer : null;
    const isConnected= req.session.isConnected ? req.session.isConnected : false;
    res.status(200).render(path.join(__dirname, `../views/management/streamers/update-streamer.ejs`), {detailsStreamer, successUpdateStreamer, isConnected});
};


exports.updateStreamer = async (req, res) => {
    try {
        verifInputsStreamer(req, res);
        
        const streamer = await findStreamerByDate(req.params.streamer.id);

        if (streamer) {
            refreshStreamer(req, res, streamer);
        } else {
            res.status(404).send("Streamer non trouvé");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: 'Erreur lors de la mise à jour du streamer : ' + error.message });
    }
};


exports.removeStreamer = async (req, res) => {
    const detailsStreamer = res.locals.detailsStreamer ? res.locals.detailsStreamer : null ;
    const isConnected = req.session.isConnected ? req.session.isConnected : false;
    res.status(200).render(path.join(__dirname, `../views/management/streamers/delete-streamer.ejs`), {detailsStreamer, successDeleteStreamer, isConnected});
}


exports.deleteStreamer = async (req, res) => {
    try {
        const streamer = await Streamers.findOne({_id: req.params.id});
        if(!streamer) {
            res.status(404).send('Streamer non trouvé');
        } else {
            const name = streamer.name;
            streamer.deleteOne({_id: req.params.id}).then(() => {
                req.session.successDeleteStreamer = `Streamer ${streamer.id} supprimé avec succès.`;
                res.redirect(`/streamers`);
            }).catch(error => res.status(400).send('Erreur lors de la suppression' + error.message));
        }
    } catch(error) {
        res.status(404).send('Erreur lors de la suppression' + error.message);
    }
};
   
    