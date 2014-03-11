

// common QUnit module declaration
module("Setup / setup_test", {
  setup: function() {
      
    App.reset();
    wait(); 
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
       
  }
}); 
 
// QUnit test case
test("/", function() {
  // async helper telling the application to go to the '/' route
  visit("/");

  // helper waiting the application is idle before running the callback
  andThen(function() {
    equal(1, 1, "Math still works");
  }); 
}); 
 
