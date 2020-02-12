const facebook = require('fb-messenger-bot-api');
const axios = require('axios');
require('dotenv').config();

module.exports = {
    checkType: function(sender_psid, item){
        return new Promise((resolve, reject)=>{
            axios.post('http://localhost:5001/sendMessage', { sender_psid: sender_psid, item: item })
                .then(()=>{
                    resolve(item);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}