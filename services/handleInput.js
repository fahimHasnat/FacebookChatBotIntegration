const checkType = require("./checkType").checkType;
const jsonLogic = require('json-logic-js');
const redis = require('redis');

var client = redis.createClient(process.env.REDIS_URL);

const functions = {

    handleInput : function(responses, sender_psid, referred_to, input){
        var inputItem = responses[referred_to.goto].find(item => item.id == referred_to.id);
        functions.validateInput(inputItem.conditions, input).then(valid=>{
            if(valid){
                client.hdel('userInput', sender_psid);
                checkType(sender_psid, responses[inputItem.referred_to.goto].find(item => item.id == inputItem.referred_to.id)).then((item)=>{
                    if ("referred_to" in item && item.referred_to.goto === "Forwardings") {
                        forwardings(responses, sender_psid, item.referred_to.goto, item.referred_to.id);
                    }
                    if ("referred_to" in item && item.referred_to.goto === "Inputs") {
                        client.hset("userInput", sender_psid, JSON.stringify(item.referred_to), redis.print);
                    }
                });
            } else if(!valid){
                checkType(sender_psid, responses[inputItem.referred_to.errorGoto].find(item => item.id == inputItem.referred_to.errorId));
            }
        });
    },

    validateInput : async (conditions, input) => {

        let regex = true;
        let logic = true;
    
        if ("regex" in conditions && "expressions" in conditions.regex) {
            regex = await functions.evalExpressions(conditions.regex.expressions, input);
        }
    
        if ("logic" in conditions) {
            logic =  await functions.handleLogic(conditions.logic, input);
        };
        
        return (logic && regex);
    },

    evalExpressions : async (expressions, input) => {
        if ("or" in expressions) {
            return (await functions.orExpression(expressions["or"], input));
        }
        if ("and") {
            return (await functions.andExpression(expressions["and"], input));
        }
        return false;
    },

    orExpression : async (expressions, input) => {
        for (regex in expressions) {
            let regularExpression = new RegExp(expressions[regex]);
            if (regularExpression.test(input)) {
                return true;
            };
        }
        return false;
    },

    andExpression : async (expressions, input) => {
        for (regex in expressions) {
            let regularExpression = new RegExp(expressions[regex]);
            if (!regularExpression.test(input)) {
                return false;
            };
        }
        return true;
    },

    handleLogic : async (logic, input) => {
        let data = { "length": input.length };
        return jsonLogic.apply(logic, data);
    }
}

module.exports = functions;