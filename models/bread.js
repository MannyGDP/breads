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
        type: Schema.Types.ObjectId,
        ref: 'Baker',
}
});

// helper method
breadSchema.methods.getBakedBy = function() {
        return `${this.name} was baked with love by ${this.baker}`;
}
// Bread Model
const Bread = model('Bread', breadSchema);

module.exports = Bread;

