App.Post = DS.Model.extend({
    title: DS.attr('string'),
    body: DS.attr('string'),
    createdAt: DS.attr('date', {
        defaultValue: function() { return new Date(); }
    }),
    author: DS.attr('string'),
    comments: DS.hasMany('comment')
})