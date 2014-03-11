sl.require('pages/applicationroute');
sl.require('pages/loading/loadingroute'); //Is not currently working as expected

App.Router.reopen({
    location: 'hash'
});

App.Router.map(function () {
    this.route('index', { path: '/' });
});


