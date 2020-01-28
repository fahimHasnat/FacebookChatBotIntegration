const responses = require("../test file/gpFlow").getFlow;
const checktype = require("./checkType").checkType;
const facebook = require('fb-messenger-bot-api');

const messageClient = new facebook.FacebookMessagingAPIClient(process.env.PAGE_ACCESS_TOKEN);

module.exports = {
    handleGetStarted : function(sender_psid) {
        for (key in responses) {
            // var k = {goto: "Forwardings", id:1};
            if (key === "Get Started") {
                console.log("Get Started :",responses[key]);
                checktype(sender_psid, responses[key]).then(item => {
                    if (item.referred_to.goto === "Forwardings") {
                        forwardings(sender_psid, item.referred_to.goto, item.referred_to.id);
                    }
                });
            }
        }
    }
}
