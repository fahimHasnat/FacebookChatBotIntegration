const responses = require("../test file/gpFlow").getFlow;
const checkType = require("./checkType").checkType;
const forwardings = require("./forwardings").forwardings;
const getStarted = require("./getStarted").handleGetStarted;

const functions = {
    gateway: function (sender_psid, input) {
        Object.keys(responses[input.goto]).forEach((item)=>{
            if (responses[input.goto][item].id == input.id) {
                // console.log("Item :", responses[input.goto][item]);
                checkType(sender_psid, responses[input.goto][item]).then(item => {
                    if (item.referred_to.goto === "Forwardings") {
                        forwardings(sender_psid, item.referred_to.goto, item.referred_to.id);
                    }
                    // if ("input" in item.referred_to) {
                    //     forwardings.inputGateway(sender_psid, item.referred_to);
                    // }
                });
            }
        });
    },
    textGateway : function (sender_psid, input) {
        Object.keys(responses["KeyValue"]).forEach((item)=>{
            if(item == input){
                console.log(responses["KeyValue"][item].goto);
                if(responses["KeyValue"][item].goto === "Get Started"){
                    getStarted(sender_psid);
                }
            }
        });
    }
}

module.exports = functions;