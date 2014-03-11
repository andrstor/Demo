Ember.Handlebars.registerBoundHelper('cut10', function (text, v) {
    text = Handlebars.Utils.escapeExpression(text);
    var result = text;
    if (text.length > 10) {
        result = text.slice(0, 10) + '...';
    }

    return new Handlebars.SafeString(result);
});

Ember.Handlebars.registerBoundHelper('cut15', function (text, v) {
    text = Handlebars.Utils.escapeExpression(text);
    var result = text;
    if (text.length > 10) {
        result = text.slice(0, 15) + '...';
    }

    return new Handlebars.SafeString(result);
});

Ember.Handlebars.registerBoundHelper('cut20', function (text, v) {
    text = Handlebars.Utils.escapeExpression(text);
    var result = text;
    if (text.length > 10) {
        result = text.slice(0, 15) + '...';
    }

    return new Handlebars.SafeString(result);
});



Ember.Handlebars.registerBoundHelper('nicedate', function (text, context) {
    var d = text;
    var result = App.hlp.prepareDate(new Date(d), true);
    return new Handlebars.SafeString(result);
});

App.hlp = Ember.Object.create();

App.hlp.reopen({
    prepareDate: function (date, hideTime) {
        var newDate = new Date(date),
            ret = this.padStr(newDate.getDate()) + "." + this.padStr((newDate.getMonth() + 1)) + "." + newDate.getFullYear();
        if (!Ember.isNone(hideTime) && hideTime === true)
            return ret;
        return ret + " kl. " + this.padStr(newDate.getHours()) + ":" + this.padStr(newDate.getMinutes());
    },
    padStr: function (i) {
        return (i < 10) ? "0" + i : "" + i;
    }
});