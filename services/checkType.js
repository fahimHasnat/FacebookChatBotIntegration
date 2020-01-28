const facebook = require('fb-messenger-bot-api');
const dotenv = require('dotenv').config();

const messageClient = new facebook.FacebookMessagingAPIClient(process.env.PAGE_ACCESS_TOKEN);

module.exports = {
    checkType: function (sender_psid, item) {
        // console.log("CheckType :",item);
        return new Promise((resolve, reject) => {
            if (item.type == "button") {
                let text = item.text;
                let buttons = item.buttons;
                for (let i = 0; i < buttons.length; i++) {
                    delete buttons[i].id;
                    delete buttons[i].referred_to;
                    delete buttons[i].referred_by;
                }
                messageClient.toggleTyping(sender_psid, true).then(() => {
                    messageClient.sendButtonsMessage(sender_psid, text, buttons).then(() => {
                        messageClient.toggleTyping(sender_psid, false);
                        resolve(item);
                    });
                });    
            }
            if (item.type == "generic") {
                let res = { "template_type": "generic" };
                let result = item.elements;
                for (let i = 0; i < result.length; i++) {
                    delete result[i].id;
                    delete result[i].referred_by;
                    for (let j = 0; j < result[i].buttons.length; j++) {
                        delete result[i].buttons[j].id;
                        delete result[i].buttons[j].referred_by;
                        delete result[i].buttons[j].referred_to;
                    }
                }
                res.elements = result;
                messageClient.toggleTyping(sender_psid, true).then(() => {
                    messageClient.sendTemplateMessage(sender_psid, res).then(() => {
                        messageClient.toggleTyping(sender_psid, false);
                        resolve(item);
                    });
                });
                
            }
            if (item.type == "quick reply") {
                console.log(item.text);
                let result = item.quick_replies;
                for (let i = 0; i < result.length; i++) {
                    delete result[i].id;
                    delete result[i].referred_to;
                    delete result[i].referred_by;
                }
                console.log(result);
                resolve(item);
            }
            if (item.type == "image") {
                let result = item;
                console.log(result.image_url);
                resolve(item);
            }
            if (item.type == "text") {
                messageClient.toggleTyping(sender_psid, true).then(() => {
                    messageClient.sendTextMessage(sender_psid,item.text).then(() => {
                        messageClient.toggleTyping(sender_psid, false);
                        resolve(item);
                    });
                });
            }
        });
    }
}