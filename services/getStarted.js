const checktype = require("./checkType").checkType;

module.exports = {
    handleGetStarted: function (responses, sender_psid) {
        return new Promise((resolve, reject) => {
            checktype(sender_psid, responses["Get Started"]).then(item => {
                if ("referred_to" in item && item.referred_to.goto === "Forwardings") {
                    forwardings(sender_psid, item.referred_to.goto, item.referred_to.id);
                }
            });
            resolve();
        });
    }
}
