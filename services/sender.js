const request = require('request');
var tokenz = "EAAGoJNLqhtwBABKsNQtrreqtVLlSkTJJZCoWV5UuZAZCeaOF5Kzunb86EcNEvd8kUnMD2JPZBvnS6wCSkCfpFGeYkrQ3DzHt8oGafHIyym5Q3MurKR49UZB7pNkO2MBzWPafOeYAgfwLBZBxoVTjPZCFl3Ex2BZAgDA0mYhZB4AQoQwZDZD"
module.exports = {
   send : function(sender_psid, response) {
     console.log("sender response :", response);
    // Construct the message body
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }
    console.log("Request body lol :", request_body);
  
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
   }
}
