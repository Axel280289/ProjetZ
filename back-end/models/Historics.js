const mongoose= require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const historicSchema = mongoose.Schema({
    date: {type: Date, required: true},
    amount: {type: Number, required: true},
    associations: {type: [String], required: true, trim: true},
});

historicSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Historics', historicSchema, 'historics');