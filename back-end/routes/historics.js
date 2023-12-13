const express= require('express');
const path= require('path');
const router = express.Router();

const {getHistorics, getHistoric, getHistoricById, addHistoric, createHistoric, modifyHistoric, updateHistoric, removeHistoric, deleteHistoric} =
require('../controllers/historics_controller');

const { authMiddleware } = require('../middlewares/authMiddleware');
const { verifUser } = require('../middlewares/verifUser');

router.get('/historics', authMiddleware, verifUser, getHistorics);

router.get('/historics/create', authMiddleware, verifUser, addHistoric);

router.get('/historics/update', (req, res) => {
    res.status(200).render(`${__dirname}/views/management/historic/update-historic.html`);
});

router.get('/historics/delete', (req, res) => {
    res.status(200).render(`${__dirname}/views/management/historic/delete-historic.html`);
});

// liste des historiques (et détails)
router.get('/historics' , getHistorics );
router.get('/historics/:id' , authMiddleware, verifUser, getHistoricById, getHistoric);

// création des historiques
router.get('/historics/create', addHistoric);
router.post('/historics/create/add', authMiddleware, verifUser, createHistoric);

// modification des historiques
router.get('/historics/:id/update', authMiddleware, verifUser, getHistoricById, modifyHistoric);
router.put('/historics/:id/update', authMiddleware, verifUser, updateHistoric);

// suppression des historiques
router.get('/historics/:id/delete', authMiddleware, verifUser, getHistoricById, removeHistoric);
router.delete('/historics/:id/delete', authMiddleware, verifUser, deleteHistoric);

module.exports = router;