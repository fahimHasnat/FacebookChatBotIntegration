const responses = require("../test file/gpFlow").getFlow;
const checkType = require("./checkType").checkType;
// const forward = require("./forwardings").forward;

const functions = {
    forwardings : function(sender_psid, goto, id) {
        for (key in responses) {
            if (key === goto) {
                for (item in responses[key]) {
                    if (responses[key][item].id === id) {
                        checkType(sender_psid, responses[key][item]).then(item => {
                            if (item.referred_to.goto === "Forwardings") {
                                functions.forwardings(sender_psid, item.referred_to.goto, item.referred_to.id);
                            }
                        });
                    }
                }
            }
        }
    }
}

module.exports = functions;