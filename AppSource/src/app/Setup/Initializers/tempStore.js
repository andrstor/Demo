Ember.Application.initializer({
    name: "tempStore",
    initialize: function (container, application) {
        sl.require('store/tempstore');
        container.register('store:temp', App.TempStore, { instantiate: true, singleton: true });
    }
});

Ember.Application.initializer({
    name: "injecttempStore",
    after: 'tempStore',

    initialize: function (container) {
        container.injection('controller', 'tempstore', 'store:temp');
        container.typeInjection('route', 'tempstore', 'store:temp');
    }
});