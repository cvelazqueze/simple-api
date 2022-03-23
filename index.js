const bodyParser = require('body-parser');
var express = require('express');
var routes = require('./src/routes');

var app = express();

app.use(bodyParser.json());
app.use('/pokedex',routes);

app.get('/', function(req,res){
    res.status(200).send('Simple API');
})

app.listen(3000, function(){
    console.log('Simple API is listening on port 3000')
})