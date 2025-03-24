const React = require('react');
const Default = require('./layouts/Default');

function New() {
    return (
        <Default>
            <div style={{ backgroundcolor: '#5155', padding: '10px' }}></div>
            <h2>Add a new Bread</h2>
            <div className='backbutton'>
                <a href='/breads'><button>Go back to Index</button></a>
            </div>
            <form action='/breads' method='POST'> 
            <label htmlFor="name">Name</label> 
            <input 
            type="text" 
            name="name" 
            id="name"
            required
            /> 
            <label htmlFor="image">Image</label> 
            <input 
            type="text" 
            name="image" 
            id="image"/> 
            <label htmlFor="hasGluten">Has Gluten?</label> 
            <input 
            type="checkbox" 
            name="hasGluten" 
            id="hasGluten" 
            defaultChecked 
            /> 
            <label htmlFor='baker'>Baker Name</label>
            <select name='baker' id='baker'>
                <option value='Rachel'>Rachel</option>
                <option value='Monica'>Monica</option>
                <option value='Ross'>Ross</option>
                <option value='Joey'>Joey</option>
                <option value='Chandler'>Chandler</option>
                <option value='Phobe'>Phobe</option>
            </select>
            <br /> 
            <input type="submit"/> 
            </form>
        </Default>
    )
};

module.exports = New;