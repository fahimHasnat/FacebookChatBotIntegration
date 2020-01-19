module.exports ={
  handleMessage : function(sender_psid, received_message){
    let response;
          if (received_message.text == "Hello"){
            response = {
                "attachment":{
                  "type":"template",
                  "payload":{
                    "template_type":"button",
                    "text":`Hello, What do you want to do next?`,
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
          return response;
  }
}; 