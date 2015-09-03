System.register(['angular2/angular2'], function (_export) {
  'use strict';

  var Component, View, bootstrap, GravatarProfile;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Component = _angular2Angular2.Component;
      View = _angular2Angular2.View;
      bootstrap = _angular2Angular2.bootstrap;
    }],
    execute: function () {
      GravatarProfile = (function () {
        function GravatarProfile() {
          _classCallCheck(this, _GravatarProfile);

          this.imageSrc = "https://placehold.it/350x150";
        }

        _createClass(GravatarProfile, [{
          key: 'doneTyping',
          value: function doneTyping($event) {
            if ($event.which === 13) {
              this.getProfile($event.target.value);
              $event.target.value = null;
            }
          }
        }, {
          key: 'getProfile',
          value: function getProfile(val) {
            console.log(val);
            this.imageSrc = 'https://media3.giphy.com/media/Y8SqjWuohk8Rq/200_s.gif';
          }
        }]);

        var _GravatarProfile = GravatarProfile;
        GravatarProfile = View({
          template: '\n    <img src="{{imageSrc}}"/>\n    <input #email type="email" (keyup)="doneTyping($event)"/>\n    <button (click)="getProfile(email.value)">Get profile for {{email.value}}</button>\n    '
        })(GravatarProfile) || GravatarProfile;
        GravatarProfile = Component({
          selector: 'gravatar-profile'
        })(GravatarProfile) || GravatarProfile;
        return GravatarProfile;
      })();

      bootstrap(GravatarProfile);
    }
  };
});
//# sourceMappingURL=all.js.map