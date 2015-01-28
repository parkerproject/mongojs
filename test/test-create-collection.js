var test = require('./tape');
var mongojs = require('../index');
var db = mongojs('test', ['test123']);

test.skip('createCollection', function(t) {
  db.test123.drop(function() {
    db.createCollection('test123', function(err) {
      t.ok(!err);
      db.createCollection('test123', function(err) {
        t.ok(err);
        t.end();
      });
    });
  });
});
