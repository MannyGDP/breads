const React = require('react');
const Default = require('./layouts/Default');

function Show({ bread, index }) {
    return (
        <Default>
            <h3>{ bread.name }</h3>
            <p>
                and it 
                { bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
                have Gluten.
            </p>
            <a href={`/breads/${index}/edit`}><button>Edit</button></a>
            <img src={ bread.image } alt={ bread.name} />
            <form action={`/breads/${index}?_method=DELETE`} method='POST' >
                <input type='submit' value='DELETE' />
            </form>
        </Default>
    )
};

module.exports = Show;