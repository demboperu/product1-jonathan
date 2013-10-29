/*
 * File: app/model/streaming.js
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

Ext.define('MyApp.model.streaming', {
    extend: 'Ext.data.Model',

    fields: [
        {
            mapping: 'channel.status',
            name: 'title',
            type: 'string'
        },
        {
            mapping: 'preview.medium',
            name: 'imageUrl',
            type: 'string'
        },
        {
            mapping: 'channel.display_name',
            name: 'name',
            type: 'string'
        },
        {
            mapping: 'viewers',
            name: 'viewers',
            type: 'string'
        },
        {
            mapping: 'channel.name',
            name: 'channelName',
            type: 'string'
        }
    ],

    init: function() {
        this.getFormatterObject(this.raw);
    },

    getFormatterObject: function(obj) {
        for(var i in obj){
            if(typeof obj[i] == "string"){
                obj[i] = Ext.util.Format.htmlEncode(obj[i]);
            }
            else if(typeof obj[i] == "object"){
                this.getFormatterObject(obj[i]);
            }
        }

    }

});