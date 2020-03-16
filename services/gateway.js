// const responses = require("../test file/gpFlow").getFlow;
const checkType = require("./checkType").checkType;
const forwardings = require("./forwardings").forwardings;
const getStarted = require("./getStarted").handleGetStarted;
const redis = require('redis');

var client = redis.createClient(process.env.REDIS_URL);

const functions = {

    gateway: (responses, sender_psid, input) => {
        checkType(sender_psid, responses[input.goto].find(item => item.id == input.id)).then(item => {
            // if ("referred_to" in item && item.referred_to.goto === "Forwardings") {
            //     forwardings(responses, sender_psid, item.referred_to.goto, item.referred_to.id);
            // }
            if ("referred_to" in item && item.referred_to.forward == 1) {
                functions.gateway(responses, sender_psid, item.referred_to);
            }
            if ("referred_to" in item && item.referred_to.goto === "Inputs") {
                client.hset("userInput", sender_psid, JSON.stringify(item.referred_to), redis.print);
            }
        }).catch(() => {
            checkType(sender_psid, responses["Error"]);
        });
    },

    textGateway: (responses, sender_psid, input) => {
        return new Promise((resolve, reject) => {
            const result = responses["KeyValue"].find(item => item.key == input);
            console.log(result);
            if (result) {
                if (result.value.goto === "Get Started") {
                    getStarted(responses, sender_psid).then(() => {
                        resolve(true);
                    });
                } else {
                    checkType(sender_psid, responses[result.value.goto].find(item => item.id == result.value.id)).then(item => {
                        // if ("referred_to" in item && item.referred_to.goto === "Forwardings") {
                        //     forwardings(responses, sender_psid, item.referred_to.goto, item.referred_to.id);
                        // }
                        if ("referred_to" in item && item.referred_to.forward == 1) {
                            functions.gateway(responses, sender_psid, item.referred_to.goto, item.referred_to.id);
                        }
                        if ("referred_to" in item && item.referred_to.goto === "Inputs") {
                            client.hset("userInput", sender_psid, JSON.stringify(item.referred_to), redis.print);
                        }
                    })
                }
            } else {
                checkType(sender_psid, responses["Error"]).then(() => {
                    Object.keys(responses["Default"]).forEach(item => {
                        // console.log(responses["Default"][item].goto);
                        forwardings(responses, sender_psid, responses["Default"][item].goto, responses["Default"][item].id);
                    });
                });
            }
        });
    }
}

module.exports = functions;