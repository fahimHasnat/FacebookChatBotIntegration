'use strict'

const app = require('express')();
const bodyParser = require('body-parser');
const request = require('request');
const FB = require('fb');
const divide = require("./controller/divideTheWork").type;
const mongoose = require("mongoose");
const Response = require("./models/response");
const facebook = require('fb-messenger-bot-api');
const samsungflow = require('./test_file/samsungFlowTest').getFlow;
const handleInput = require("./services/handleInput").handleInput;

require('dotenv').config();
const redis = require('redis');

var client = redis.createClient(process.env.REDIS_URL);
// var client = redis.createClient();
client.on('connect', () => {
  console.log('Redis Connected :' + process.env.REDIS_URL);
});

// npm package
const messageClient = new facebook.FacebookMessagingAPIClient(process.env.PAGE_ACCESS_TOKEN);

mongoose.connect("mongodb+srv://fahim:chatbot@cluster0-dhadz.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongoose Connected");
  }).catch((err) => {
    console.log("Mongoose connection error :", err);
  });
mongoose.set('useFindAndModify', false);
app.set('port', (process.env.PORT || 3000));

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
  // getAndSave();
  // getName("2552542204801334");
  res.send("This is flowHandler service\nthis recieves message from messageHandler\nDecide the output and send back to messageHandler");
});

var tokenz = "EAAGoJNLqhtwBAPCMIAk2IGan40Ch8BhBGeohH1pO8DpoLqtv5Te4pr11ZCsgZCCSujOuZAXPvFMitXiKMiW4qyKAAXyWkpvuHyiKoA3go7zl2s3N1CzufWFyI27mOWXSZA56eR3IQZCx2XvySIP5ZBch9KH1sMaPc8xVjnQSsBQZChazgtGKC3WVVsM9ZCnOGGYZD"


app.post('/flowHandle', (req, res) => {

  let webhook_event = req.body.webhook_event;
  // console.log(webhook_event);
  let sender_psid = webhook_event.sender.id;
  let page_id = webhook_event.recipient.id;
  // let sender_psid = 2552542204801334;

  // messageClient.markSeen(sender_psid)
  //   .then(() => {
  //     client.hget('responses', page_id, (err, data) => {
  //       if (err || data == null) {
  //         getAndSave(page_id).then((data) => {
  //           checkInput(data, sender_psid, webhook_event);
  //         });
  //       } else {
  //         checkInput(JSON.parse(data), sender_psid, webhook_event);
  //       }
  //     });
  //   }).catch((err) => console.log(err));

  // dev
  divide(samsungflow, sender_psid, webhook_event);

  res.status(200).send('EVENT_RECEIVED');
});

function checkInput(response, sender_psid, webhook_event) {
  client.hget('userInput', sender_psid, function (err, data) {
    if (err || data == null) {
      divide(response, sender_psid, webhook_event);
    } else {
      let input = webhook_event.postback ? webhook_event.postback.title : webhook_event.message.text;
      handleInput(response, sender_psid, JSON.parse(data), input);
    }
  });
}

app.post("/create", (req, res) => {
  console.log(req.body);

  const response = new Response({
    _id: new mongoose.Types.ObjectId(),
    page_id: req.body.page_id,
    response: req.body.response
  });

  response.save().then((result) => {
    console.log(result);
    res.send("Successful");
  });
});

app.get("/:page_id", (req, res) => {
  Response.findOne({ "page_id": req.params.page_id }).then(result => {
    res.send(result);
  });
});

function getAndSave(page_id) {
  return new Promise((resolve, reject) => {
    let url = `https://services.stage.smashboard.co/chatbot/flowhandler/${page_id}`;
    // let url = `http://localhost:3000/${page_id}`;
    request.get({ url: url }, (err, res) => {
      console.log("result :", res.body);
      let x = JSON.parse(res.body);
      client.hset("responses", page_id, JSON.stringify(x.response), redis.print);
      resolve(x.response);
    });
  });
}

function getName(sender_psid) {
  return new Promise((resolve, reject) => {
    FB.options({
      appId: process.env.appId,
      appSecret: process.env.appSecret,
      default_graph_version: 'v5.0',
    });
    console.log(tokenz);
    FB.api(
      "/me/taggable_friends", { access_token: process.env.PAGE_ACCESS_TOKEN2 },
      function (response) {
        console.log(response);
        if (response && !response.error) {
          console.log(response);
        }
      }
    );
    // FB.api(
    //   `/${sender_psid}/`, { access_token: `${tokenz}` },
    //   function (response) {
    //     console.log("Response :",response);
    //     if (response && !response.error) {
    //       // console.log(response);
    //       resolve(response);
    //     } else {
    //       reject(response.error);
    //     }
    //   }
    // );
    resolve();
  });
}

app.listen(app.get('port'), () => {
  console.log('Server is listening');
});

/*
Print All Keys in Redis
          // client.keys('*', function (err, keys) {
          //   if (err) return console.log(err);

          //   for(var i = 0, len = keys.length; i < len; i++) {
          //     console.log(keys[i]);
          //   }
          // });
*/