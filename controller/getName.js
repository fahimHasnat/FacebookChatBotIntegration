var tokenz = "EAAGoJNLqhtwBABKsNQtrreqtVLlSkTJJZCoWV5UuZAZCeaOF5Kzunb86EcNEvd8kUnMD2JPZBvnS6wCSkCfpFGeYkrQ3DzHt8oGafHIyym5Q3MurKR49UZB7pNkO2MBzWPafOeYAgfwLBZBxoVTjPZCFl3Ex2BZAgDA0mYhZB4AQoQwZDZD"
module.exports ={
    getName : function(sender_psid) {
        return new Promise((resolve, reject)=>{
            FB.options({
                appId: '466351087584988',
                appSecret: '061bd7aea147363d6a0fafe29703583f',
                default_graph_version : 'v5.0',
              });
          
              FB.api(
                `/${sender_psid}/`,{access_token: `${tokenz}`},
                function (response) {
                  if (response && !response.error) {
                    resolve(response.first_name);
                  } else{
                    reject(response.error);
                  }
                }
              );
        });
    }
}