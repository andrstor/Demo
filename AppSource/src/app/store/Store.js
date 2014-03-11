sl.require('store/transforms');
App.Model = DS.Model;
sl.require(/models\/base/);
sl.require(/models\/extensions/);

var get = Ember.get;

App.ApplicationAdapter = DS.RESTAdapter.extend({
    host: "http://localhost:59793/api/",
    antiForgeryTokenSelector: "#antiForgeryToken",
    updateRecord: function (store, type, record) {
        var data = this.superSimpleSerialier(store, type, record);
        data.id = get(record, 'id');
        return this.ajax(this.buildURL(type.typeKey, data.id), "PUT", { data: data });
    },
    createRecord: function (store, type, record) {
        var data = this.superSimpleSerialier(store, type, record);
        return this.ajax(this.buildURL(type.typeKey), "POST", { data: data });
    },
    superSimpleSerialier: function(store, type, record) {
        var data = {};
        record.eachAttribute(function (name) {
            data[name] = record.get(name);
        });
        record.eachRelationship(function (name, relationship) {
            if (relationship.kind == 'belongsTo') data[name] = record.get(name + '.id');
        }, this);
        return data;
    }
});

