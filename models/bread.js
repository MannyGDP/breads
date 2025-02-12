// require mongoose
const mongoose = require('mongoose');

// shorthand for the schema constructor
const { model, Schema } = mongoose;

const breadSchema = new Schema({
        //we will write our Schema here
name: { type: String, required: true },
hasGluten: Boolean,
image: { type: String, default: 'http://placehold.it/500x500.png' },
});

// Bread Model
const Bread = model('Bread', breadSchema);

module.exports = Bread;

// module.exports = [ 
//         { name: 'Rye', hasGluten: true, image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', }, 
//         { name: 'French', hasGluten: true, image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', }, 
//         { name: 'Gluten-Free', hasGluten: false, image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80', },
//         { name: 'Pumpernickel', hasGluten: true, image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',},
//         { name: 'Banana', hasGluten: false, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AG1NbinXFF4iFksw_gBdKsiMyGxplen17w&usqp=CAU',},
// ];
