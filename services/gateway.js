const responses = require("../test file/gpFlow").getFlow;
const checkType = require("./checkType").checkType;
const forwardings = require("./forwardings").forwardings;

module.exports = {
    gateway: function (sender_psid, input) {
        for (key in responses) {
            if (key === input.goto) {
                for (item in responses[key]) {
                    if (responses[key][item].id == input.id) {
                        console.log("Item :", responses[key][item]);
                        checkType(sender_psid, responses[key][item]).then(item => {
                            if (item.referred_to.goto === "Forwardings") {
                                forwardings(sender_psid, item.referred_to.goto, item.referred_to.id);
                            }
                            // if ("input" in item.referred_to) {
                            //     forwardings.inputGateway(sender_psid, item.referred_to);
                            // }
                        });
                    }
                }
            }
        }
    },
    inputGateway: function (sender_psid, input) {
        return new Promise((resolve, reject) => {

        });
    }
}