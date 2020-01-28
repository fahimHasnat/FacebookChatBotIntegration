const responses = require("../test file/gpFlow").getFlow;
const checkType = require("./checkType").checkType;

module.exports = {
    forwardings : function(sender_psid, goto, id) {
        for (key in responses) {
            if (key === goto) {
                for (item in responses[key]) {
                    if (responses[key][item].id === id) {
                        checkType(sender_psid, responses[key][item]).then(item => {
                            if (item.referred_to.goto === "Forwardings") {
                                forwardings(sender_psid, item.referred_to.goto, item.referred_to.id);
                            }
                        });
                    }
                }
            }
        }
    }
}