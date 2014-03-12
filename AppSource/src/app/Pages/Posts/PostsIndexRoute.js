sl.require('pages/posts/new/postsnewroute')

App.PostsIndexRoute = Em.Route.extend({
    model: function () {
        return this.store.find('post');
    }
});


