let Search = require('search-json');
var family = {
    "Smiths": {
        "Jonathan Smith": { "id": 0 },
        "Adam Smith": { "id": 1, "father": 0 },
        "Suzy Smith": { "id": 4, "father": 1 },
        "Clare Smith": { "id": 5, "father": 1 },
        "Aaron Smith": { "id": 6, "father": 1 },
        "Simon Smith": { "id": 7, "father": 1 },
        "Timmy Smith": { "id": 2, "father": 0 },
        "Alison Smith": { "id": 3, "father": 0 },
        "Natasha Smith": { "id": 8, "father": 3 },
        "Zak Smith": { "id": 9, "father": 3 }
    }
}

var responses = {
    "Get Started": { id: 0, referred_to: {goto:"Forwardings", id:1}, type: "text", text: "Hello Sir/madam, Good Morning" },
    "Forwardings": [{
        id: 1, referred_by: 0, referred_to: {}, type: "button", text: "How can I help you?",
        buttons: [{
            id: 2,
            referred_to: {goto:"Buttons",id:5},
            referred_by: 0,
            "type": "postback",
            "title": "Men's Clothing",
            "payload": `Buttons+5`
        },
        {
            id: 3,
            referred_to: 6,
            referred_by: 0,
            "type": "postback",
            "title": "Women's Clothing",
            "payload": "Women's Clothing"
        },
        {
            id: 4,
            referred_to: 7,
            referred_by: 0,
            "type": "postback",
            "title": "kid's Clothing",
            "payload": "kid's Clothing"
        }
        ]
    },{
        id: 27, referred_by: 19, type: "button", text: "Do you like it ?",
        buttons: [{
            id: 28,
            referred_to: 18,
            referred_by: 19,
            "type": "postback",
            "title": "Order Now",
            "payload": "Order Now"
        },
        {
            id: 29,
            referred_to: 6,
            referred_by: 19,
            "type": "postback",
            "title": "See More",
            "payload": "See More"
        }
        ]
    }],
    "Buttons": [{
        id: 5, referred_by: 2, text: "What do you want to buy?", buttons: [
            {
                id: 8,
                referred_to: {goto:"Generics",id:14},
                referred_by: 2,
                "type": "postback",
                "title": "Jeans",
                "payload": "Generics+14"
            },
            {
                id: 9,
                referred_to: 999,
                referred_by: 2,
                "type": "postback",
                "title": "Shirts",
                "payload": "Shirts"
            },
            {
                id: 10,
                referred_to: 999,
                referred_by: 2,
                "type": "postback",
                "title": "Shorts",
                "payload": "Shorts"
            }
        ]
    }, {
        id: 6, referred_by: 2, referred_to: 999, text: "What do you want to buy?", buttons: [
            {
                id: 11,
                referred_to: 999,
                referred_by: 3,
                "type": "postback",
                "title": "Jeans",
                "payload": "Jeans"
            },
            {
                id: 12,
                referred_to: 999,
                referred_by: 3,
                "type": "postback",
                "title": "Kamiz",
                "payload": "Kamiz"
            },
            {
                id: 13,
                referred_to: 999,
                referred_by: 3,
                "type": "postback",
                "title": "Scarfs",
                "payload": "Scarfs"
            }
        ]
    }],
    "Generics": [{
        id: 14, referred_by: 8, elements: [{
            id: 15,
            referred_by: 8,
            "title": "White Denim Jean",
            "image_url": "Image Url of a White Jean",
            "subtitle": "Ready to wear with some black kicks",
            "buttons": [
                {
                    id: 16,
                    referred_by: 8,
                    referred_to: 18,
                    "type": "postback",
                    "title": "Order Now",
                    "payload": "Order Now"
                }, {
                    id: 17,
                    referred_by: 8,
                    referred_to: 26,
                    "type": "postback",
                    "title": "Show Item",
                    "payload": "Show Item"
                }
            ]
        }]
    }],
    "Quick Replies": [{
        id: 18, referred_by: 16, referred_to: 22, text: "Which color do you like ?",
        quick_replies: [
            {
                id: 19,
                referred_by: 16,
                referred_to: 22,
                "content_type": "text",
                "title": "Red ",
                "payload": "Red",
                "image_url": "https://usercontent2.hubstatic.com/7197541_f1024.jpg"
            },
            {
                id: 20,
                referred_by: 16,
                referred_to: 22,
                "content_type": "text",
                "title": "Green",
                "payload": "Green",
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Color-Green.JPG"
            },
            {
                id: 21,
                referred_by: 16,
                referred_to: 22,
                "content_type": "text",
                "title": "Blue",
                "payload": "Blue",
                "image_url": "https://miro.medium.com/max/512/1*7uObADW_J1O5UMyyoVwLTg.png"
            }
        ]
    }, {
        id: 22, referred_by: 18, referred_to: 999, text: "Which size do you prefer ?",
        quick_replies: [
            {
                id: 23,
                referred_by: 18,
                referred_to: 999,
                "content_type": "text",
                "title": "S ",
                "payload": "S",
                "image_url": "https://usercontent2.hubstatic.com/7197541_f1024.jpg"
            },
            {
                id: 24,
                referred_by: 18,
                referred_to: 999,
                "content_type": "text",
                "title": "S",
                "payload": "S",
                "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Color-Green.JPG"
            },
            {
                id: 25,
                referred_by: 18,
                referred_to: 999,
                "content_type": "text",
                "title": "M",
                "payload": "M",
                "image_url": "https://miro.medium.com/max/512/1*7uObADW_J1O5UMyyoVwLTg.png"
            }
        ]
    }],
    "Images": [{
        id: 26,
        referred_by: 19,
        referred_to: 27,
        "image_url":"Red color er jeans er image url"
    }]
}

var input = process.argv[2];
if(input === "Get Started"){
    forGetStarted(input);
    
} else {
    let temp = input.split("+");
    x = { goto: temp[0], id: temp[1] }
    gateway(x);
}

// console.log(responses["Get Started"]);
function forGetStarted(input){
    for(key in responses){
        // var k = {goto: "Forwardings", id:1};
        if(key === input){
            if(responses[key].type === "text"){
                // console.log(responses[key]);
                console.log(`text : ${responses[key].text}`);
                if(responses[key].referred_to.goto === "Forwardings"){
                    forwardings(responses[key].referred_to.goto, responses[key].referred_to.id);
                }
            }
        }
    }
}

function gateway(input){
    for(key in responses){
        // console.log(input.goto);
        if(key === input.goto){
            if(responses[key].type === "generic"){
                // console.log(responses[key]);
                console.log(`text : ${responses[key].text}`);
                if(responses[key].referred_to.goto === "Forwardings"){
                    forwardings(responses[key].referred_to.goto, responses[key].referred_to.id);
                }
            }
        }
    }
}


function checkType(item){
    return new Promise((resolve, reject)=>{
        if(item.type == "button"){
            let result = item.buttons;
            for(let i = 0; i<result.length; i++){
                delete result[i].id;
                delete result[i].referred_to;
                delete result[i].referred_by;
            }
            console.log(result);
            resolve(item);
        }
    });
}

function forwardings(goto, id){
    for(key in responses){
        if(key === goto){
            for(item in responses[key]){
                if(responses[key][item].id === id){
                    checkType(responses[key][item]).then(item=>{
                        if(item.referred_to.goto === "Forwardings"){
                            forwardings(item.referred_to.goto, item.referred_to.id);
                        }
                    });
                }
            }
        }
    }
}























// family.Smiths = {...family.Smiths, "Fahim Hasnat" : {"id":10, type:"postback"}}
// console.log(family.Smiths);
// for (key in family.Smiths) {
//     // console.log(family.Smiths[key].father + "      "+family.Smiths[key].id);
//     for (key2 in family.Smiths) {
//         if (family.Smiths[key].father == family.Smiths[key2].id) {
//             console.log(key + "'s father is :", key2);
//         }
//     }
    // console.log(key+"'s father is :",family.Smiths[key].father == family.Smiths[key].id ? key : "none");
// }