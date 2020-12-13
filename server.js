const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/pikapika'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/pikapika/index.html'));
});

app.listen(process.env.PORT || 8080);
console.log(`Server is listening on port ${process.env.PORT || 8080}`)
