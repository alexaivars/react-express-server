const React = require('react')
const ReactDOM = require('react-dom/server');
const ReactComponent = props => <h1>{ props.title }</h1>;

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(ReactDOM.renderToString(<ReactComponent title="Hello World"/>));
});

app.listen(port, () => console.log('Example app listening on port ', port));
