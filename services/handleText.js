const Response = require("../models/response");

module.exports = {
  handleMessage: function (sender_psid, received_message) {
    return new Promise((resolve, reject)=>{
      Response.find({type: "text"})
        .select("response")
        .exec()
        .then(result => {
          // console.log(result[0].response.length);
          for(let i = 0;i<result[0].response.length; i++){
            if(result[0].response[i].key === received_message.text){
              response = {"text" : result[0].response[i].value};
              resolve(response);
            }
          }
        }).catch(err => {
          console.log("Get error :", err);
        });
      });
  }
};