const React = require('react');
const Default = require('./layouts/Default');

function Show({ bread }) {
    return (
        <Default>
            <h3>{ bread.name }</h3>
            <img src={ bread.image } alt ={ bread.name } />
            <p>
                and it 
                { bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
                have Gluten.
            </p>
            <p>{ bread.getBakedBy() }</p>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <img src={ bread.image } alt={ bread.name} />
            <li><a href="/breads">Go Home</a></li>
            <form action={`/breads/${bread.id}?_method=DELETE`} method='POST' >
                <input type='submit' value='DELETE' />
            </form>
        </Default>
    )
};

module.exports = Show;