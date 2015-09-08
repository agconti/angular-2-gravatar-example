'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2['default'])();
var port = process.env.PORT || 3000;

// Config
app.set('port', port);
app.use(_express2['default']['static'](__dirname + '/public'));
app.listen(app.get('port'), function () {
  return console.log('Serving app at http://localhost:' + app.get("port"));
});

// app routing
app.get('/', function (req, res) {
  return res.sendfile('./index.html');
});