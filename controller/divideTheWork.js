/*
created By: Fahim Hasnat
Comapny: V2 Technologies Ltd.
README.md
called from index.js
evaluate the incoming message
*/

const handleGetStarted = require("../services/getStarted").handleGetStarted;
const gateway = require("../services/gateway").gateway;
const textGateway = require("../services/gateway").textGateway;

module.exports = class dividethework {

  static type = async (responses, sender_psid, received_message) => {

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
          await handleGetStarted(responses, sender_psid);
        } else {
          if ("postback" in received_message) {
            let input = received_message.postback.payload.split("+");
            // if (input.length == 3) {
            //   let x = { goto: input[0], id: input[1] }
            //   IsValidate = false;
            // } else {
              let x = { goto: input[0], id: input[1] }
              await gateway(responses, sender_psid, x);
            // }
          }
        }
      }
      else if ("message" in received_message) {
        await textGateway(responses, sender_psid, received_message.message.text);
      }
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