const React = require('react');
const Default = require('./layouts/Default');

function Error404() {
    return (
        <Default>
            <h1>404: Bread doesn't exist Manny</h1>
        </Default>
    )
};

module.exports  = Error404;