System.register(['angular2/angular2'], function (_export) {
  'use strict';

  var Component, View, bootstrap, Message, HelloWorld;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Component = _angular2Angular2.Component;
      View = _angular2Angular2.View;
      bootstrap = _angular2Angular2.bootstrap;
    }],
    execute: function () {
      Message = (function () {
        function Message() {
          _classCallCheck(this, _Message);

          this.message = 'Hello World';
        }

        var _Message = Message;
        Message = View({
          template: '<h1>{{ message }}</h1>'
        })(Message) || Message;
        Message = Component({
          selector: 'message'
        })(Message) || Message;
        return Message;
      })();

      HelloWorld = (function () {
        function HelloWorld() {
          _classCallCheck(this, _HelloWorld);
        }

        var _HelloWorld = HelloWorld;
        HelloWorld = View({
          template: '<message></message>',
          directives: [Message]
        })(HelloWorld) || HelloWorld;
        HelloWorld = Component({
          selector: 'helloworld'
        })(HelloWorld) || HelloWorld;
        return HelloWorld;
      })();

      bootstrap(HelloWorld);
    }
  };
});
//# sourceMappingURL=all.js.map