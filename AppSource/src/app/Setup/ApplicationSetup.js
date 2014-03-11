sl.require(/setup\/shims/);
sl.require('plugins/ic-ajax');

jQuery.support.cors = true;
$.support.cors = true;
  
$.ajaxSetup({
    xhrFields: {
        withCredentials: true
    }, 
    crossDomain: true
});  
  
window.App = Ember.Application.create({
    rootElement: '#ember-app',
    LOG_TRANSITIONS: false
});
if (window.location.search.indexOf("?test") !== -1) {
    App.setupForTesting();
    App.injectTestHelpers();
}

sl.require(/setup\/initializers/);

sl.require(/components/);

sl.require('store/store');

sl.require(/helpers/);

sl.require('plugins/embermixins/serializable');
sl.require('plugins/handlebarhelpers/helpers');
sl.require('setup/routersetup');
