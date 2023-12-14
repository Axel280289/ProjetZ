const mongoose = require('mongoose');

const jvSchema = mongoose.Schema({
    titre: {
        type: String,
        required: true,
        },
    url: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('jv', jvSchema, 'jvs');

