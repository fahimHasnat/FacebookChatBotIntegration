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

var tokenz = "EAAGoJNLqhtwBABKsNQtrreqtVLlSkTJJZCoWV5UuZAZCeaOF5Kzunb86EcNEvd8kUnMD2JPZBvnS6wCSkCfpFGeYkrQ3DzHt8oGafHIyym5Q3MurKR49UZB7pNkO2MBzWPafOeYAgfwLBZBxoVTjPZCFl3Ex2BZAgDA0mYhZB4AQoQwZDZD"

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
  
    if (body.object === 'page') {

      body.entry.forEach(function(entry) {
        console.log("Entry :",entry);
        let webhook_event = entry.messaging[0];
        if('text' in webhook_event){
          console.log(true);
        }

        let sender_psid = webhook_event.sender.id;
        console.log(webhook_event.message);
        handleMessage(sender_psid, webhook_event.message);
      });
  
      // Return a '200 OK' response to all events
      res.status(200).send('EVENT_RECEIVED');
  
    } else {
      // Return a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  
  });

  function handleMessage(sender_psid, received_message) {

    let response;
    // containerObject= JSON.parse(received_message);
    // Check if the message contains text
    if (received_message.text) {  
      // Create the payload for a basic text message
      if (received_message.text == "Hello"){
        response = {
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"button",
                "text":"What do you want to do next?",
                "buttons":[
                  {
                    "type": "postback",
                    "title": "Read News",
                    "payload": "Read News"
                  },
                  {
                    "type": "postback",
                    "title": "Read Story",
                    "payload": "Read Story"
                  }
                ]
              }
            }
        }
      }
    }
    
    // Sends the response message
    callSendAPI(sender_psid, response);    
  };

  function callSendAPI(sender_psid, response) {
    // Construct the message body
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }
  
    // Send the HTTP request to the Messenger Platform
    request({
      "uri": "https://graph.facebook.com/v2.6/me/messages",
      "qs": { "access_token": tokenz },
      "method": "POST",
      "json": request_body
    }, (err, res, body) => {
      if (!err) {
        console.log('message sent!')
      } else {
        console.error("Unable to send message:" + err);
      }
    }); 
  };

app.listen(app.get('port'),()=>{
    console.log('Server is listening');
});