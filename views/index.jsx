const React = require('react');
const Default = require('./layouts/Default');

function Index({ breads, title }) {
    return (
        <Default title={ title }>
            <h2>Bread Index Page</h2>
            <p>I we have 3/11 bread for SALE!</p>
            <div className='newButton'>
                <a href='/breads/new'><button>Add a new bread Manny</button></a>
            </div>
            <ul>
                { breads.map(bread => {
                    return (
                     <li
                        key={bread.id}
                        >
                            <a href={`/breads/${bread.id}`}>{bread.name}</a>
                    </li>)
                })}
            </ul>
        </Default>
    )
};

module.exports = Index;