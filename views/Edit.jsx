const React = require('react');
const Default = require('./layouts/Default');

function Edit({ bread, index}) {
return (
    <Default>
        <h2>Edit a bread</h2>
        <form action={`/breads/${bread.id}?_method=PUT`} method='POST'>
            <label htmlFor='name'>Name</label>
            <input
            type='text'
            name='name'
            id='name'
            required
            defaultValue={ bread.name }
            />
            <label htmlFor='image'>Image</label>
            <input
            type='text'
            name='image'
            id='image'
            defaultValue={ bread.image }
            />
            <label htmlFor='hasGluten'>Has Gluten?</label>
            <input
            type='checkbox'
            name='hasGluten'
            id='hasGluten'
            defaultChecked
            />
            <br/>
            <input type='submit' />
        </form>
    </Default>
)
};

module.exports = Edit;