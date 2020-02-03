// const responses = require("../test file/gpFlow").getFlow;
const checkType = require("./checkType").checkType;
const forwardings = require("./forwardings").forwardings;
const getStarted = require("./getStarted").handleGetStarted;
// const redis = require('redis');

// var client = redis.createClient();

const functions = {

    gateway: (responses, sender_psid, input) => {
        checkType(sender_psid, responses[input.goto].find(item => item.id == input.id)).then(item => {
            console.log(item);
            if ("referred_to" in item && item.referred_to.goto === "Forwardings") {
                forwardings(sender_psid, item.referred_to.goto, item.referred_to.id);
            }
        });
    },

    textGateway: (responses, sender_psid, input) => {
        return new Promise((resolve, reject) => {
            const result = responses["KeyValue"].find(item => item.key == input);
            if (result) {
                if (result.value.goto === "Get Started") {
                    getStarted(sender_psid).then(() => {
                        resolve(true);
                    });
                }
            } else {
                Object.keys(responses["Default"]).forEach(item =>{
                    forwardings(sender_psid,responses["Default"][item].goto,responses["Default"][item].id);
                });
            }
        });
    }
}

module.exports = functions;