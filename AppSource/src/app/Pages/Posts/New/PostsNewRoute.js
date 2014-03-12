sl.require('pages/posts/new/postsnewcontroller');

App.PostsNewRoute = Em.Route.extend({
    model: function () {
        return this.store.createRecord('post');
    },

    actions: {
        savePost: function (post) {
            var savePromise = post.save();
            this.transitionTo('post', savePromise);
        },

        cancelPost: function (post) {
            post.rollback();
            this.transitionTo('posts');
        }
    }

});