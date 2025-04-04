const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const bakerSchema = new Schema({
    name: {
    type: String,
    required: true,
    enum: [ 'Rachel', 'Monica', 'Joey', 'Ross', 'Chandler', 'Phobe' ]
    },
    startDate: {
        type: Date,
        required: true,
    },
    bio: String,
});

const Baker = model('Baker', bakerSchema);

module.exports = Baker;