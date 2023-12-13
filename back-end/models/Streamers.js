const mongoose= require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const streamerSchema = mongoose.Schema({
    name: {type: String, required: true, trim: true, unique: true},
    twitch: {type: String, required: true, trim: true},
});

streamerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Streamers', streamerSchema, 'streamers');