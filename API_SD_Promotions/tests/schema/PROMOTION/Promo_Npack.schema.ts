export const addNpackList : any = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
        "promotionNumber",
        "promotionName",
        "promoEnabled",
        "promoCommit",
        "promoActive",
        "promoDelete",
        "promoType",
        "prizeType",
        "startDate",
        "endDate",
        "promoHours",
        "selectedGroups",
        "selectedProducts",
        "tuneNumber"
    ],
    "properties": {
        "promotionNumber": {
            "$id": "#/properties/promotionNumber",
            "type": "string",
            "title": "The Promotionnumber Schema",
            "default": "",
            "examples": [
                "543"
            ],
            "pattern": "^(.*)$"
        },
        "promotionName": {
            "$id": "#/properties/promotionName",
            "type": "string",
            "title": "The Promotionname Schema",
            "default": "",
            "examples": [
                "Testing"
            ],
            "pattern": "^(.*)$"
        },
        "promoEnabled": {
            "$id": "#/properties/promoEnabled",
            "type": "boolean",
            "title": "The Promoenabled Schema",
            "default": false,
            "examples": [
                true
            ]
        },
        "promoCommit": {
            "$id": "#/properties/promoCommit",
            "type": "string",
            "title": "The Promocommit Schema",
            "default": "",
            "examples": [
                "NOT_COMMITTED"
            ],
            "pattern": "^(.*)$"
        },
        "promoActive": {
            "$id": "#/properties/promoActive",
            "type": "boolean",
            "title": "The Promoactive Schema",
            "default": false,
            "examples": [
                false
            ]
        },
        "promoDelete": {
            "$id": "#/properties/promoDelete",
            "type": "boolean",
            "title": "The Promodelete Schema",
            "default": false,
            "examples": [
                false
            ]
        },
        "promoType": {
            "$id": "#/properties/promoType",
            "type": "integer",
            "title": "The Promotype Schema",
            "default": 0,
            "examples": [
                5
            ]
        },
        "prizeType": {
            "$id": "#/properties/prizeType",
            "type": "integer",
            "title": "The Prizetype Schema",
            "default": 0,
            "examples": [
                1
            ]
        },
        "startDate": {
            "$id": "#/properties/startDate",
            "type": "string",
            "title": "The Startdate Schema",
            "default": "",
            "examples": [
                "2019-06-03T00:00:00.000"
            ],
            "pattern": "^(.*)$"
        },
        "endDate": {
            "$id": "#/properties/endDate",
            "type": "string",
            "title": "The Enddate Schema",
            "default": "",
            "examples": [
                "2019-06-03T00:00:00.000"
            ],
            "pattern": "^(.*)$"
        },
        "promoHours": {
            "$id": "#/properties/promoHours",
            "type": "array",
            "title": "The Promohours Schema",
            "items": {
                "$id": "#/properties/promoHours/items",
                "type": "object",
                "title": "The Items Schema",
                "required": [
                    "dayOfWeek",
                    "openTime",
                    "closeTime",
                    "isOpen"
                ],
                "properties": {
                    "dayOfWeek": {
                        "$id": "#/properties/promoHours/items/properties/dayOfWeek",
                        "type": "integer",
                        "title": "The Dayofweek Schema",
                        "default": 0,
                        "examples": [
                            0
                        ]
                    },
                    "openTime": {
                        "$id": "#/properties/promoHours/items/properties/openTime",
                        "type": "string",
                        "title": "The Opentime Schema",
                        "default": "",
                        "examples": [
                            "00:00:00"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "closeTime": {
                        "$id": "#/properties/promoHours/items/properties/closeTime",
                        "type": "string",
                        "title": "The Closetime Schema",
                        "default": "",
                        "examples": [
                            "00:00:00"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "isOpen": {
                        "$id": "#/properties/promoHours/items/properties/isOpen",
                        "type": "boolean",
                        "title": "The Isopen Schema",
                        "default": false,
                        "examples": [
                            true
                        ]
                    }
                }
            }
        },
        "selectedGroups": {
            "$id": "#/properties/selectedGroups",
            "type": "array",
            "title": "The Selectedgroups Schema",
            "items": {
                "$id": "#/properties/selectedGroups/items",
                "type": "integer",
                "title": "The Items Schema",
                "default": 0,
                "examples": [
                    0
                ]
            }
        },
        "selectedProducts": {
            "$id": "#/properties/selectedProducts",
            "type": "array",
            "title": "The Selectedproducts Schema"
        },
        "tuneNumber": {
            "$id": "#/properties/tuneNumber",
            "type": "integer",
            "title": "The Tunenumber Schema",
            "default": 0,
            "examples": [
                0
            ]
        }
    }
}
export const saveTicketData : any ={
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
        "promotionNumber",
        "promotionName",
        "promoEnabled",
        "promoCommit",
        "promoActive",
        "promoDelete",
        "promoType",
        "prizeType",
        "startDate",
        "endDate",
        "promoHours",
        "selectedGroups",
        "selectedProducts"
       
        
    ],
    "properties": {
        "promotionNumber": {
            "$id": "#/properties/promotionNumber",
            "type": "string",
            "title": "The Promotionnumber Schema",
            "default": "",
            "examples": [
                "543"
            ],
            "pattern": "^(.*)$"
        },
        "promotionName": {
            "$id": "#/properties/promotionName",
            "type": "string",
            "title": "The Promotionname Schema",
            "default": "",
            "examples": [
                "Testing"
            ],
            "pattern": "^(.*)$"
        },
        "promoEnabled": {
            "$id": "#/properties/promoEnabled",
            "type": "boolean",
            "title": "The Promoenabled Schema",
            "default": false,
            "examples": [
                true
            ]
        },
        "promoCommit": {
            "$id": "#/properties/promoCommit",
            "type": "string",
            "title": "The Promocommit Schema",
            "default": "",
            "examples": [
                "NOT_COMMITTED"
            ],
            "pattern": "^(.*)$"
        },
        "promoActive": {
            "$id": "#/properties/promoActive",
            "type": "boolean",
            "title": "The Promoactive Schema",
            "default": false,
            "examples": [
                false
            ]
        },
        "promoDelete": {
            "$id": "#/properties/promoDelete",
            "type": "boolean",
            "title": "The Promodelete Schema",
            "default": false,
            "examples": [
                false
            ]
        },
        "promoType": {
            "$id": "#/properties/promoType",
            "type": "integer",
            "title": "The Promotype Schema",
            "default": 0,
            "examples": [
                5
            ]
        },
        "prizeType": {
            "$id": "#/properties/prizeType",
            "type": "integer",
            "title": "The Prizetype Schema",
            "default": 0,
            "examples": [
                1
            ]
        },
        "startDate": {
            "$id": "#/properties/startDate",
            "type": "string",
            "title": "The Startdate Schema",
            "default": "",
            "examples": [
                "2019-06-03T00:00:00.000"
            ],
            "pattern": "^(.*)$"
        },
        "endDate": {
            "$id": "#/properties/endDate",
            "type": "string",
            "title": "The Enddate Schema",
            "default": "",
            "examples": [
                "2019-06-03T00:00:00.000"
            ],
            "pattern": "^(.*)$"
        },
        "promoHours": {
            "$id": "#/properties/promoHours",
            "type": "array",
            "title": "The Promohours Schema",
            "items": {
                "$id": "#/properties/promoHours/items",
                "type": "object",
                "title": "The Items Schema",
                "required": [
                    "dayOfWeek",
                    "openTime",
                    "closeTime",
                    "isOpen"
                ],
                "properties": {
                    "dayOfWeek": {
                        "$id": "#/properties/promoHours/items/properties/dayOfWeek",
                        "type": "integer",
                        "title": "The Dayofweek Schema",
                        "default": 0,
                        "examples": [
                            0
                        ]
                    },
                    "openTime": {
                        "$id": "#/properties/promoHours/items/properties/openTime",
                        "type": "string",
                        "title": "The Opentime Schema",
                        "default": "",
                        "examples": [
                            "00:00:00"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "closeTime": {
                        "$id": "#/properties/promoHours/items/properties/closeTime",
                        "type": "string",
                        "title": "The Closetime Schema",
                        "default": "",
                        "examples": [
                            "00:00:00"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "isOpen": {
                        "$id": "#/properties/promoHours/items/properties/isOpen",
                        "type": "boolean",
                        "title": "The Isopen Schema",
                        "default": false,
                        "examples": [
                            true
                        ]
                    }
                }
            }
        },
        "selectedGroups": {
            "$id": "#/properties/selectedGroups",
            "type": "array",
            "title": "The Selectedgroups Schema",
            "items": {
                "$id": "#/properties/selectedGroups/items",
                "type": "integer",
                "title": "The Items Schema",
                "default": 0,
                "examples": [
                    0
                ]
            }
        },
        "selectedProducts": {
            "$id": "#/properties/selectedProducts",
            "type": "array",
            "title": "The Selectedproducts Schema"
        },
        "tuneNumber": {
            "$id": "#/properties/tuneNumber",
            "type": "integer",
            "title": "The Tunenumber Schema",
            "default": 0,
            "examples": [
                0
            ]
        }
    }
}

export const prizeInfoData : any ={
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
        "promotionNumber",
        "promotionName",
        "promoEnabled",
        "currentFuture",
        "promoCommit",
        "promoActive",
        "promoDelete",
        "promoType",
        "prizeType",
        "startDate",
        "endDate",
        "promoHours",
        "selectedGroups",
        "selectedProducts",
        "promoTypeInfo",
        "prizeTypeInfo",
        "promoCriteriaInfo",
        "promoTextInfo",
        "promoStatusInfo"
    ],
    "properties": {
        "promotionNumber": {
            "$id": "#/properties/promotionNumber",
            "type": "string",
            "title": "The Promotionnumber Schema",
            "default": "",
            "examples": [
                "543"
            ],
            "pattern": "^(.*)$"
        },
        "promotionName": {
            "$id": "#/properties/promotionName",
            "type": "string",
            "title": "The Promotionname Schema",
            "default": "",
            "examples": [
                "Testing"
            ],
            "pattern": "^(.*)$"
        },
        "promoEnabled": {
            "$id": "#/properties/promoEnabled",
            "type": "boolean",
            "title": "The Promoenabled Schema",
            "default": false,
            "examples": [
                true
            ]
        },
        "currentFuture": {
            "$id": "#/properties/currentFuture",
            "type": "integer",
            "title": "The Currentfuture Schema",
            "default": 0,
            "examples": [
                1
            ]
        },
        "promoCommit": {
            "$id": "#/properties/promoCommit",
            "type": "string",
            "title": "The Promocommit Schema",
            "default": "",
            "examples": [
                "NOT_COMMITTED"
            ],
            "pattern": "^(.*)$"
        },
        "promoActive": {
            "$id": "#/properties/promoActive",
            "type": "boolean",
            "title": "The Promoactive Schema",
            "default": false,
            "examples": [
                false
            ]
        },
        "promoDelete": {
            "$id": "#/properties/promoDelete",
            "type": "boolean",
            "title": "The Promodelete Schema",
            "default": false,
            "examples": [
                false
            ]
        },
        "promoType": {
            "$id": "#/properties/promoType",
            "type": "integer",
            "title": "The Promotype Schema",
            "default": 0,
            "examples": [
                5
            ]
        },
        "prizeType": {
            "$id": "#/properties/prizeType",
            "type": "integer",
            "title": "The Prizetype Schema",
            "default": 0,
            "examples": [
                1
            ]
        },
        "startDate": {
            "$id": "#/properties/startDate",
            "type": "string",
            "title": "The Startdate Schema",
            "default": "",
            "examples": [
                "2019-06-03T00:00:00.000"
            ],
            "pattern": "^(.*)$"
        },
        "endDate": {
            "$id": "#/properties/endDate",
            "type": "string",
            "title": "The Enddate Schema",
            "default": "",
            "examples": [
                "2019-06-03T00:00:00.000"
            ],
            "pattern": "^(.*)$"
        },
        "promoHours": {
            "$id": "#/properties/promoHours",
            "type": "array",
            "title": "The Promohours Schema",
            "items": {
                "$id": "#/properties/promoHours/items",
                "type": "object",
                "title": "The Items Schema",
                "required": [
                    "dayOfWeek",
                    "openTime",
                    "closeTime",
                    "isOpen"
                ],
                "properties": {
                    "dayOfWeek": {
                        "$id": "#/properties/promoHours/items/properties/dayOfWeek",
                        "type": "integer",
                        "title": "The Dayofweek Schema",
                        "default": 0,
                        "examples": [
                            5
                        ]
                    },
                    "openTime": {
                        "$id": "#/properties/promoHours/items/properties/openTime",
                        "type": "string",
                        "title": "The Opentime Schema",
                        "default": "",
                        "examples": [
                            "00:00"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "closeTime": {
                        "$id": "#/properties/promoHours/items/properties/closeTime",
                        "type": "string",
                        "title": "The Closetime Schema",
                        "default": "",
                        "examples": [
                            "00:00"
                        ],
                        "pattern": "^(.*)$"
                    },
                    "isOpen": {
                        "$id": "#/properties/promoHours/items/properties/isOpen",
                        "type": "boolean",
                        "title": "The Isopen Schema",
                        "default": false,
                        "examples": [
                            false
                        ]
                    }
                }
            }
        },
        "selectedGroups": {
            "$id": "#/properties/selectedGroups",
            "type": "array",
            "title": "The Selectedgroups Schema",
            "items": {
                "$id": "#/properties/selectedGroups/items",
                "type": "integer",
                "title": "The Items Schema",
                "default": 0,
                "examples": [
                    0
                ]
            }
        },
        "selectedProducts": {
            "$id": "#/properties/selectedProducts",
            "type": "array",
            "title": "The Selectedproducts Schema"
        },
        "promoTypeInfo": {
            "$id": "#/properties/promoTypeInfo",
            "type": "object",
            "title": "The Promotypeinfo Schema",
            "required": [
                "promoType"
            ],
            "properties": {
                "promoType": {
                    "$id": "#/properties/promoTypeInfo/properties/promoType",
                    "type": "object",
                    "title": "The Promotype Schema",
                    "required": [
                        "type",
                        "npackTickets"
                    ],
                    "properties": {
                        "type": {
                            "$id": "#/properties/promoTypeInfo/properties/promoType/properties/type",
                            "type": "string",
                            "title": "The Type Schema",
                            "default": "",
                            "examples": [
                                "promo.type.npack"
                            ],
                            "pattern": "^(.*)$"
                        },
                        "npackTickets": {
                            "$id": "#/properties/promoTypeInfo/properties/promoType/properties/npackTickets",
                            "type": "array",
                            "title": "The Npacktickets Schema"
                        }
                    }
                }
            }
        },
        "prizeTypeInfo": {
            "$id": "#/properties/prizeTypeInfo",
            "type": "object",
            "title": "The Prizetypeinfo Schema",
            "required": [
                "prizeType"
            ],
            "properties": {
                "prizeType": {
                    "$id": "#/properties/prizeTypeInfo/properties/prizeType",
                    "type": "object",
                    "title": "The Prizetype Schema",
                    "required": [
                        "type",
                        "maxPrizeCount",
                        "maxPrizeAmount",
                        "discountType",
                        "discountAmount",
                        "discountPercentage",
                        "commission"
                    ],
                    "properties": {
                        "type": {
                            "$id": "#/properties/prizeTypeInfo/properties/prizeType/properties/type",
                            "type": "string",
                            "title": "The Type Schema",
                            "default": "",
                            "examples": [
                                "promo.prize.type.discount"
                            ],
                            "pattern": "^(.*)$"
                        },
                        "maxPrizeCount": {
                            "$id": "#/properties/prizeTypeInfo/properties/prizeType/properties/maxPrizeCount",
                            "type": "integer",
                            "title": "The Maxprizecount Schema",
                            "default": 0,
                            "examples": [
                                1
                            ]
                        },
                        "maxPrizeAmount": {
                            "$id": "#/properties/prizeTypeInfo/properties/prizeType/properties/maxPrizeAmount",
                            "type": "integer",
                            "title": "The Maxprizeamount Schema",
                            "default": 0,
                            "examples": [
                                100
                            ]
                        },
                        "discountType": {
                            "$id": "#/properties/prizeTypeInfo/properties/prizeType/properties/discountType",
                            "type": "integer",
                            "title": "The Discounttype Schema",
                            "default": 0,
                            "examples": [
                                3
                            ]
                        },
                        "discountAmount": {
                            "$id": "#/properties/prizeTypeInfo/properties/prizeType/properties/discountAmount",
                            "type": "integer",
                            "title": "The Discountamount Schema",
                            "default": 0,
                            "examples": [
                                0
                            ]
                        },
                        "discountPercentage": {
                            "$id": "#/properties/prizeTypeInfo/properties/prizeType/properties/discountPercentage",
                            "type": "integer",
                            "title": "The Discountpercentage Schema",
                            "default": 0,
                            "examples": [
                                1
                            ]
                        },
                        "commission": {
                            "$id": "#/properties/prizeTypeInfo/properties/prizeType/properties/commission",
                            "type": "boolean",
                            "title": "The Commission Schema",
                            "default": false,
                            "examples": [
                                true
                            ]
                        }
                    }
                }
            }
        },
        "promoCriteriaInfo": {
            "$id": "#/properties/promoCriteriaInfo",
            "type": "object",
            "title": "The Promocriteriainfo Schema",
            "required": [
                "minPrice",
                "maxPrice",
                "minBoards",
                "maxBoards",
                "minDuration",
                "maxDuration",
                "betId",
                "selectedPlayTypes",
                "extraPlay",
                "priority",
                "gameFeature"
            ],
            "properties": {
                "minPrice": {
                    "$id": "#/properties/promoCriteriaInfo/properties/minPrice",
                    "type": "integer",
                    "title": "The Minprice Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "maxPrice": {
                    "$id": "#/properties/promoCriteriaInfo/properties/maxPrice",
                    "type": "integer",
                    "title": "The Maxprice Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "minBoards": {
                    "$id": "#/properties/promoCriteriaInfo/properties/minBoards",
                    "type": "integer",
                    "title": "The Minboards Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "maxBoards": {
                    "$id": "#/properties/promoCriteriaInfo/properties/maxBoards",
                    "type": "integer",
                    "title": "The Maxboards Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "minDuration": {
                    "$id": "#/properties/promoCriteriaInfo/properties/minDuration",
                    "type": "integer",
                    "title": "The Minduration Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "maxDuration": {
                    "$id": "#/properties/promoCriteriaInfo/properties/maxDuration",
                    "type": "integer",
                    "title": "The Maxduration Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "betId": {
                    "$id": "#/properties/promoCriteriaInfo/properties/betId",
                    "type": "integer",
                    "title": "The Betid Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "selectedPlayTypes": {
                    "$id": "#/properties/promoCriteriaInfo/properties/selectedPlayTypes",
                    "type": "array",
                    "title": "The Selectedplaytypes Schema"
                },
                "extraPlay": {
                    "$id": "#/properties/promoCriteriaInfo/properties/extraPlay",
                    "type": "integer",
                    "title": "The Extraplay Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                },
                "priority": {
                    "$id": "#/properties/promoCriteriaInfo/properties/priority",
                    "type": "integer",
                    "title": "The Priority Schema",
                    "default": 0,
                    "examples": [
                        50
                    ]
                },
                "gameFeature": {
                    "$id": "#/properties/promoCriteriaInfo/properties/gameFeature",
                    "type": "integer",
                    "title": "The Gamefeature Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                }
            }
        },
        "promoTextInfo": {
            "$id": "#/properties/promoTextInfo",
            "type": "object",
            "title": "The Promotextinfo Schema",
            "required": [
                "wagerText",
                "promoText"
            ],
            "properties": {
                "wagerText": {
                    "$id": "#/properties/promoTextInfo/properties/wagerText",
                    "type": "object",
                    "title": "The Wagertext Schema"
                },
                "promoText": {
                    "$id": "#/properties/promoTextInfo/properties/promoText",
                    "type": "object",
                    "title": "The Promotext Schema"
                }
            }
        },
        "promoStatusInfo": {
            "$id": "#/properties/promoStatusInfo",
            "type": "object",
            "title": "The Promostatusinfo Schema",
            "required": [
                "promoStatus",
                "prizeStatus",
                "criteriaStatus",
                "textStatus"
            ],
            "properties": {
                "promoStatus": {
                    "$id": "#/properties/promoStatusInfo/properties/promoStatus",
                    "type": "integer",
                    "title": "The Promostatus Schema",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "prizeStatus": {
                    "$id": "#/properties/promoStatusInfo/properties/prizeStatus",
                    "type": "integer",
                    "title": "The Prizestatus Schema",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "criteriaStatus": {
                    "$id": "#/properties/promoStatusInfo/properties/criteriaStatus",
                    "type": "integer",
                    "title": "The Criteriastatus Schema",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "textStatus": {
                    "$id": "#/properties/promoStatusInfo/properties/textStatus",
                    "type": "integer",
                    "title": "The Textstatus Schema",
                    "default": 0,
                    "examples": [
                        0
                    ]
                }
            }
        }
    }
}
export const TextDetailsData : any ={
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
        "tuneNumber",
        "wagerText"

    ],
    "properties": {
        "tuneNumber": {
            "$id": "#/properties/tuneNumber",
            "type": "integer",
            "title": "The Tunenumber Schema",
            "default": 0,
            "examples": [
                1
            ]
        },
        "wagerText": {
            "$id": "#/properties/wagerText",
            "type": "object",
            "title": "The Wagertext Schema",
            "required": [
                "textNumber",
                "textLocation",
                "promoTextMessageLines"
            ],
            "properties": {
                "textNumber": {
                    "$id": "#/properties/wagerText/properties/textNumber",
                    "type": "integer",
                    "title": "The Textnumber Schema",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "textLocation": {
                    "$id": "#/properties/wagerText/properties/textLocation",
                    "type": "integer",
                    "title": "The Textlocation Schema",
                    "default": 0,
                    "examples": [
                        1
                    ]
                },
                "promoTextMessageLines": {
                    "$id": "#/properties/wagerText/properties/promoTextMessageLines",
                    "type": "array",
                    "title": "The Promotextmessagelines Schema",
                    "items": {
                        "$id": "#/properties/wagerText/properties/promoTextMessageLines/items",
                        "type": "string",
                        "title": "The Items Schema",
                        "default": "",
                        "examples": [
                            "Test",
                            " ",
                            " ",
                            " "
                        ],
                        "pattern": "^(.*)$"
                    }
                }
            }
        },
        "promoText": {
            "$id": "#/properties/promoText",
            "type": "object",
            "title": "The Promotext Schema",
            "required": [
                "textNumber",
                "textLocation",
                "promoTextMessageLines"
            ],
            "properties": {
                "textNumber": {
                    "$id": "#/properties/promoText/properties/textNumber",
                    "type": "integer",
                    "title": "The Textnumber Schema",
                    "default": 0,
                    "examples": [
                        2
                    ]
                },
                "textLocation": {
                    "$id": "#/properties/promoText/properties/textLocation",
                    "type": "integer",
                    "title": "The Textlocation Schema",
                    "default": 0,
                    "examples": [
                        5
                    ]
                },
                "promoTextMessageLines": {
                    "$id": "#/properties/promoText/properties/promoTextMessageLines",
                    "type": "array",
                    "title": "The Promotextmessagelines Schema",
                    "items": {
                        "$id": "#/properties/promoText/properties/promoTextMessageLines/items",
                        "type": "string",
                        "title": "The Items Schema",
                        "default": "",
                        "examples": [
                            "Test",
                            " ",
                            " ",
                            " "
                        ],
                        "pattern": "^(.*)$"
                    }
                }
            }
        }
    }
}