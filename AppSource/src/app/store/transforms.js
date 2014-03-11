minispade.require('plugins/embermixins/serializable');
App.ArrayTransform = DS.Transform.extend({
    deserialize: function (value) {
        //_.each(value, function (item) {
        //    value[item] = typeof item === "object" ? Ember.Object.createWithMixins(Ember.serializable, item) : item;
        //});
        return value;
    },

    serialize: function (value) {
        return value;
    }
});
App.NicedateTransform = DS.Transform.extend({
    deserialize: function (i) {
        if (typeof (i) !== "undefined" && i !== null) {
            var d = App.hlp.prepareDate(i);
            return d;
        } else {
            return '';
        }
    }, 
    serialize: function (i, a, c) {
        if (typeof (i) !== "undefined" && i !== null) {
            return i.toString();
        }
        return i;
    }
});
App.ShortdateTransform = DS.Transform.extend({
    deserialize: function (i) {
        if (typeof (i) !== "undefined" && i !== null) {
            var d = App.hlp.prepareDate(i, true);
            return d;
        } else {
            return '';
        }
    },
    serialize: function (i) {
        if (typeof (i) !== "undefined" && i !== null) {
            return i.toString();
        }
        return i;
    }
});

App.ObjectTransform = DS.Transform.extend({
    deserialize: function (serialized) {
        return Em.isNone(serialized) ? {} : Ember.Object.create(Ember.serializable, serialized);
    },
    serialize: function (deserialized) {
        return Em.isNone(deserialized) ? {} : deserialized;
    }
});

