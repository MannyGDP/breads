// require mongoose
const mongoose = require('mongoose');

// shorthand for the schema constructor
const { model, Schema } = mongoose;

const breadSchema = new Schema({
        //we will write our Schema here
name: { type: String, required: true },
hasGluten: Boolean,
image: { type: String, default: 'http://placehold.it/500x500.png' },
baker: {
        type: String,
        enum: [ 'Rachel', 'Monica', 'Joey', 'Ross', 'Chandler', 'Phobe' ]
}
});

// Bread Model
const Bread = model('Bread', breadSchema);

module.exports = Bread;

