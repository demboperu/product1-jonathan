{
    "xdsVersion": "2.2.3",
    "frameworkVersion": "ext42",
    "internals": {
        "type": "Ext.data.Model",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "clientIdProperty": null,
            "designer|userClassName": "chat",
            "designer|userAlias": null,
            "mixins": null
        },
        "cn": [
            {
                "type": "Ext.data.Field",
                "reference": {
                    "name": "fields",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "name": "message",
                    "type": "string"
                }
            },
            {
                "type": "Ext.data.Field",
                "reference": {
                    "name": "fields",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "name": "user",
                    "type": "string"
                }
            },
            {
                "type": "processcfgfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "processChat",
                    "designer|params": [
                        "config"
                    ],
                    "implHandler": [
                        ""
                    ]
                }
            },
            {
                "type": "basicfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "setChat",
                    "designer|params": [
                        "value"
                    ],
                    "implHandler": [
                        "this.Model = value;"
                    ]
                }
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}