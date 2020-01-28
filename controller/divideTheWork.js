// called from index.js
// evaluate the incoming message

const handleText = require('../services/handleText');
const sender = require("../services/sender");
const responses = require("../test file/gpFlow").getFlow;
const handleGetStarted = require("../services/getStarted").handleGetStarted;
const gateway = require("../services/gateway").gateway;
const handleInput = require("../services/gateway").inputGateway;
// console.log(responses);

module.exports = class dividethework {

  static type = async (sender_psid, received_message) => {

    // if (!IsValidate) {
    //   let input = received_message.postback.payload.split("+");
    //   if ("postback" in received_message) {
    //     IsValidate = handleInput();
    //   } else if ("message" in received_message) {
    //     IsValidate = handleInput();
    //   }
    // } else {
      if ("postback" in received_message) {
        if (received_message.postback.title == "Get Started") {
          await handleGetStarted(sender_psid);
        } else {
          if ("postback" in received_message) {
            let input = received_message.postback.payload.split("+");
            // if (input.length == 3) {
            //   let x = { goto: input[0], id: input[1] }
            //   IsValidate = false;
            // } else {
              let x = { goto: input[0], id: input[1] }
              await gateway(sender_psid, x);
            // }
          }
        }
      }
      else if ("message" in received_message) {

      }
    // }

    // console.log("dividethework :",sender_psid, received_message);
    // handleText.handleMessage(sender_psid, received_message).then(response => {
    //   console.log("dividethework :", response);
    //   sender.send(sender_psid, response);
    // });
    // if(data.type == "text"){
    //     handleText.handleMessage(data.sender_psid, data.received_message)
    // }
  }
};

/*
{
  "object": "page",
  "entry": [
    { "messaging": [{
      "message": {
    	"mid": "m_Kn6RlY-kEEWoSUr8JF8xf9cg6TBkte8tWIqYGQe2aQk4HFsGFuxPQmOXKmL1NzI0Xta0XvVRTL6hWtHqiYV4jQ",
		"text": "Hello"
		}
    }] }
  ]
}
*/