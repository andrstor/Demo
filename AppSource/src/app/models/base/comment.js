App.Comment = DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    createdAt: DS.attr('date', {
        defaultValue: function () { return new Date(); }
    }),
    post: DS.belongsTo('post')
});