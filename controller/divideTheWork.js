const handleText = require('../services/handleText');

module.exports = class dividethework {

    static type = (sender_psid, received_message) => {
        console.log("dividethework :",sender_psid, received_message);
        let response =  handleText.handleMessage(sender_psid, received_message);
        console.log(response.attachment);
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