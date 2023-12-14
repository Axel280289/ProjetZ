const express = require("express");
const { getJv, addJv, getJvs, getJvById, modifyJv, createJv, removeJv, deleteJv, updateJv} = require("../controllers/jv_controller");
const router = express.Router();

// Créer un jeu 
router.get('/jv/create', addJv);
router.post('/jv/create/add', createJv);

// Liste des Jv

router.get('/jv', getJvs);

// Infomration d'un jeu spécifique 
router.get('/jv/:id', getJvById, getJv);

//Mise a jour d'un jeu 

router.get('/jv/:id/update', getJvById, modifyJv);
router.put('/jv/:id/update', updateJv);

//Suppression d'un jeu
router.get('/jv/:id/delete', getJvById, removeJv);
router.delete('/jv/:id/delete', deleteJv);

module.exports = router