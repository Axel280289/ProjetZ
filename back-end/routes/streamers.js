const express = require('express');
const path = require('path');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const { verifUser } = require('../middlewares/verifUser');

const { getStreamers, getStreamer, getStreamerById, addStreamer, createStreamer, modifyStreamer, updateStreamer, removeStreamer, deleteStreamer } =
    require('../controllers/streamers_controller');

router.get('/streamers', authMiddleware, verifUser, addStreamer);

router.get('/streamers/create', authMiddleware, verifUser, addStreamer);
    
router.get('/streamers/update', (req, res) => {
    res.status(200).render(`${__dirname}/views/management/streamer/update-streamer.html`);
});
    
router.get('/streamers/delete', (req, res) => {
    res.status(200).render(`${__dirname}/views/management/streamer/delete-streamer.html`);
});

// liste des streamers (et détails)
router.get('/streamers', authMiddleware, verifUser, getStreamers);
router.get('/streamers/:id', authMiddleware, verifUser, getStreamerById, getStreamer);

// création des streamers
router.get('/streamers/create', authMiddleware, verifUser, addStreamer);
router.post('/streamers/create/add', authMiddleware, verifUser, createStreamer);

// modification des streamers
router.get('/streamers/:id/update', authMiddleware, verifUser, getStreamerById, modifyStreamer);
router.put('/streamers/:id/update', authMiddleware, verifUser, updateStreamer);

// suppression des streamers
router.get('/streamers/:id/delete', authMiddleware, verifUser, getStreamerById, removeStreamer);
router.delete('/streamers/:id/delete', authMiddleware, verifUser, deleteStreamer);

module.exports = router;