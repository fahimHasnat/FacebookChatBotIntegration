responses = {
    "Get Started": {
        "id": 0, "referred_to": {}, "type": "button", "text": "Hi,\nGreetings from Samsung Bangladesh. We have received your message and appreciate you for reaching us out.\nPlease select a language to continue", "buttons": [
            {
                "id": 1,
                "referred_to": { "goto": "Texts", "id": 3 },
                "type": "postback",
                "title": "English",
                "payload": "Texts+3"
            },
            {
                "id": 2,
                "referred_to": { "goto": "Buttons", "id": 4 },
                "type": "postback",
                "title": "বাংলা",
                "payload": "বাংলা"
            }
        ]
    },
    "Forwardings": [{
        "id": 4, "referred_to": { "goto": "Forwardings", "id": 5 }, "type": "text", "text": "Please choose from the below categories you want me to help you with.",
    },
    {
        "id": 5, "referred_to": {}, "type": "generic", "elements": [{
            "id": 6,
            "title": "Mobile 📱 ",
            "image_url": "https://phoneaqua.com/og/samsung.jpg",
            "subtitle": "We make what can't be made so you can do what can't be done.",
            "buttons": [
                {
                    "id": 7,
                    "referred_to": { "goto": "Texts", "id": 14 },
                    "type": "postback",
                    "title": "See Mobile List 📲 ",
                    "payload": "Texts+14"
                }
            ]
        }, {
            "id": 8,
            "title": "Consumer Electronics",
            "image_url": "https://www.teknodome.com/category/home_appliances/samsung_brand2.jpg",
            "subtitle": "Make smart choices for your home with Samsung",
            "buttons": [
                {
                    "id": 9,
                    "referred_to": {},
                    "type": "postback",
                    "title": "See some products",
                    "payload": "See some products"
                }
            ]
        }, {
            "id": 10,
            "title": " 🏬 Locations ",
            "image_url": "https://1.bp.blogspot.com/-FfssTuhnvNo/V8CfwfkZSLI/AAAAAAABOeY/ZaauHwu7Zr0zTNvTSPJ-h13nr4jVPYslQCLcB/s1600/Samsung%2Bstore.JPG",
            "subtitle": "And we are growing everyday to serve you in the best possible way",
            "buttons": [
                {
                    "id": 11,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://mygalaxy.fdl.com.bd/samsung_stores.html",
                    "title": "Mobile store 📱"
                }, {
                    "id": 12,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://estore.fdl.com.bd/",
                    "title": "Home Appliances 📺 "
                }, {
                    "id": 13,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://estore.fdl.com.bd/",
                    "title": "IT/Computing 🖥️ ",
                }
            ]
        }]
    },
    {
        "id": 15, "referred_to": {}, "type": "generic", "elements": [{
            "id": 16,
            "title": "A Series",
            "image_url": "https://i-cdn.phonearena.com/images/article/115197-two_lead/Samsungs-new-Galaxy-A-series-what-are-the-differences.jpg",
            "subtitle": "Meet the new Galaxy A Built for the Era of Live",
            "buttons": [
                {
                    "id": 17,
                    "referred_to": { "goto": "Texts", id: 36 },
                    "type": "postback",
                    "title": "Galaxy A",
                    "payload": "Texts+36"
                }
            ]
        }, {
            "id": 18,
            "title": "M Series",
            "image_url": "https://i.gadgets360cdn.com/large/samsung_galaxy_m_series_front_back_straight_1548636570398.jpg",
            "subtitle": "Introducing the new Samsung Galaxy M Series smartphones especially designed for the millennial users.",
            "buttons": [
                {
                    "id": 19,
                    "referred_to": {},
                    "type": "postback",
                    "title": "Galaxy M",
                    "payload": "Galaxy M"
                }
            ]
        }, {
            "id": 20,
            "title": "S Series",
            "image_url": "https://i.pinimg.com/236x/a7/b0/8d/a7b08dc5e20b76d4d2ea3acfc6927b26--galaxy-s-galaxy-samsung.jpg",
            "subtitle": "Samsung Galaxy S Series Mobiles comprise of Samsung's flagship-class devices.",
            "buttons": [
                {
                    "id": 21,
                    "referred_to": {},
                    "type": "postback",
                    "title": "Galaxy S",
                    "payload": "Galaxy S"
                }
            ]
        }, {
            "id": 22,
            "title": "Note Series",
            "image_url": "https://fossbytes.com/wp-content/uploads/2018/07/Samsung-cancel-note-series.jpg",
            "subtitle": "The Samsung Galaxy Note series is a series of high-end Android-based smartphones phablets and tablets",
            "buttons": [
                {
                    "id": 23,
                    "referred_to": {},
                    "type": "postback",
                    "title": "Galaxy Note",
                    "payload": "Galaxy Note"
                }
            ]
        }]
    },
    {
        "id": 25, "referred_to": {}, "type": "generic", "elements": [{
            "id": 26,
            "title": "Televisions",
            "image_url": "https://www.beyondtelevision.co.uk/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/S/a/Samsung_UE65RU7300_1000002817_3401000084.jpg.jpg",
            "subtitle": "Explore types of TV models ranging 8K & 4K QLED, The Frame, 4K UHD and more with curved & flat screens.",
            "buttons": [
                {
                    "id": 27,
                    "referred_to": {},
                    "type": "postback",
                    "title": "See All",
                    "payload": "See All"
                }
            ]
        },
        {
            "id": 28,
            "title": "Refrigerators",
            "image_url": "https://images.homedepot-static.com/productImages/04bd1702-a7aa-4f35-b485-b7e8dbf46e90/svn/stainless-steel-samsung-french-door-refrigerators-rf265beaesr-64_1000.jpg",
            "subtitle": "Discover the range of refrigerators at Samsung. Developed with the latest technology in a range of sizes and designs.",
            "buttons": [
                {
                    "id": 29,
                    "referred_to": {},
                    "type": "postback",
                    "title": "See All",
                    "payload": "See All"
                }
            ]
        }, {
            "id": 30,
            "title": "Washing Machines",
            "image_url": "https://sindabad.com/media/catalog/product/cache/15869ca78e92508fe510db2b345701fc/s/a/samsung-washing-machine-ww80j4213gs_tl_-8-kg.jpg",
            "subtitle": "Samsung offers all types of Washing Machines - Fully Automatic, Semi automatic, Top Load, Front Load and more.",
            "buttons": [
                {
                    "id": 31,
                    "referred_to": {},
                    "type": "postback",
                    "title": "See All",
                    "payload": "See All"
                }
            ]
        },
        {
            "id": 32,
            "title": "Microwave",
            "image_url": "https://d2hxhsle93cq7m.cloudfront.net/Thumbs/0007036_samsung-solo-microwave-oven-mw73ad-bd2-20-litre_1000.jpeg",
            "subtitle": "Samsung offers all types of Cooking Appliances like microwaves and other kitchen appliances for your kitchen.",
            "buttons": [
                {
                    "id": 33,
                    "referred_to": {},
                    "type": "postback",
                    "title": "See All",
                    "payload": "See All"
                }
            ]
        },
        {
            "id": 34,
            "title": "Samsung Accessories",
            "image_url": "https://image-us.samsung.com/us/smartphones/galaxy-note10/accessories/pcd/MB-Mobile-Accessories.jpg",
            "subtitle": "Discover the latest range of consumer products with cutting-edge technology including Smartphones, Barphones, Tabs.",
            "buttons": [
                {
                    "id": 35,
                    "referred_to": {},
                    "type": "postback",
                    "title": "See All",
                    "payload": "See All"
                }
            ]
        }]
    },
    {
        "id": 37, "referred_to": {}, "type": "generic", "elements": [{
            "id": 38,
            "title": "Galaxy A50",
            "image_url": "https://mygalaxy.fdl.com.bd/assets/img/a50/main.png",
            "subtitle": "Price:24,990\nSamsung Galaxy A50 Android smartphone. Announced Feb 2019. Features 6.4″ Super AMOLED display",
            "buttons": [
                {
                    "id": 39,
                    "referred_to": { "goto": "Texts", "id": 51 },
                    "type": "postback",
                    "title": "Specifications",
                    "payload": "Texts+51"
                },
                {
                    "id": 40,
                    "referred_to": {},
                    "type": "postback",
                    "title": "Pictures of Galaxy A50",
                    "payload": "Pictures of Galaxy A50"
                }
            ]
        },
        {
            "id": 41,
            "title": "Galaxy A51",
            "image_url": "https://mygalaxy.fdl.com.bd/assets/img/a51/main.png",
            "subtitle": "Price:29,999\nSamsung Galaxy A51 Android smartphone. Announced Dec 2019. Features 6.5″ Super AMOLED display, Exynos 9611 chipset..",
            "buttons": [
                {
                    "id": 42,
                    "referred_to": {"goto": "Texts", "id": 57},
                    "type": "postback",
                    "title": "See the details",
                    "payload": "Texts+57"
                },
                {
                    "id": 43,
                    "referred_to": {},
                    "type": "postback",
                    "title": "Pictures of Galaxy A51",
                    "payload": "Pictures of Galaxy A51"
                }
            ]
        },
        {
            "id": 44,
            "title": "Galaxy A10s",
            "image_url": "https://mygalaxy.fdl.com.bd/assets/img/a10s/main.png",
            "subtitle": "Price:12,499\nSamsung Galaxy A10s. Released 2019, September. 168g, 7.8mm thickness. Android 9.0. 32GB storage, microSDXC",
            "buttons": [
                {
                    "id": 45,
                    "referred_to": {"goto": "Texts", "id": 59},
                    "type": "postback",
                    "title": "Specs & Features",
                    "payload": "Texts+59"
                },
                {
                    "id": 46,
                    "referred_to": {},
                    "type": "postback",
                    "title": "Pictures of Galaxy A10s",
                    "payload": "Pictures of Galaxy A10s"
                }
            ]
        },
        {
            "id": 47,
            "title": "Galaxy A2 Core",
            "image_url": "https://mygalaxy.fdl.com.bd/assets/img/a10s/main.png",
            "subtitle": "Price:7,590\n Announced Apr 2019. Features 5.0″ PLS TFT display..",
            "buttons": [
                {
                    "id": 49,
                    "referred_to": {"goto": "Texts", "id": 61},
                    "type": "postback",
                    "title": "Specs & Features",
                    "payload": "Texts+61"
                },
                {
                    "id": 50,
                    "referred_to": {},
                    "type": "postback",
                    "title": "Pictures of Galaxy A2 Core",
                    "payload": "Pictures of Galaxy A2 Core"
                }
            ]
        }]
    },
    {
        "id": 52, "referred_to": { "goto":"Forwardings", "id": 53 }, "type": "media", "elements":
        {
            "url": "https://www.facebook.com/samra607/videos/2297898500233165/?v=2297898500233165&external_log_id=9f852aadd9d3109e1569a0c58e009f35&q=samsung%20a50"
        }
    },
    {
        "id": 53, "referred_to": {}, "type": "button", "text": "Like it ? Wanna buy ?", "buttons": [
            {
                "id": 54,
                "referred_to": { },
                "type": "web_url",
                "url": "https://estore.fdl.com.bd/",
                "title": "Online Link",
            },
            {
                "id": 55,
                "referred_to": { },
                "type": "web_url",
                "url": "https://mygalaxy.fdl.com.bd/samsung_stores.html",
                "title": "Buy from store"
            },
            {
                "id": 56,
                "referred_to": { "goto": "Forwardings", "id": 5},
                "type": "postback",
                "title": "Main Menu",
                "payload": "Forwardings+5"
            }
        ]
    },
    {
        "id": 58, "referred_to": { "goto":"Forwardings", "id": 53 }, "type": "media", "elements":
        {
            "url": "https://www.facebook.com/telemartstores/videos/206538047100612/?v=206538047100612&external_log_id=834ca28bbd14cc05157a4c1b5647892f&q=samsung%20a51"
        }
    },
    {
        "id": 60, "referred_to": { "goto":"Forwardings", "id": 53 }, "type": "media", "elements":
        {
            "url": "https://www.facebook.com/TechnologyTips4u/videos/413325492900375/?v=413325492900375&external_log_id=10e1b3037981a110d4273b156ffb0b59&q=galaxy%20a10s"
        }
    },
    {
        "id": 62, "referred_to": { "goto":"Forwardings", "id": 53 }, "type": "media", "elements":
        {
            "url": "https://www.facebook.com/mohamed.zamry2/videos/2246013568774967/"
        }
    },
    {
        "id": 115, "referred_by": 111, "referred_to": { "goto": "Forwardings", "id": 119 }, "type": "button", "text": "More", "buttons": [
            {
                "id": 116,
                "referred_to": { "goto": "Texts", "id": 11 },
                "referred_by": 111,
                "type": "postback",
                "title": "Huwaei",
                "payload": "Huwaei"
            },
            {
                "id": 117,
                "referred_to": { "goto": "Texts", "id": 37 },
                "referred_by": 111,
                "type": "postback",
                "title": "Symphony",
                "payload": "Symphony"
            },
            {
                "id": 118,
                "referred_to": { "goto": "Buttons", "id": 104 },
                "referred_by": 111,
                "type": "postback",
                "title": "HTC",
                "payload": "HTC"
            }
        ]
    },
    {
        "id": 119, "referred_by": 115, "referred_to": { "goto": "Forwardings", "id": 124 }, "type": "button", "text": "More", "buttons": [
            {
                "id": 120,
                "referred_to": { "goto": "Texts", "id": 11 },
                "referred_by": 115,
                "type": "postback",
                "title": "Lenovo",
                "payload": "Lenovo"
            },
            {
                "id": 121,
                "referred_to": { "goto": "Texts", "id": 37 },
                "referred_by": 115,
                "type": "postback",
                "title": "LAVA",
                "payload": "LAVA"
            },
            {
                "id": 123,
                "referred_to": { "goto": "Buttons", "id": 104 },
                "referred_by": 115,
                "type": "postback",
                "title": "Micromax",
                "payload": "Micromax"
            }
        ]
    },
    {
        "id": 124, "referred_by": 119, "referred_to": {}, "type": "button", "text": "More", "buttons": [
            {
                "id": 125,
                "referred_to": { "goto": "Texts", "id": 11 },
                "referred_by": 119,
                "type": "postback",
                "title": "Walton",
                "payload": "Walton"
            },
            {
                "id": 126,
                "referred_to": { "goto": "Texts", "id": 37 },
                "referred_by": 119,
                "type": "postback",
                "title": "Okapia",
                "payload": "Okapia"
            },
            {
                "id": 127,
                "referred_to": { "goto": "Buttons", "id": 104 },
                "referred_by": 119,
                "type": "postback",
                "title": "Current Offers",
                "payload": "Buttons+104"
            }
        ]
    }
    ],
    "Buttons": [{
        "id": 4, "referred_by": 1, "referred_to": { "goto": "Forwardings", "id": 8 }, "type": "button", "text": "Thank You 🙂 Please start your journey from the below list to get your desired service.", "buttons": [
            {
                "id": 5,
                "referred_to": { "goto": "Texts", "id": 11 },
                "referred_by": 1,
                "type": "postback",
                "title": "Recharge",
                "payload": "Texts+11"
            },
            {
                "id": 6,
                "referred_to": { "goto": "Texts", "id": 37 },
                "referred_by": 1,
                "type": "postback",
                "title": "Exlusive Voice Pack",
                "payload": "Texts+37"
            },
            {
                "id": 7,
                "referred_to": { "goto": "Texts", "id": 38 },
                "referred_by": 1,
                "type": "postback",
                "title": "Exclusive Data Pack",
                "payload": "Texts+38"
            }
        ]
    },
    {
        "id": 13, "referred_by": 12, "referred_to": {}, "type": "button", "text": "You are going to recharge #input1 Taka to #input2. Please Confirm.", "buttons": [
            {
                "id": 14,
                "referred_to": { "goto": "Texts", "id": 16 },
                "referred_by": 3,
                "type": "postback",
                "title": "Confirm",
                "payload": "Texts+16"
            },
            {
                "id": 15,
                "referred_to": { "goto": "Texts", "id": 11 },
                "referred_by": 3,
                "type": "postback",
                "title": "Change",
                "payload": "Texts+11"
            }
        ]
    },
    {
        "id": 60, "referred_by": 10, "referred_to": {}, "type": "button", "text": "Please choose from below options:", "buttons": [
            {
                "id": 61,
                "referred_to": { "goto": "Generics", "id": 64 },
                "referred_by": 10,
                "type": "postback",
                "title": "Special Call Rate",
                "payload": "Generics+64"
            },
            {
                "id": 62,
                "referred_to": { "goto": "Buttons", "id": 73 },
                "referred_by": 10,
                "type": "postback",
                "title": "Product & Shop",
                "payload": "Buttons+73"
            },
            {
                "id": 63,
                "referred_to": { "goto": "Texts", "id": 69 },
                "referred_by": 10,
                "type": "postback",
                "title": "Upgrade to 4G",
                "payload": "Texts+69"
            }
        ]
    },
    {
        "id": 73, "referred_by": 62, "referred_to": {}, "type": "button", "text": "Please select your desired option", "buttons": [
            {
                "id": 74,
                "referred_to": { "goto": "Buttons", "id": 77 },
                "referred_by": 62,
                "type": "postback",
                "title": "All Products",
                "payload": "Buttons+77"
            },
            {
                "id": 75,
                "referred_to": { "goto": "Generics", "id": 97 },
                "referred_by": 62,
                "type": "postback",
                "title": "GP Online Shop",
                "payload": "Generics+97"
            },
            {
                "id": 76,
                "referred_to": { "goto": "Texts", "id": 69 },
                "referred_by": 62,
                "type": "postback",
                "title": "Internet Package",
                "payload": "Internet Package"
            }
        ]
    },
    {
        "id": 77, "referred_by": 74, "referred_to": {}, "type": "button", "text": "Please select from below options", "buttons": [
            {
                "id": 78,
                "referred_to": { "goto": "Generics", "id": 80 },
                "referred_by": 74,
                "type": "postback",
                "title": "Prepaid",
                "payload": "Generics+80"
            },
            {
                "id": 79,
                "referred_to": { "goto": "Generics", "id": 92 },
                "referred_by": 74,
                "type": "postback",
                "title": "Postpaid",
                "payload": "Generics+92"
            }
        ]
    },
    {
        "id": 104, "referred_by": 101, "referred_to": { "goto": "Forwardings", "id": 107 }, "type": "button", "text": "Please select your desired offer from below options:", "buttons": [
            {
                "id": 105,
                "referred_to": { "goto": "Buttons", "id": 111 },
                "referred_by": 74,
                "type": "postback",
                "title": "Handsets",
                "payload": "Buttons+111"
            },
            {
                "id": 106,
                "referred_to": { "goto": "Generics", "id": 137 },
                "referred_by": 74,
                "type": "postback",
                "title": "Routers",
                "payload": "Generics+137"
            }
        ]
    },
    {
        "id": 111, "referred_by": 104, "referred_to": { "goto": "Forwardings", "id": 115 }, "type": "button", "text": "Please select your desired brand from following options", "buttons": [
            {
                "id": 112,
                "referred_to": { "goto": "Generics", "id": 128 },
                "referred_by": 104,
                "type": "postback",
                "title": "Nokia",
                "payload": "Generics+128"
            },
            {
                "id": 113,
                "referred_to": { "goto": "Generics", "id": 92 },
                "referred_by": 104,
                "type": "postback",
                "title": "Samsung",
                "payload": "Samsung"
            },
            {
                "id": 114,
                "referred_to": { "goto": "Generics", "id": 92 },
                "referred_by": 104,
                "type": "postback",
                "title": "Xiaomi",
                "payload": "Xiaomi"
            }
        ]
    }
    ],
    "Generics": [{
        "id": 64, "referred_by": 61, "referred_to": {}, "type": "generic", "elements": [{
            "id": 65,
            "referred_by": 61,
            "title": "48 poisha/minute call rate to any local number (10 sec pulse)",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Offers_48_Paisa_per_Minute_call_rate_upon_recharge_48_taka_Desktop_Inner.jpg",
            "subtitle": "48 hours",
            "buttons": [
                {
                    "id": 66,
                    "referred_by": 61,
                    "referred_to": { "goto": "Texts", "id": 11 },
                    "type": "postback",
                    "title": "Recharge",
                    "payload": "Texts+11"
                }, {
                    "id": 67,
                    "referred_by": 61,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/special-call-rate",
                    "title": "View Details"
                },
                {
                    "id": 68,
                    "referred_by": 61,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    }, {
        "id": 80, "referred_by": 78, "referred_to": {}, "type": "generic", "elements": [{
            "id": 81,
            "referred_by": 78,
            "title": "Nishchinto Package",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/generic-5.jpg",
            "subtitle": "It Offers you flat rate of 23 poisha per 10 second for 24 hours.",
            "buttons": [
                {
                    "id": 81,
                    "referred_by": 78,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages",
                    "title": "View Details"
                }, {
                    "id": 82,
                    "referred_by": 78,
                    "referred_to": { "goto": "Generics", "id": 92 },
                    "type": "postback",
                    "title": "Postpaid",
                    "payload": "Generics+92"
                }, {
                    "id": 83,
                    "referred_by": 78,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Support Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            "id": 84,
            "referred_by": 78,
            "title": "Bondhu Package",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/generic-6.jpg",
            "subtitle": "It allows you to talk to your near and dear ones at the lowest rate.",
            "buttons": [
                {
                    "id": 85,
                    "referred_by": 78,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages",
                    "title": "View Details"
                }, {
                    "id": 86,
                    "referred_by": 78,
                    "referred_to": { "goto": "Generics", "id": 92 },
                    "type": "postback",
                    "title": "Postpaid",
                    "payload": "Generics+92"
                }, {
                    "id": 87,
                    "referred_by": 78,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Support Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            "id": 88,
            "referred_by": 78,
            "title": "New djuice price plan from Grameenphone Ltd. is designed with the Youth in mind!",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/generic-4.jpg",
            "subtitle": "You can talk to any local operator number at only 25 poisha/ 10 second",
            "buttons": [
                {
                    "id": 89,
                    "referred_by": 78,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages",
                    "title": "View Details"
                }, {
                    "id": 90,
                    "referred_by": 78,
                    "referred_to": { "goto": "Generics", "id": 92 },
                    "type": "postback",
                    "title": "Postpaid",
                    "payload": "Generics+92"
                }, {
                    "id": 91,
                    "referred_by": 78,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Support Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    }, {
        "id": 92, "referred_by": 79, "referred_to": {}, "type": "generic", "elements": [{
            "id": 93,
            "referred_by": 79,
            "title": "Start a journey that only YOU plan.",
            "image_url": "https://www.grameenphone.com/sites/default/files/GP_Contact_us_tile.jpg",
            "subtitle": "Plan: 150Tk, 160Tk, 250Tk, 450Tk, 650Tk and 1000Tk.",
            "buttons": [
                {
                    "id": 94,
                    "referred_by": 79,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages#Postpaid",
                    "title": "View Details"
                }, {
                    "id": 95,
                    "referred_by": 79,
                    "referred_to": { "goto": "Generics", "id": 80 },
                    "type": "postback",
                    "title": "Prepaid",
                    "payload": "Generics+80"
                }, {
                    "id": 96,
                    "referred_by": 79,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Support Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    }, {
        "id": 97, "referred_by": 75, "referred_to": { "goto": "Forwardings", "id": 100 }, "type": "generic", "elements": [{
            "id": 98,
            "referred_by": 75,
            "title": "It offers you at your door-step telco service",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/GPS-WS5-Acc-01_InnerPageBanner-L-1920X464.jpg",
            "buttons": [
                {
                    "id": 99,
                    "referred_by": 75,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages#Postpaid",
                    "title": "View Details"
                }
            ]
        }]
    }, {
        "id": 128, "referred_by": 112, "referred_to": {}, "type": "generic", "elements": [{
            "id": 129,
            "referred_by": 112,
            "title": "Nokia 6",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/Grameenphone_Online_Shop_Nokia_6_Black_Featured_Front_2.png",
            "subtitle": "TK. 22,500 . Avail attractive EMI",
            "buttons": [
                {
                    "id": 130,
                    "referred_by": 112,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/phones/product/nokia-6",
                    "title": "View Details"
                },
                {
                    "id": 131,
                    "referred_by": 112,
                    "referred_to": { "goto": "Buttons", "id": 111 },
                    "type": "postback",
                    "title": "Handsets",
                    "payload": "Buttons+111"
                },
                {
                    "id": 132,
                    "referred_by": 112,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        },
        {
            "id": 133,
            "referred_by": 112,
            "title": "Nokia 6.1",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/Nokia-6_Device_front_500x500.png",
            "subtitle": "TK. TK.29,100 . Avail attractive EMI",
            "buttons": [
                {
                    "id": 134,
                    "referred_by": 112,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/phones/product/nokia-61",
                    "title": "View Details"
                },
                {
                    "id": 135,
                    "referred_by": 112,
                    "referred_to": { "goto": "Buttons", "id": 111 },
                    "type": "postback",
                    "title": "Handsets",
                    "payload": "Buttons+111"
                },
                {
                    "id": 136,
                    "referred_by": 112,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        }]
    },
    {
        "id": 137, "referred_by": 112, "referred_to": {}, "type": "generic", "elements": [{
            "id": 138,
            "referred_by": 112,
            "title": "GP 3G WiFi Carfi Router",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/Modem_PNG_2.png",
            "subtitle": "Taka 2499.",
            "buttons": [
                {
                    "id": 139,
                    "referred_by": 112,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/routers/product/gp-3g-wifi-carfi-router?utm_source=Digital%20Care",
                    "title": "View Details"
                },
                {
                    "id": 140,
                    "referred_by": 112,
                    "referred_to": { "goto": "Buttons", "id": 104 },
                    "type": "postback",
                    "title": "Current Offers",
                    "payload": "Buttons+104"
                },
                {
                    "id": 141,
                    "referred_by": 112,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        },
        {
            "id": 142,
            "referred_by": 112,
            "title": "GP 3G Pocket Router",
            "image_url": "https://ryanscomputers.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/r/grameen-phone-edge.jpg",
            "subtitle": "Taka 3945.",
            "buttons": [
                {
                    "id": 142,
                    "referred_by": 112,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/routers/product/gp-3g-pocket-router?utm_source=Digital%20Care",
                    "title": "View Details"
                },
                {
                    "id": 143,
                    "referred_by": 112,
                    "referred_to": { "goto": "Buttons", "id": 104 },
                    "type": "postback",
                    "title": "Current Offers",
                    "payload": "Buttons+104"
                },
                {
                    "id": 144,
                    "referred_by": 112,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        }]
    },
    {
        "id": 145, "referred_by": 108, "referred_to": {}, "type": "generic", "elements": [{
            "id": 138,
            "referred_by": 112,
            "title": "Day Day Band",
            "image_url": "https://sc01.alicdn.com/kf/HTB1sITIPVXXXXcKXXXXq6xXFXXXD/Shenzhen-New-heartrate-Smart-Bracelet-C6-Smart.jpg_350x350.jpg",
            "subtitle": "Your Fitness Partner TK. 1599. Extra belt free.",
            "buttons": [
                {
                    "id": 139,
                    "referred_by": 108,
                    "referred_to": {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/wearables/product/day-day-band?utm_source=Digital%20care",
                    "title": "View Details"
                },
                {
                    "id": 140,
                    "referred_by": 108,
                    "referred_to": { "goto": "Buttons", "id": 104 },
                    "type": "postback",
                    "title": "Current Offers",
                    "payload": "Buttons+104"
                },
                {
                    "id": 141,
                    "referred_by": 108,
                    "referred_to": { "goto": "Texts", "id": 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        }]
    }],
    "Media": [
    ],
    "KeyValue": [
        { "key": "Hello", "value": { "goto": "Get Started", "id": 0 } },
        { "key": "Hi", "value": { "goto": "Get Started", "id": 0 } },
        { "key": "Assalamualikum", "value": { "goto": "Get Started", "id": 0 } },
        { "key": "Yo", "value": { "goto": "Get Started", "id": 0 } },
        { "key": "Get Started", "value": { "goto": "Get Started", "id": 0 } },
        { "key": "get started", "value": { "goto": "Get Started", "id": 0 } },
        // { "key": "video", "value": { "goto": "Generics", "id": 500 } }
    ],
    "Texts": [
        { "id": 3, "referred_to": { "goto": "Forwardings", "id": 4 }, "type": "text", "text": "Hi Fahim, This is Sarah! I am here to answer your queries." },
        { "id": 14, "referred_to": { "goto": "Forwardings", "id": 15 }, "type": "text", "text": "Choosing is hard 😓 . Thats why I have categorized into different serieses for you, which series you are interested in ?" },
        { "id": 24, "referred_to": { "goto": "Forwardings", "id": 25 }, "type": "text", "text": "Lets decorate your home 🏠 . We have got a variety of products. Check Here 👇 " },
        { "id": 36, "referred_to": { "goto": "Forwardings", "id": 37 }, "type": "text", "text": "Nice choice !! 😁 Now choose a model that best suits you 👇 " },

        {
            "id": 51, "referred_to": { "goto": "Forwardings", "id": 52 }, "type": "text", "text": `Price : 24,990
        \nKey Specs & Features of Samsung Galaxy A50
        \n* Operating System Android v9.0 (Pie)
        \n* 6.4 inches (16.26 cm) bezel-less display with waterdrop notch.
        \n* Samsung Exynos 7 Octa 9610 Octa core Processor. 
        \n* 25 + 5 + 8 MP Triple Rear Cameras.
        \n* 4000 mAh battery with Fast Charging.
        \n* Dual SIM: Nano + Nano with Dual Standby VoLTE support.
        \n* On-screen Fingerprint Sensor.` },

        {
            "id": 57, "referred_to": { "goto": "Forwardings", "id": 58 }, "type": "text", "text": `Price : 30,999
        \nKey Specs & Features of Samsung Galaxy A51.
        \n* Operating System Android 10.0 + One UI 2.
        \n* 6.5 inches Super AMOLED capacitive touchscreen.
        \n* Octa-core (4x2.3 GHz Cortex-A73 + 4x1.7 GHz Cortex-A53).
        \n* 48 MP (wide) + 12 MP (ultrawide) + 5 MP (wide) dedicated macro camera + 5 MP depth sensor.
        \n* Li-Po 4000 mAh battery + Fast battery charging 15W.
        \n* Dual SIM: Nano + Nano with Dual Standby VoLTE support.
        \n* On Screen Fingerprint Display sensor.` },

        {
            "id": 59, "referred_to": { "goto": "Forwardings", "id": 60 }, "type": "text", "text": `Price : 12499
        \nKey Specs & Features of Samsung Galaxy A10s.
        \n* Operating System Android 9.0 (Pie).
        \n* 6.2 inches PLS TFT capacitive touchscreen, 16M colors.
        \n* Mediatek MT6762 Helio P22 (12 nm) Processor.
        \n* 13 MP, f/1.8, 28mm (wide), AF 2 MP, f/2.4, (depth).
        \n* Non-removable Li-Po 4000 mAh battery.
        \n* Dual SIM: Nano + Nano with Dual Standby VoLTE support.
        \n* Fingerprint (rear-mounted).` },

        {
            "id": 61, "referred_to": { "goto": "Forwardings", "id": 62 }, "type": "text", "text": `Price : 7,590
        \nKey Specs & Features of Samsung Galaxy A2 core.
        \n* Operating System Android 9.0 (Pie).
        \n* 5.0 inches (12.7 cm) display.
        \n* Plastic Back.
        \n* Samsung Exynos 7 Octa 7870 Tru-Octa Core Processor. 1 GB RAM. 16 GB internal storage, expandable upto 256 GB.
        \n* 5 MP Rear Camera.
        \n* 2600 mAh battery.
        \n* No Fingerprint Sensor.` },

        { "id": 36, "referred_to": {}, "type": "text", "text": "Our representatives are always there for you. What is your query ? " },
        { "id": 37, "referred_to": { "goto": "Forwardings", "id": 19 }, "type": "text", "text": "Let me present some very popular voice packs. Please swipe right to explore and select the best one 🙂 " },
        { "id": 38, "referred_to": { "goto": "Forwardings", "id": 39 }, "type": "text", "text": "Let me present some very popular data packs. Please swipe right to explore and select the best one 🙂 " },
    ],
    "Default": [
        { "goto": "Forwardings", "id": 4 }
    ],
    "Error": {
        "id": 1000, "referred_to": {}, "type": "text", "text": "Oops!! 🙊 Can't Understand. Forgive me and try again please"
    },
    "Inputs": [
        {
            "id": 150, "type": "number",
            "conditions": {
                "logic": { "==": [{ "var": "length" }, 11] },
                "regex": {
                    "expressions": {
                        "or": ["^017[0-9]", "^013[0-9]"]
                    }
                }
            },
            "referred_by": { "goto": "Texts", "id": 11 },
            "referred_to": { "goto": "Texts", "id": 12, "errorGoto": "Texts", "errorId": 17 }
        },
        {
            "id": 151, "type": "number",
            "conditions": {
                "regex": {
                    "expressions": {
                        "or": ["^[0-9]"]
                    }
                }
            },
            "referred_by": { "goto": "Texts", "id": 12 },
            "referred_to": { "goto": "Buttons", "id": 13, "errorGoto": "Texts", "errorId": 18 }
        }
    ]
}

module.exports = {
    getFlow: responses
}