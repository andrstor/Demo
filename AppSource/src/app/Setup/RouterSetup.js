sl.require('pages/applicationroute');
sl.require('pages/loading/loadingroute'); //Is not currently working as expected

App.Router.reopen({
    location: 'hash'
});

App.Router.map(function () {
    this.route('index', { path: '/' });



    //Posts & commments
    this.resource('posts', function () {
        this.route('new');
        this.route('view');
    });
    this.resource('post', { path: '/post/:post_id' });
});


