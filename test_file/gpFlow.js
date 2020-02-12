responses = {
    "Get Started": {
        id: 0, referred_to: {}, type: "button", text: `
        Hi,\nThis is Neel.\nPlease select a language to continue\nহ্যালো,\nআমি নীল।\nঅনুগ্রহ করে ভাষা নির্বাচন করুন।`, buttons: [
            {
                id: 1,
                referred_to: { goto: "Buttons", id: 4 },
                referred_by: 2,
                "type": "postback",
                "title": "English",
                "payload": "Buttons+4"
            },
            {
                id: 2,
                referred_to: { goto: "Buttons", id: 4 },
                referred_by: 2,
                "type": "postback",
                "title": "বাংলা",
                "payload": "Buttons+4"
            },
            {
                id: 3,
                referred_to: { goto: "Generics", id: 56 },
                referred_by: 2,
                "type": "postback",
                "title": "MyGP App",
                "payload": "Generics+56"
            }
        ]
    },
    "Forwardings": [{
        id: 8, referred_by: 4, referred_to: {}, type: "button", text: "More",
        buttons: [{
            id: 9,
            referred_to: { goto: "Generics", id: 56 },
            referred_by: 4,
            "type": "postback",
            "title": "Comeback Offer",
            "payload": `Generics+56`
        },
        {
            id: 10,
            referred_to: { goto: "Buttons", id: 60 },
            referred_by: 4,
            "type": "postback",
            "title": "More Info",
            "payload": "Buttons+60"
        }
        ]
    },
    {
        id: 19, referred_by: 6, referred_to: {}, type: "generic", elements: [{
            id: 20,
            referred_by: 8,
            "title": "Special call rate: 48 tk recharge",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Offers_48_Paisa_per_Minute_call_rate_upon_recharge_48_taka_Desktop_Inner.jpg",
            "subtitle": "48 poisha/minute call rate to any local number (10 sec pulse) + 4 MMS",
            "buttons": [
                {
                    id: 21,
                    referred_by: 6,
                    referred_to: { goto: "Texts", id: 11 },
                    "type": "postback",
                    "title": "Recharge Now",
                    "payload": "Texts+11"
                }, {
                    id: 22,
                    referred_by: 8,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/special-call-rate",
                    "title": "View Details"
                }, {
                    id: 23,
                    referred_by: 8,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            id: 24,
            referred_by: 6,
            "title": "40 Minutes at Tk 24, validity 24 hours",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Offer_40Min24Tk_desktop_inner.jpg",
            "subtitle": "To Acivate dial *121*4002#",
            "buttons": [
                {
                    id: 25,
                    referred_by: 6,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/offer-purchase/step-1/40_min_at_tk_24",
                    "title": "Buy"
                }, {
                    id: 26,
                    referred_by: 6,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/40-minutes-tk-24",
                    "title": "View Details"
                }, {
                    id: 27,
                    referred_by: 6,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            id: 28,
            referred_by: 6,
            "title": "330 Minutes at Tk 199",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Offers_330_Minutes_at_Tk_199_Desktop_Inner.jpg",
            "subtitle": "To activate need to dial *121*4018#",
            "buttons": [
                {
                    id: 29,
                    referred_by: 6,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/330-minutes-tk-199",
                    "title": "Buy"
                }, {
                    id: 30,
                    referred_by: 6,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/330-minutes-tk-199",
                    "title": "View Details"
                }, {
                    id: 31,
                    referred_by: 6,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            id: 32,
            referred_by: 6,
            "title": "100 Minutes at Tk 59, validity 7 days",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Offer_100minutes_59tk_desktop_inner.jpg",
            "subtitle": "Eligible customers will need to dial *121*420",
            "buttons": [
                {
                    id: 33,
                    referred_by: 6,
                    referred_to: { goto: "Texts", id: 11 },
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/100-minutes-pack",
                    "title": "Buy"
                }, {
                    id: 34,
                    referred_by: 6,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/100-minutes-pack",
                    "title": "View Details"
                }, {
                    id: 35,
                    referred_by: 6,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    },
    {
        id: 39, referred_by: 38, referred_to: {}, type: "generic", elements: [{
            id: 40,
            referred_by: 38,
            "title": "1GB for 7 Days (Activation+6) days at Taka 89",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Offer_Internet_1GB_desktop_inner.jpg",
            "subtitle": "To enjoy this offer dial *121*3056#",
            "buttons": [
                {
                    id: 41,
                    referred_by: 38,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/internet-package-activation/step-1/5606",
                    "title": "Buy"
                }, {
                    id: 42,
                    referred_by: 38,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/1gb-only-tk-89",
                    "title": "View Details"
                }, {
                    id: 43,
                    referred_by: 38,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            id: 44,
            referred_by: 38,
            "title": "3GB Internet Pack at 108 Tk, validity 7 days",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_3GB_Tk108_desktop_inner.jpg",
            "subtitle": "To Activate you need to dial *121*3344#",
            "buttons": [
                {
                    id: 45,
                    referred_by: 38,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/internet-package-activation/step-1/5872",
                    "title": "Buy"
                }, {
                    id: 46,
                    referred_by: 38,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/3gb-tk-108",
                    "title": "View Details"
                }, {
                    id: 47,
                    referred_by: 38,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            id: 48,
            referred_by: 38,
            "title": "2GB 54 Tk 3 days (72hours)",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Internet_Offer_2GB_Tk54_desktop_inner.jpg",
            "subtitle": "To avail the offer dial *121*3242#",
            "buttons": [
                {
                    id: 49,
                    referred_by: 38,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/internet-package-activation/step-1/6335",
                    "title": "Buy"
                }, {
                    id: 50,
                    referred_by: 38,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/2gb-tk-54",
                    "title": "View Details"
                }, {
                    id: 51,
                    referred_by: 38,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            id: 52,
            referred_by: 38,
            "title": "3GB Internet at TK 67, validity 3 days",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Offer_3GB_Tk67_desktop_inner.jpg",
            "subtitle": "To enjoy this offer dial *121*3282#",
            "buttons": [
                {
                    id: 53,
                    referred_by: 38,
                    referred_to: { goto: "Texts", id: 11 },
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/internet-package-activation/step-1/7324",
                    "title": "Buy"
                }, {
                    id: 54,
                    referred_by: 38,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/3gb-3days",
                    "title": "View Details"
                }, {
                    id: 55,
                    referred_by: 38,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    },
    {
        id: 60, referred_by: 38, referred_to: {}, type: "generic", elements: [{
            id: 40,
            referred_by: 38,
            "title": "1GB for 7 Days (Activation+6) days at Taka 89",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Offer_Internet_1GB_desktop_inner.jpg",
            "subtitle": "To enjoy this offer dial *121*3056#",
            "buttons": [
                {
                    id: 41,
                    referred_by: 38,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/internet-package-activation/step-1/5606",
                    "title": "Buy"
                }, {
                    id: 42,
                    referred_by: 38,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/1gb-only-tk-89",
                    "title": "View Details"
                }, {
                    id: 43,
                    referred_by: 38,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    },
    {
        id: 70, referred_by: 69, referred_to: {}, type: "generic", elements: [{
            id: 71,
            referred_by: 69,
            "title": "Our dedicated delivery partner will reach you",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/subpage_images/Explore_all_offers_Tile.jpg",
            "subtitle": "(within Dhaka, Chittagong & Sylhet Metropolitan City) at your door-step",
            "buttons": [
                {
                    id: 72,
                    referred_by: 69,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/sim-replacement",
                    "title": "SIM Replacement"
                }, {
                    id: 73,
                    referred_by: 69,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Support Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    },
    {
        id: 100, referred_by: 97, referred_to: {}, type: "button", text: "Take your online shopping experience to a new level by exploring GP Online Shop.  For detailed information select from below options", buttons: [
            {
                id: 101,
                referred_to: { goto: "Buttons", id: 104 },
                referred_by: 97,
                "type": "postback",
                "title": "Current Offers",
                "payload": "Buttons+104"
            },
            {
                id: 102,
                referred_to: { goto: "Texts", id: 37 },
                referred_by: 97,
                "type": "postback",
                "title": "Payment Options",
                "payload": "Payment Options"
            },
            {
                id: 103,
                referred_to: { goto: "Texts", id: 38 },
                referred_by: 97,
                "type": "postback",
                "title": "Delivery Process",
                "payload": "Delivery Process"
            }
        ]
    },
    {
        id: 107, referred_by: 104, referred_to: {}, type: "button", text: "More", buttons: [
            {
                id: 108,
                referred_to: { goto: "Generics", id: 145 },
                referred_by: 104,
                "type": "postback",
                "title": "Wearables",
                "payload": "Generics+145"
            },
            {
                id: 109,
                referred_to: { goto: "Texts", id: 37 },
                referred_by: 104,
                "type": "postback",
                "title": "Modems",
                "payload": "Modems"
            },
            {
                id: 110,
                referred_to: { goto: "Generics", id: 97 },
                referred_by: 104,
                "type": "postback",
                "title": "GP Online Shop",
                "payload": "Generics+97"
            }
        ]
    },
    {
        id: 115, referred_by: 111, referred_to: { goto: "Forwardings", id: 119 }, type: "button", text: "More", buttons: [
            {
                id: 116,
                referred_to: { goto: "Texts", id: 11 },
                referred_by: 111,
                "type": "postback",
                "title": "Huwaei",
                "payload": "Huwaei"
            },
            {
                id: 117,
                referred_to: { goto: "Texts", id: 37 },
                referred_by: 111,
                "type": "postback",
                "title": "Symphony",
                "payload": "Symphony"
            },
            {
                id: 118,
                referred_to: { goto: "Buttons", id: 104 },
                referred_by: 111,
                "type": "postback",
                "title": "HTC",
                "payload": "HTC"
            }
        ]
    },
    {
        id: 119, referred_by: 115, referred_to: { goto: "Forwardings", id: 124 }, type: "button", text: "More", buttons: [
            {
                id: 120,
                referred_to: { goto: "Texts", id: 11 },
                referred_by: 115,
                "type": "postback",
                "title": "Lenovo",
                "payload": "Lenovo"
            },
            {
                id: 121,
                referred_to: { goto: "Texts", id: 37 },
                referred_by: 115,
                "type": "postback",
                "title": "LAVA",
                "payload": "LAVA"
            },
            {
                id: 123,
                referred_to: { goto: "Buttons", id: 104 },
                referred_by: 115,
                "type": "postback",
                "title": "Micromax",
                "payload": "Micromax"
            }
        ]
    },
    {
        id: 124, referred_by: 119, referred_to: {}, type: "button", text: "More", buttons: [
            {
                id: 125,
                referred_to: { goto: "Texts", id: 11 },
                referred_by: 119,
                "type": "postback",
                "title": "Walton",
                "payload": "Walton"
            },
            {
                id: 126,
                referred_to: { goto: "Texts", id: 37 },
                referred_by: 119,
                "type": "postback",
                "title": "Okapia",
                "payload": "Okapia"
            },
            {
                id: 127,
                referred_to: { goto: "Buttons", id: 104 },
                referred_by: 119,
                "type": "postback",
                "title": "Current Offers",
                "payload": "Buttons+104"
            }
        ]
    }
    ],
    "Buttons": [{
        id: 4, referred_by: 1, referred_to: { goto: "Forwardings", id: 8 }, type: "button", text: "Thank You 🙂 Please start your journey from the below list to get your desired service.", buttons: [
            {
                id: 5,
                referred_to: { goto: "Texts", id: 11 },
                depth: "Buttons+4+5",
                "type": "postback",
                "title": "Recharge",
                "payload": "Texts+11" 
            },
            {
                id: 6,
                referred_to: { goto: "Texts", id: 37 },
                referred_by: 1,
                "type": "postback",
                "title": "Exlusive Voice Pack",
                "payload": "Texts+37"
            },
            {
                id: 7,
                referred_to: { goto: "Texts", id: 38 },
                referred_by: 1,
                "type": "postback",
                "title": "Exclusive Data Pack",
                "payload": "Texts+38"
            }
        ]
    },
    {
        id: 13, referred_by: 12, referred_to: {}, text: "You are going to recharge #input1 Taka to #input2. Please Confirm.", buttons: [
            {
                id: 14,
                referred_to: { goto: "Texts", id: 16 },
                referred_by: 3,
                "type": "postback",
                "title": "Confirm",
                "payload": "Texts+16"
            },
            {
                id: 15,
                referred_to: { goto: "Texts", id: 11 },
                referred_by: 3,
                "type": "postback",
                "title": "Change",
                "payload": "Texts+11"
            }
        ]
    },
    {
        id: 60, referred_by: 10, referred_to: {}, type: "button", text: "Please choose from below options:", buttons: [
            {
                id: 61,
                referred_to: { goto: "Generics", id: 64 },
                referred_by: 10,
                "type": "postback",
                "title": "Special Call Rate",
                "payload": "Generics+64"
            },
            {
                id: 62,
                referred_to: { goto: "Buttons", id: 73 },
                referred_by: 10,
                "type": "postback",
                "title": "Product & Shop",
                "payload": "Buttons+73"
            },
            {
                id: 63,
                referred_to: { goto: "Texts", id: 69 },
                referred_by: 10,
                "type": "postback",
                "title": "Upgrade to 4G",
                "payload": "Texts+69"
            }
        ]
    },
    {
        id: 73, referred_by: 62, referred_to: {}, type: "button", text: "Please select your desired option", buttons: [
            {
                id: 74,
                referred_to: { goto: "Buttons", id: 77 },
                referred_by: 62,
                "type": "postback",
                "title": "All Products",
                "payload": "Buttons+77"
            },
            {
                id: 75,
                referred_to: { goto: "Generics", id: 97 },
                referred_by: 62,
                "type": "postback",
                "title": "GP Online Shop",
                "payload": "Generics+97"
            },
            {
                id: 76,
                referred_to: { goto: "Texts", id: 69 },
                referred_by: 62,
                "type": "postback",
                "title": "Internet Package",
                "payload": "Internet Package"
            }
        ]
    },
    {
        id: 77, referred_by: 74, referred_to: {}, type: "button", text: "Please select from below options", buttons: [
            {
                id: 78,
                referred_to: { goto: "Generics", id: 80 },
                referred_by: 74,
                "type": "postback",
                "title": "Prepaid",
                "payload": "Generics+80"
            },
            {
                id: 79,
                referred_to: { goto: "Generics", id: 92 },
                referred_by: 74,
                "type": "postback",
                "title": "Postpaid",
                "payload": "Generics+92"
            }
        ]
    },
    {
        id: 104, referred_by: 101, referred_to: { goto: "Forwardings", id: 107 }, type: "button", text: "Please select your desired offer from below options:", buttons: [
            {
                id: 105,
                referred_to: { goto: "Buttons", id: 111 },
                referred_by: 74,
                "type": "postback",
                "title": "Handsets",
                "payload": "Buttons+111"
            },
            {
                id: 106,
                referred_to: { goto: "Generics", id: 137 },
                referred_by: 74,
                "type": "postback",
                "title": "Routers",
                "payload": "Generics+137"
            }
        ]
    },
    {
        id: 111, referred_by: 104, referred_to: { goto: "Forwardings", id: 115 }, type: "button", text: "Please select your desired brand from following options", buttons: [
            {
                id: 112,
                referred_to: { goto: "Generics", id: 128 },
                referred_by: 104,
                "type": "postback",
                "title": "Nokia",
                "payload": "Generics+128"
            },
            {
                id: 113,
                referred_to: { goto: "Generics", id: 92 },
                referred_by: 104,
                "type": "postback",
                "title": "Samsung",
                "payload": "Samsung"
            },
            {
                id: 114,
                referred_to: { goto: "Generics", id: 92 },
                referred_by: 104,
                "type": "postback",
                "title": "Xiaomi",
                "payload": "Xiaomi"
            }
        ]
    }
    ],
    "Generics": [{
        id: 56, referred_by: 3, referred_to: {}, type: "generic", elements: [{
            id: 57,
            referred_by: 3,
            "title": "গ্রামীণফোন নিয়ে এলো পারসোনালাইজড সেলফ সার্ভিস MyGP App",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/digital-service/image_app_mygp_Optimized.png",
            "subtitle": "এবার হবে সবকিছু MyGP App এ",
            "buttons": [
                {
                    id: 58,
                    referred_by: 3,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/digital-services/other-services/gp-app-mobile-self-service",
                    "title": "Benefits of MyGp App"
                }, {
                    id: 59,
                    referred_by: 3,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://mygp.grameenphone.com/mygp/dashboard",
                    "title": "Install"
                }
            ]
        }]
    }, {
        id: 64, referred_by: 61, referred_to: {}, type: "generic", elements: [{
            id: 65,
            referred_by: 61,
            "title": "48 poisha/minute call rate to any local number (10 sec pulse)",
            "image_url": "https://cdn01.grameenphone.com/sites/default/files/GP_Offers_48_Paisa_per_Minute_call_rate_upon_recharge_48_taka_Desktop_Inner.jpg",
            "subtitle": "48 hours",
            "buttons": [
                {
                    id: 66,
                    referred_by: 61,
                    referred_to: { goto: "Texts", id: 11 },
                    "type": "postback",
                    "title": "Recharge",
                    "payload": "Texts+11"
                }, {
                    id: 67,
                    referred_by: 61,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/offers/special-call-rate",
                    "title": "View Details"
                },
                {
                    id: 68,
                    referred_by: 61,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    }, {
        id: 80, referred_by: 78, referred_to: {}, type: "generic", elements: [{
            id: 81,
            referred_by: 78,
            "title": "Nishchinto Package",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/generic-5.jpg",
            "subtitle": "It Offers you flat rate of 23 poisha per 10 second for 24 hours.",
            "buttons": [
                {
                    id: 81,
                    referred_by: 78,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages",
                    "title": "View Details"
                }, {
                    id: 82,
                    referred_by: 78,
                    referred_to: { goto: "Generics", id: 92 },
                    "type": "postback",
                    "title": "Postpaid",
                    "payload": "Generics+92"
                }, {
                    id: 83,
                    referred_by: 78,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Support Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            id: 84,
            referred_by: 78,
            "title": "Bondhu Package",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/generic-6.jpg",
            "subtitle": "It allows you to talk to your near and dear ones at the lowest rate.",
            "buttons": [
                {
                    id: 85,
                    referred_by: 78,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages",
                    "title": "View Details"
                }, {
                    id: 86,
                    referred_by: 78,
                    referred_to: { goto: "Generics", id: 92 },
                    "type": "postback",
                    "title": "Postpaid",
                    "payload": "Generics+92"
                }, {
                    id: 87,
                    referred_by: 78,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Support Agent",
                    "payload": "Texts+36"
                }
            ]
        }, {
            id: 88,
            referred_by: 78,
            "title": "New djuice price plan from Grameenphone Ltd. is designed with the Youth in mind!",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/generic-4.jpg",
            "subtitle": "You can talk to any local operator number at only 25 poisha/ 10 second",
            "buttons": [
                {
                    id: 89,
                    referred_by: 78,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages",
                    "title": "View Details"
                }, {
                    id: 90,
                    referred_by: 78,
                    referred_to: { goto: "Generics", id: 92 },
                    "type": "postback",
                    "title": "Postpaid",
                    "payload": "Generics+92"
                }, {
                    id: 91,
                    referred_by: 78,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Support Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    }, {
        id: 92, referred_by: 79, referred_to: {}, type: "generic", elements: [{
            id: 93,
            referred_by: 79,
            "title": "Start a journey that only YOU plan.",
            "image_url": "https://www.grameenphone.com/sites/default/files/GP_Contact_us_tile.jpg",
            "subtitle": "Plan: 150Tk, 160Tk, 250Tk, 450Tk, 650Tk and 1000Tk.",
            "buttons": [
                {
                    id: 94,
                    referred_by: 79,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages#Postpaid",
                    "title": "View Details"
                }, {
                    id: 95,
                    referred_by: 79,
                    referred_to: { goto: "Generics", id: 80 },
                    "type": "postback",
                    "title": "Prepaid",
                    "payload": "Generics+80"
                }, {
                    id: 96,
                    referred_by: 79,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Support Agent",
                    "payload": "Texts+36"
                }
            ]
        }]
    }, {
        id: 97, referred_by: 75, referred_to: { goto: "Forwardings", id: 100 }, type: "generic", elements: [{
            id: 98,
            referred_by: 75,
            "title": "It offers you at your door-step telco service",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/GPS-WS5-Acc-01_InnerPageBanner-L-1920X464.jpg",
            "buttons": [
                {
                    id: 99,
                    referred_by: 75,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages#Postpaid",
                    "title": "View Details"
                }
            ]
        }]
    }, {
        id: 128, referred_by: 112, referred_to: {}, type: "generic", elements: [{
            id: 129,
            referred_by: 112,
            "title": "Nokia 6",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/Grameenphone_Online_Shop_Nokia_6_Black_Featured_Front_2.png",
            "subtitle": "TK. 22,500 . Avail attractive EMI",
            "buttons": [
                {
                    id: 130,
                    referred_by: 112,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/phones/product/nokia-6",
                    "title": "View Details"
                },
                {
                    id: 131,
                    referred_by: 112,
                    referred_to: { goto: "Buttons", id: 111 },
                    "type": "postback",
                    "title": "Handsets",
                    "payload": "Buttons+111"
                },
                {
                    id: 132,
                    referred_by: 112,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        },
        {
            id: 133,
            referred_by: 112,
            "title": "Nokia 6.1",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/Nokia-6_Device_front_500x500.png",
            "subtitle": "TK. TK.29,100 . Avail attractive EMI",
            "buttons": [
                {
                    id: 134,
                    referred_by: 112,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/phones/product/nokia-61",
                    "title": "View Details"
                },
                {
                    id: 135,
                    referred_by: 112,
                    referred_to: { goto: "Buttons", id: 111 },
                    "type": "postback",
                    "title": "Handsets",
                    "payload": "Buttons+111"
                },
                {
                    id: 136,
                    referred_by: 112,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        }]
    },
    {
        id: 137, referred_by: 112, referred_to: {}, type: "generic", elements: [{
            id: 138,
            referred_by: 112,
            "title": "GP 3G WiFi Carfi Router",
            "image_url": "https://cdn01.grameenphone.com/shop/sites/default/files/Modem_PNG_2.png",
            "subtitle": "Taka 2499.",
            "buttons": [
                {
                    id: 139,
                    referred_by: 112,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/routers/product/gp-3g-wifi-carfi-router?utm_source=Digital%20Care",
                    "title": "View Details"
                },
                {
                    id: 140,
                    referred_by: 112,
                    referred_to: { goto: "Buttons", id: 104 },
                    "type": "postback",
                    "title": "Current Offers",
                    "payload": "Buttons+104"
                },
                {
                    id: 141,
                    referred_by: 112,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        },
        {
            id: 142,
            referred_by: 112,
            "title": "GP 3G Pocket Router",
            "image_url": "https://ryanscomputers.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/r/grameen-phone-edge.jpg",
            "subtitle": "Taka 3945.",
            "buttons": [
                {
                    id: 142,
                    referred_by: 112,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/routers/product/gp-3g-pocket-router?utm_source=Digital%20Care",
                    "title": "View Details"
                },
                {
                    id: 143,
                    referred_by: 112,
                    referred_to: { goto: "Buttons", id: 104 },
                    "type": "postback",
                    "title": "Current Offers",
                    "payload": "Buttons+104"
                },
                {
                    id: 144,
                    referred_by: 112,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        }]
    },
    {
        id: 145, referred_by: 108, referred_to: {}, type: "generic", elements: [{
            id: 146,
            referred_by: 112,
            "title": "Day Day Band",
            "image_url": "https://sc01.alicdn.com/kf/HTB1sITIPVXXXXcKXXXXq6xXFXXXD/Shenzhen-New-heartrate-Smart-Bracelet-C6-Smart.jpg_350x350.jpg",
            "subtitle": "Your Fitness Partner TK. 1599. Extra belt free.",
            "buttons": [
                {
                    id: 147,
                    referred_by: 112,
                    referred_to: {},
                    "type": "web_url",
                    "url": "https://www.grameenphone.com/shop/wearables/product/day-day-band?utm_source=Digital%20care",
                    "title": "View Details"
                },
                {
                    id: 148,
                    referred_by: 112,
                    referred_to: { goto: "Buttons", id: 104 },
                    "type": "postback",
                    "title": "Current Offers",
                    "payload": "Buttons+104"
                },
                {
                    id: 149,
                    referred_by: 112,
                    referred_to: { goto: "Texts", id: 36 },
                    "type": "postback",
                    "title": "Service Representative",
                    "payload": "Texts+36"
                }
            ]
        }]
    }],
    // "QuickReplies": [{
    //     id: 18, referred_by: 16, referred_to: 22, type: "quick reply", text: "Which color do you like ?",
    //     quick_replies: [
    //         {
    //             id: 19,
    //             referred_by: 16,
    //             referred_to: 22,
    //             "content_type": "text",
    //             "title": "Red ",
    //             "payload": "QuickReplies+22",
    //             "image_url": "https://usercontent2.hubstatic.com/7197541_f1024.jpg"
    //         },
    //         {
    //             id: 20,
    //             referred_by: 16,
    //             referred_to: 22,
    //             "content_type": "text",
    //             "title": "Green",
    //             "payload": "Green",
    //             "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Color-Green.JPG"
    //         },
    //         {
    //             id: 21,
    //             referred_by: 16,
    //             referred_to: 22,
    //             "content_type": "text",
    //             "title": "Blue",
    //             "payload": "Blue",
    //             "image_url": "https://miro.medium.com/max/512/1*7uObADW_J1O5UMyyoVwLTg.png"
    //         }
    //     ]
    // }, {
    //     id: 22, referred_by: 18, type: "quick reply", referred_to: 999, text: "Which size do you prefer ?",
    //     quick_replies: [
    //         {
    //             id: 23,
    //             referred_by: 18,
    //             referred_to: 999,
    //             "content_type": "text",
    //             "title": "S ",
    //             "payload": "S",
    //             "image_url": "https://usercontent2.hubstatic.com/7197541_f1024.jpg"
    //         },
    //         {
    //             id: 24,
    //             referred_by: 18,
    //             referred_to: 999,
    //             "content_type": "text",
    //             "title": "S",
    //             "payload": "S",
    //             "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Color-Green.JPG"
    //         },
    //         {
    //             id: 25,
    //             referred_by: 18,
    //             referred_to: 999,
    //             "content_type": "text",
    //             "title": "M",
    //             "payload": "M",
    //             "image_url": "https://miro.medium.com/max/512/1*7uObADW_J1O5UMyyoVwLTg.png"
    //         }
    //     ]
    // }],
    // "Images": [{
    //     id: 26,
    //     referred_by: 19,
    //     referred_to: { goto: "Forwardings", id: 27 },
    //     type: "image",
    //     "image_url": "Red color er jeans er image url"
    // }],
    "KeyValue": [
        { key: "Hello", value: { goto: "Get Started", id: 0 } },
        { key: "Hi", value: { goto: "Get Started", id: 0 } },
        { key: "Assalamualikum", value: { goto: "Get Started", id: 0 } },
        { key: "Yo", value: { goto: "Get Started", id: 0 } },
        { key: "Get Started", value: { goto: "Get Started", id: 0 } },
        { key: "get started", value: { goto: "Get Started", id: 0 } },
        { key: "start", value: { goto: "Get Started", id: 0 } }
    ],
    "Texts": [
        { id: 11, referred_to: { goto: "Texts", id: 12, input: true, errorGoto: "Texts", errorId: 17 }, type: "text", text: "Please enter any GP number" },
        { id: 12, referred_to: { goto: "Buttons", id: 13, input: true, errorGoto: "Texts", errorId: 18 }, type: "text", text: "Please enter an amount" },
        { id: 16, referred_to: {}, type: "text", text: "Thank you for staying with Grameenphone" },
        { id: 17, referred_to: { goto: "Texts", id: 12, input: true, errorGoto: "Texts", errorId: 17 }, type: "text", text: "Please enter a 11 digit valid GP number" },
        { id: 18, referred_to: { goto: "Buttons", id: 13, input: true, errorGoto: "Texts", errorId: 18 }, type: "text", text: "Please enter a valid amount" },
        { id: 36, referred_to: {}, type: "text", text: "Our representatives are always there for you. What is your query ? " },
        { id: 37, referred_to: { goto: "Forwardings", id: 19 }, type: "text", text: "Let me present some very popular voice packs. Please swipe right to explore and select the best one 🙂 " },
        { id: 38, referred_to: { goto: "Forwardings", id: 39 }, type: "text", text: "Let me present some very popular data packs. Please swipe right to explore and select the best one 🙂 " },
        { id: 69, referred_to: { goto: "Forwardings", id: 70 }, type: "text", text: "Replace your old SIM with a new 4G SIM by visiting any of our Service Centers. Residents of Dhaka, Chattogram & Sylhet city can order online & receive free delivery.  Replacement charge is 200 Tk only & it’s free for the GP Stars. Enjoy high speed internet & much more with new GP 4G SIM card." }
    ],
    "Default": [
        { goto: "Buttons", id: 4 }
    ],
    "Inputs": [
        { id: 150, type: "number", conditions: ["Positive", "Exact+11", "StartsWith+017", "StartsWith+013"], referred_by: { goto: "Texts", id: 11 }, referred_to: { goto: "Texts", id: 12, errorGoto: "Texts", errorId: 17 } },
        { id: 151, type: "number", conditions: ["Positive"], referred_by: { goto: "Texts", id: 12 }, referred_to: { goto: "Buttons", id: 13, errorGoto: "Texts", errorId: 18 } }
    ]
}

module.exports = {
    getFlow: responses
}