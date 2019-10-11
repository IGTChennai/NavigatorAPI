"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

export const addNbuyPromo : any = {
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
                "180"
            ],
            "pattern": "^(.*)$"
        },
        "promotionName": {
            "$id": "#/properties/promotionName",
            "type": "string",
            "title": "The Promotionname Schema",
            "default": "",
            "examples": [
                "Test"
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
                1
            ]
        },
        "prizeType": {
            "$id": "#/properties/prizeType",
            "type": "integer",
            "title": "The Prizetype Schema",
            "default": 0,
            "examples": [
                2
            ]
        },
        "startDate": {
            "$id": "#/properties/startDate",
            "type": "string",
            "title": "The Startdate Schema",
            "default": "",
            "examples": [
                "2019-06-10T00:00:00.000"
            ],
            "pattern": "^(.*)$"
        },
        "endDate": {
            "$id": "#/properties/endDate",
            "type": "string",
            "title": "The Enddate Schema",
            "default": "",
            "examples": [
                "2019-06-10T00:00:00.000"
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
            "title": "The Selectedproducts Schema",
            "items": {
                "$id": "#/properties/selectedProducts/items",
                "type": "integer",
                "title": "The Items Schema",
                "default": 0,
                "examples": [
                    20
                ]
            }
        },
        "tuneNumber": {
            "$id": "#/properties/tuneNumber",
            "type": "integer",
            "title": "The Tunenumber Schema",
            "default": 0,
            "examples": [
                1
            ]
        }
    }
};

export const addCriteria: any = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
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
        "priority"
    ],
    "properties": {
        "minPrice": {
            "$id": "#/properties/minPrice",
            "type": "integer",
            "title": "The Minprice Schema",
            "default": 0,
            "examples": [
                0
            ]
        },
        "maxPrice": {
            "$id": "#/properties/maxPrice",
            "type": "integer",
            "title": "The Maxprice Schema",
            "default": 0,
            "examples": [
                0
            ]
        },
        "minBoards": {
            "$id": "#/properties/minBoards",
            "type": "integer",
            "title": "The Minboards Schema",
            "default": 0,
            "examples": [
                1
            ]
        },
        "maxBoards": {
            "$id": "#/properties/maxBoards",
            "type": "integer",
            "title": "The Maxboards Schema",
            "default": 0,
            "examples": [
                1
            ]
        },
        "minDuration": {
            "$id": "#/properties/minDuration",
            "type": "integer",
            "title": "The Minduration Schema",
            "default": 0,
            "examples": [
                0
            ]
        },
        "maxDuration": {
            "$id": "#/properties/maxDuration",
            "type": "integer",
            "title": "The Maxduration Schema",
            "default": 0,
            "examples": [
                0
            ]
        },
        "betId": {
            "$id": "#/properties/betId",
            "type": "integer",
            "title": "The Betid Schema",
            "default": 0,
            "examples": [
                0
            ]
        },
        "selectedPlayTypes": {
            "$id": "#/properties/selectedPlayTypes",
            "type": "array",
            "title": "The Selectedplaytypes Schema",
            "items": {
                "$id": "#/properties/selectedPlayTypes/items",
                "type": "integer",
                "title": "The Items Schema",
                "default": 0,
                "examples": [
                    1,
                    2
                ]
            }
        },
        "extraPlay": {
            "$id": "#/properties/extraPlay",
            "type": "integer",
            "title": "The Extraplay Schema",
            "default": 0,
            "examples": [
                2
            ]
        },
        "priority": {
            "$id": "#/properties/priority",
            "type": "integer",
            "title": "The Priority Schema",
            "default": 0,
            "examples": [
                1
            ]
        }
    }
}

export const addPrize: any = {
    "promotionNumber": "364",
    "promotionName": "testbuy",
    "promoEnabled": true,
    "currentFuture": 1,
    "promoCommit": "COMMITTED",
    "promoActive": false,
    "promoDelete": false,
    "promoType": 2,
    "prizeType": 6,
    "startDate": "2019-06-10T00:00:00.000",
    "endDate": "2019-06-10T00:00:00.000",
    "promoHours": [
        {
            "dayOfWeek": 5,
            "openTime": "00:00",
            "closeTime": "00:00",
            "isOpen": false
        },
        {
            "dayOfWeek": 6,
            "openTime": "00:00",
            "closeTime": "00:00",
            "isOpen": false
        },
        {
            "dayOfWeek": 3,
            "openTime": "00:00",
            "closeTime": "00:00",
            "isOpen": false
        },
        {
            "dayOfWeek": 4,
            "openTime": "00:00",
            "closeTime": "00:00",
            "isOpen": false
        },
        {
            "dayOfWeek": 1,
            "openTime": "00:00",
            "closeTime": "00:00",
            "isOpen": false
        },
        {
            "dayOfWeek": 2,
            "openTime": "00:00",
            "closeTime": "00:00",
            "isOpen": false
        },
        {
            "dayOfWeek": 0,
            "openTime": "00:00",
            "closeTime": "00:00",
            "isOpen": true
        }
    ],
    "selectedGroups": [
        0
    ],
    "selectedProducts": [
        8
    ],
    "prizeTypeInfo": {
        "prizeType": {
            "type": "promo.prize.type.cash",
            "maxPrizeCount": 1,
            "maxPrizeAmount": 100,
            "bonusType": 1,
            "bonusAmount": 100,
            "bonusPercentage": 0.0
        }
    },
    "promoCriteriaInfo": {
        "minPrice": 0,
        "maxPrice": 0,
        "minBoards": 1,
        "maxBoards": 1,
        "minDuration": 0,
        "maxDuration": 0,
        "betId": 0,
        "selectedPlayTypes": [
            1,
            2
        ],
        "extraPlay": 2,
        "priority": 1
    },
    "promoTextInfo": {
        "tuneNumber": 1,
        "wagerText": {
            "textNumber": 1,
            "textLocation": 1,
            "promoTextMessageLines": [
                "Test"
            ]
        },
        "promoText": {
            "textNumber": 2,
            "textLocation": 5,
            "promoTextMessageLines": [
                "Test"
            ]
        }
    },
    "promoStatusInfo": {
        "promoStatus": 1,
        "prizeStatus": 1,
        "criteriaStatus": 1,
        "textStatus": 1
    },
    "tuneNumber": 1,
    "checksum": "20298"
}

export const addText: any = {
    "tuneNumber": 1,
    "wagerText": {
        "textNumber": 1,
        "textLocation": 1,
        "promoTextMessageLines": [
            "Test",
            " ",
            " ",
            " "
        ]
    },
    "promoText": {
        "textNumber": 2,
        "textLocation": 5,
        "promoTextMessageLines": [
            "Test",
            " ",
            " ",
            " ",
            " ",
            " "
        ]
    }
}
