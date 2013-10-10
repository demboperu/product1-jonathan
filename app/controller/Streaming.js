/*
 * File: app/controller/Streaming.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Streaming', {
    extend: 'Ext.app.Controller',

    models: [
        'chat'
    ],
    stores: [
        'chatHistory'
    ],

    refs: [
        {
            ref: 'txtChat',
            selector: '#chatBox'
        },
        {
            ref: 'txtChatHistory',
            selector: '#chatBoxHistory'
        },
        {
            ref: 'userName',
            selector: '#userName'
        },
        {
            ref: 'userPass',
            selector: '#userName'
        },
        {
            ref: 'loginView',
            selector: '#loginView'
        },
        {
            ref: 'twitchView',
            selector: '#twitchView'
        }
    ],

    init: function(application) {

        this.control({
            "#btnSendChat" : {
                click : this.onSendChatClick
            },
            "#btnLogin" : {
                click : this.onLoginClick
            }
        });

        console.log("asd");
    },

    onSendChatClick: function(element, event, opt) {
        var newChat = this.getTxtChat().getValue();
        var historyChat = this.getTxtChatHistory().getValue();
        this.getTxtChatHistory().setValue("» jOnAThaN:" + newChat + "\n\n" +historyChat);
        this.getTxtChat().setValue("");

    },

    getChatHistory: function() {
        var historyText = "";
        for (key in chatHistory.data.items) {
            historyText += chatHistory.data.items[key].message;
        }
        return historyText;
    },

    onLoginClick: function(button) {
        console.log("user: " +this.getUserName().getValue());
        console.log("pass: " +this.getUserPass().getValue());
        console.log(this.getLoginView());
        /*var lay = this.getTwitchView().getLayout();
        lay.setActiveItem(1);*/
        this.getLoginView().hide();
        this.getTwitchView().show();
    }

});
