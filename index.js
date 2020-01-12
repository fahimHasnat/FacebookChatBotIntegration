'use strict'

const app = require('express')();
const bodyParser = require('body-parser');
const request = require('request');

// const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Hello World");
});

app.get('/webhook/',(req, res)=>{
    if(req.query['hub.verify_token'] === "balblabla"){
        res.send(req.query['hub.challenge']);
    }
    res.send("Wrong Token");
})
app.listen(app.get('port'),()=>{
    console.log('Server is listening');
});