/**
Mixin to serialize ember object to json.
Is mostly used in combination with ember-data models.
Works by filtering out all the functions, prototype methods and all
attributes that does not include an toString method.

@class serializable 
@namespace Ember
@module App
@extends Ember.Mixin
*/
Ember.serializable = Ember.Mixin.create({

    serialize: function (options) {
        var v, ret = [], r = [];

        //return this.toDataHelper(this, options);

        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                v = this[key];
                if (v === 'toString') {
                    continue;
                } // ignore useless items
                if (Ember.typeOf(v) === 'function') {
                    continue;
                }
                /*if (typeof(options) !== "undefined" && typeof (options.lowercase !== "undefined") && options.lowercase)
                    ret.push(key.toLowerCase());
                else if (typeof(options) !== "undefined" && typeof options.uppercase !== "undefined" && options.uppercase)
                    ret.push(key.toUpperCase());
                else*/
                ret.push(key);
            }
        }

        r = this.getProperties(ret);

        if (Ember.isNone(options))
            return r;

        _.each(r, function (property, key) {
            if (Ember.typeOf(r[key]) == 'string') {
                if (!Ember.isNone(options.lowercase))
                    r[key] = property.toLowerCase();
                else if (!Ember.isNone(options.uppercase))
                    r[key] = property.toUpperCase();
                return;
            }
            else
                r[key] = property;
        });
        return r;
    }
});
//This adds the serialize to all ember objects.
Ember.Object.reopen({
    serialize: function (options) {
        var v, ret = [], r = [];

        //return this.toDataHelper(this, options);

        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                v = this[key];
                if (v === 'toString') {
                    continue;
                } // ignore useless items
                if (Ember.typeOf(v) === 'function') {
                    continue;
                }
                /*if (typeof(options) !== "undefined" && typeof (options.lowercase !== "undefined") && options.lowercase)
                    ret.push(key.toLowerCase());
                else if (typeof(options) !== "undefined" && typeof options.uppercase !== "undefined" && options.uppercase)
                    ret.push(key.toUpperCase());
                else*/
                ret.push(key);
            }
        }

        r = this.getProperties(ret);

        if (Ember.isNone(options))
            return r;

        _.each(r, function (property, key) {
            if (Ember.typeOf(r[key]) == 'string') {
                if (!Ember.isNone(options.lowercase))
                    r[key] = property.toLowerCase();
                else if (!Ember.isNone(options.uppercase))
                    r[key] = property.toUpperCase();
                return;
            }
            else
                r[key] = property;
        });
        return r;
    }
});