/*
 * File: app/controller/Streaming.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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
            ref: 'userName',
            selector: '#userName'
        },
        {
            ref: 'userPass',
            selector: '#userPass'
        },
        {
            ref: 'loginView',
            selector: '#loginView'
        },
        {
            ref: 'twitchView',
            selector: '#twitchViewMain'
        },
        {
            ref: 'txtChat',
            selector: '#chatBox'
        },
        {
            ref: 'txtChatHistory',
            selector: '#chatBoxHistory'
        },
        {
            ref: 'streamingView',
            selector: '#streamingView'
        }
    ],

    init: function(application) {

        this.control({
            "#sendChat" : {
                click : this.onSendChatClick
            },
            "#login" : {
                click : this.onLoginClick
            },
            "#logout" : {
                click : this.onLogoutClick
            },
            "#listView" : {
                itemdblclick : this.onStreamItemDblClick
            },
            "#home" : {
                click : this.onHomeClick
            }
        });

        //console.log("asd");
    },

    onSendChatClick: function(element, event, opt) {
        var newChat = this.getTxtChat().getValue();
        var historyChat = this.getTxtChatHistory().getValue();

        var userName = localStorage.getItem("userTwitch");

        if(userName==undefined){
            this.application.viewport.layout.setActiveItem(0);
        }else{
            this.getTxtChatHistory().setValue("» " + userName + ":" + newChat + "\n\n" +historyChat);
            this.getTxtChat().setValue("");
        }

    },

    getChatHistory: function() {
        var historyText = "";
        for (key in chatHistory.data.items) {
            historyText += chatHistory.data.items[key].message;
        }
        return historyText;
    },

    onLoginClick: function(button) {
        var userName = this.getUserName().getValue();
        var userPass = this.getUserPass().getValue();

        this.application.viewport.layout.setActiveItem(1);

        localStorage.setItem("userTwitch",userName);

        this.getUserName().setValue("");
        this.getUserPass().setValue("");
    },

    onLogoutClick: function() {
        console.log("viewport", this.application.viewport);

        //this.application.viewport.setActiveItem(1);

        this.application.viewport.layout.setActiveItem(0);
        localStorage.removeItem("userTwitch");

        //this.getLoginView().show();
        //this.getTwitchView().show();
    },

    onStreamItemDblClick: function(record, element, propertys) {
        console.log("dblClick");

        console.log(record);
        console.log(element);
        console.log(propertys);

        this.application.viewport.layout.setActiveItem(1);

        this.getStreamingView().update(element.data);
    },

    onHomeClick: function() {
        this.application.viewport.layout.setActiveItem(2);
    }

});
