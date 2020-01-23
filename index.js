'use strict'

const app = require('express')();
const bodyParser = require('body-parser');
const request = require('request');
const FB = require('fb');
const divide = require("./controller/divideTheWork");
const mongoose = require("mongoose");
const Response = require("./models/response");
const facebook = require('fb-messenger-bot-api');
const dotenv = require('dotenv').config();

// npm package
const messageClient = new facebook.FacebookMessagingAPIClient(process.env.PAGE_ACCESS_TOKEN);
const profileClient = new facebook.FacebookProfileAPIClient(process.env.PAGE_ACCESS_TOKEN);
const messageParser = facebook.FacebookMessageParser;

mongoose.connect("mongodb+srv://fahim:chatbot@cluster0-dhadz.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongoose Connected");
  }).catch((err) => {
    console.log("Mongoose connection error :", err);
  });
mongoose.set('useFindAndModify', false);
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin , X-Requested-With, Content-Type, Authorization, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.send(200).json({});
  }
  next();
});

app.get('/', (req, res) => {
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
  let body = req.body;
  // console.log("body :",body);
  // const incomingMessages = messageParser.parsePayload(req.body);
  // console.log("incomingMessages :",incomingMessages);

  if (body.object === 'page') {
    body.entry.forEach(function (entry) {

      let webhook_event = entry.messaging[0];
      let sender_psid = webhook_event.sender.id;
      // let sender_psid = 2552542204801334;

      profileClient.setGetStartedAction(sender_psid, { "text": "Welcome to the jungle" });
      messageClient.markSeen(sender_psid)
        .then(() => {
          messageClient.toggleTyping(sender_psid, true);
        })
        .catch((err) => console.log(err));

      if ('postback' in webhook_event) {
        console.log(webhook_event.postback);
        handlePostback(sender_psid, webhook_event.postback);
      }

      else if ('message' in webhook_event) {
        console.log(webhook_event.message);
        // divide.type(sender_psid, webhook_event.message);
        handleMessage(sender_psid, webhook_event.message);
      }

    });
    res.status(200).send('EVENT_RECEIVED');
  }
  else {
    res.sendStatus(404);
  }

});

app.post("/create", (req, res) => {
  const response = new Response({
    _id: new mongoose.Types.ObjectId(),
    type: "text",
    response: [{
      key: "Hello",
      value: "Hello there my freind",
      payload: "text file"
    }]
  })
  response.save().then((result) => {
    result.response[0].payload = `${result.response[0].value}+${result._id}`;
    console.log(result);
    Response.findByIdAndUpdate(result._id, result).exec().then(()=>{
      console.log("Updated");
    })
    res.status(200).json({
      message: "resullt saved"
    })
  })
});

function handleMessage(sender_psid, received_message) {
  console.log("DHUkcey");
  getName(sender_psid).then(name => {
    console.log("name :", name);
    let response;
    if (received_message.text) {

      if (received_message.text == "Hello") {

        // response = {
        //     "attachment":{
        //       "type":"template",
        //       "payload":{
        //         "template_type":"button",
        //         "text":`Hello ${name} What do you want to do next?`,
        //         "buttons":[
        //           {
        //             "type": "postback",
        //             "title": "Read News",
        //             "payload": "Read News"
        //           },
        //           {
        //             "type": "postback",
        //             "title": "Read Story",
        //             "payload": "Read Story"
        //           }
        //         ]
        //       }
        //     }
        // }
        // messageClient.sendImageMessage(sender_psid, "http://www.19thofjune.com/wp-content/uploads/2019/06/5-Best-Marathon-Runners-800x600.jpg")
        //   .then(()=>{
        // messageClient.sendTextMessage(sender_psid, `Hello ${name} What do you want to do next?`)
        //   });

        // quick reply
        // messageClient.sendQuickReplyMessage(sender_psid, "Which color do you like ?",[{
        //   "content_type": "text",
        //   "title": "Red ",
        //   "payload":"Red",
        //   "image_url": "https://usercontent2.hubstatic.com/7197541_f1024.jpg"}]);
        var x = 12;
        messageClient.sendButtonsMessage(sender_psid, `Hello ${name} What do you want to do next?`,[{
          "type": "postback",
          "title": "Read News",
          "payload": `Read News+${x}`
        },
        {
          "type": "postback",
          "title": "Read Story",
          "payload": "Read Story"
        }
        ]).then(() => {
          console.log("Sent");
        })
      }
      if (received_message.text == "Hi") {
        response = {
          "text": "Which color do you like ?",
          "quick_replies": [
            {
              "content_type": "text",
              "title": "Red ",
              "payload": "Red",
              "image_url": "https://usercontent2.hubstatic.com/7197541_f1024.jpg"
            },
            {
              "content_type": "text",
              "title": "Green",
              "payload": "Green",
              "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Color-Green.JPG"
            },
            {
              "content_type": "text",
              "title": "Blue",
              "payload": "Blue",
              "image_url": "https://miro.medium.com/max/512/1*7uObADW_J1O5UMyyoVwLTg.png"
            }
          ]
        }
      }
      if (received_message.text == "call") {
        response = {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type": "button",
              "text": "Need further assistance? Talk to a representative",
              "buttons": [
                {
                  "type": "phone_number",
                  "title": "+15105551234",
                  "payload": "+15105551234"
                }
              ]
            }
          }
        }
      }
      if (received_message.text == "generic") {
        messageClient.sendTemplateMessage(sender_psid,
          {
            "template_type": "generic",
            "elements": [
              {
                "title": "RulMaker",
                "image_url": "https://rulmaker.com/wp-content/uploads/2019/12/Wed-banner-1-min.jpg",
                "subtitle": "We have the right dress for everyone.",
                "default_action": {
                  "type": "postback",
                  "title": "Start Chatting",
                  "payload": "Start Chatting",
                },
                "buttons": [
                  {
                    "type": "web_url",
                    "url": "https://rulmaker.com/",
                    "title": "View Website"
                  }, {
                    "type": "postback",
                    "title": "Start Chatting",
                    "payload": "Start Chatting"
                  }
                ]
              },
              {
                "title": "Welcome",
                "image_url": "https://rulmaker.com/wp-content/uploads/2019/12/Wed-banner-1-min.jpg",
                "subtitle": "We have the right dress for everyone.",
                "default_action": {
                  "type": "web_url",
                  "url": "https://rulmaker.com",
                  "webview_height_ratio": "tall",
                },
                "buttons": [
                  {
                    "type": "web_url",
                    "url": "https://rulmaker.com/",
                    "title": "View Website"
                  }, {
                    "type": "postback",
                    "title": "Start Chatting",
                    "payload": "Start Chatting"
                  }
                ]
              }]
          });
        response = {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type": "generic",
              "elements": [
                {
                  "title": "RulMaker",
                  "image_url": "https://rulmaker.com/wp-content/uploads/2019/12/Wed-banner-1-min.jpg",
                  "subtitle": "We have the right dress for everyone.",
                  "default_action": {
                    "type": "web_url",
                    "url": "https://rulmaker.com",
                    "webview_height_ratio": "tall",
                  },
                  "buttons": [
                    {
                      "type": "web_url",
                      "url": "https://rulmaker.com/",
                      "title": "View Website"
                    }, {
                      "type": "postback",
                      "title": "Start Chatting",
                      "payload": "Start Chatting"
                    }
                  ]
                },
                {
                  "title": "Welcome",
                  "image_url": "https://rulmaker.com/wp-content/uploads/2019/12/Wed-banner-1-min.jpg",
                  "subtitle": "We have the right dress for everyone.",
                  "default_action": {
                    "type": "web_url",
                    "url": "https://rulmaker.com",
                    "webview_height_ratio": "tall",
                  },
                  "buttons": [
                    {
                      "type": "web_url",
                      "url": "https://rulmaker.com/",
                      "title": "View Website"
                    }, {
                      "type": "postback",
                      "title": "Start Chatting",
                      "payload": "Start Chatting"
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    }

    callSendAPI(sender_psid, response);
  })
};

function getName(sender_psid) {
  return new Promise((resolve, reject) => {
    FB.options({
      appId: '466351087584988',
      appSecret: '061bd7aea147363d6a0fafe29703583f',
      default_graph_version: 'v5.0',
    });

    FB.api(
      `/${sender_psid}/`, { access_token: `${tokenz}` },
      function (response) {
        if (response && !response.error) {
          resolve(response.first_name);
        } else {
          reject(response.error);
        }
      }
    );
  });
}

function handlePostback(sender_psid, received_message) {

  let response;
  // containerObject= JSON.parse(received_message);
  // Check if the message contains text
  if (received_message.payload) {
    if (received_message.title == "Get Started") {
      messageClient.toggleTyping(sender_psid, true).then(() => {
        messageClient.sendTextMessage(sender_psid, "Welcome to v2").then(() => {
          messageClient.toggleTyping(sender_psid, false);
        })
      })
    }
    // Create the payload for a basic text message
    if (received_message.payload == "Read Story") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "What do you want to do next?",
            "buttons": [
              {
                "type": "postback",
                "title": "The Midas Touch",
                "payload": "The Midas Touch"
              },
              {
                "type": "postback",
                "title": "The Golden Egg",
                "payload": "The Golden Egg"
              }
            ]
          }
        }
      }
    }
    if (received_message.payload == "Read News") {

      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "What do you want to do next?",
            "buttons": [
              {
                "type": "postback",
                "title": "Work to expand export to Middle East countries",
                "payload": "Work to expand export to Middle East countries"
              },
              {
                "type": "postback",
                "title": "Israel’s left-wing parties unite ahead of elections",
                "payload": "Israel’s left-wing parties unite ahead of elections"
              }
            ]
          }
        }
      }
    }
  }

  // Sends the response message
  // callSendAPI(sender_psid, response);    
};


function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }
  console.log("Request Body :", request_body);

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

app.listen(app.get('port'), () => {
  console.log('Server is listening');
});