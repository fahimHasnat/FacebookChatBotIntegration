const facebook = require('fb-messenger-bot-api');
const axios = require('axios');
require('dotenv').config();

module.exports = {
    checkType: function(sender_psid, item){
        console.log(item);
        // return new Promise((resolve, reject)=>{
        //     axios.post('https://services.stage.smashboard.co/chatbot/messagehandler/sendMessage', { sender_psid: sender_psid, item: item })
        //         .then(()=>{
        //             resolve(item);
        //         })
        //         .catch(function (error) {
        //             reject(error);
        //         });
        // });
        return new Promise((resolve, reject)=>{
            axios.post('https://162acd54.ngrok.io/sendMessage', { sender_psid: sender_psid, item: item })
                .then(()=>{
                    resolve(item);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}