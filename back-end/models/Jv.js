const mongoose = require('mongoose');
const { stringify } = require('querystring');

const jvSchema = mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    image:
    {
        type: Buffer,
    },
    url: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('jv', jvSchema, 'jvs');

