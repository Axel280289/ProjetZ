const express = require("express");
const {authMiddleware} = require("../middlewares/authMiddleware");
const { getJv, addJv, getJvs, getJvById, modifyJv, createJv, removeJv, deleteJv, updateJv, getListJv} = require("../controllers/jv_controller");
const router = express.Router();

// Créer un jeu 
router.get('/jv/create', authMiddleware, addJv);
router.post('/jv/create/add',authMiddleware, createJv);

// Liste des Jv

router.get('/jv', authMiddleware, getJvs);
router.get('/jv/list', getListJv);

// Infomration d'un jeu spécifique 
router.get('/jv/:id',authMiddleware, getJvById, getJv);

//Mise a jour d'un jeu 

router.get('/jv/:id/update',authMiddleware, getJvById, modifyJv);
router.put('/jv/:id/update',authMiddleware, updateJv);

//Suppression d'un jeu
router.get('/jv/:id/delete',authMiddleware, getJvById, removeJv);
router.delete('/jv/:id/delete',authMiddleware, deleteJv);

module.exports = router