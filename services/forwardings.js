// const responses = require("../test file/gpFlow").getFlow;
const checkType = require("./checkType").checkType;
// const forward = require("./forwardings").forward;

const functions = {
    forwardings : function(responses, sender_psid, goto, id) {
        checkType(sender_psid, responses[goto].find(item => item.id == id)).then(item => {
            if (item.referred_to.goto === "Forwardings") {
                functions.forwardings(responses, sender_psid, item.referred_to.goto, item.referred_to.id);
            }
            if ("referred_to" in item && item.referred_to.goto === "Inputs") {
                client.hset("userInput", sender_psid, JSON.stringify(item.referred_to), redis.print);
            }
        });
    }
}

module.exports = functions;