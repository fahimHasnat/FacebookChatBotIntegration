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

var tokenz = "EAAGoJNLqhtwBAJCMxZABZA9dW7aHo4GlV4cRddnSFy7ird83fZBS6GtSBvAfAPfCvHtifQUzVx49GkGJ06SNEsWTmoyMkVWVT5iHTwZC5L2uPJZCTNYC1TZAU1Pb4KHgqqek80Qf65RJchd3fAt8zPGRFJVOk7w0XC8WeDZB4kW6AZDZD"

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = "blablabla"
      
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);      
      }
    }
  });

app.post('/webhook', (req, res) => {  

    // Parse the request body from the POST
    let body = req.body;
  
    // Check the webhook event is from a Page subscription
    if (body.object === 'page') {
  
      // Iterate over each entry - there may be multiple if batched
      body.entry.forEach(function(entry) {
  
        // Get the webhook event. entry.messaging is an array, but 
        // will only ever contain one event, so we get index 0
        let webhook_event = entry.messaging[0];
        // console.log("Message :"+webhook_event);
        let sender = webhook_event.sender.id;
        // console.log(typeof webhook_event);
        console.log("Message :",webhook_event.message);
        console.log("Message :",webhook_event.message.text);
        sendText(sender, "Welcome to v2");
      });
  
      // Return a '200 OK' response to all events
      res.status(200).send('EVENT_RECEIVED');
  
    } else {
      // Return a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  
  });

  function sendText(sender, text) {
    request({
      url: "https://graph.facebook.com/v2.6/me/messages",
      qs: {access_token, tokenz},
      method: "POST",
      json: {
        receipt: {id: sender},
        message: {text: text}
      }
    }, function(error, res, body) {
      if(error){
        console.log("sending error");
      } else if(res.body.error){
        console.log("Response body error");
      }
    })
  }
app.listen(app.get('port'),()=>{
    console.log('Server is listening');
});