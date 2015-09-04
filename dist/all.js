System.register(['angular2/angular2', 'md5'], function (_export) {
  'use strict';

  var Component, View, bootstrap, md5, GravatarProfile;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Component = _angular2Angular2.Component;
      View = _angular2Angular2.View;
      bootstrap = _angular2Angular2.bootstrap;
    }, function (_md5) {
      md5 = _md5['default'];
    }],
    execute: function () {
      GravatarProfile = (function () {
        function GravatarProfile() {
          var size = arguments.length <= 0 || arguments[0] === undefined ? 200 : arguments[0];

          _classCallCheck(this, _GravatarProfile);

          this.gravatarHost = 'http://www.gravatar.com/avatar';
          this.gravatarId = 'd41d8cd98f00b204e9800998ecf8427e';
          this.imageWidth = size;
          this.getImageSrc();
        }

        _createClass(GravatarProfile, [{
          key: 'doneTyping',
          value: function doneTyping($event) {
            // 13 = enter key
            if ($event.which === 13) {
              this.getProfile($event.target.value);
              $event.target.value = null;
            }
          }
        }, {
          key: 'getId',
          value: function getId(email) {
            this.gravatarId = md5(email);
          }
        }, {
          key: 'getImageSrc',
          value: function getImageSrc() {
            this.imageSrc = this.gravatarHost + '/' + this.gravatarId + '?s=' + this.imageWidth;
          }
        }, {
          key: 'getProfile',
          value: function getProfile(email) {
            this.getId(email);
            this.getImageSrc();
          }
        }]);

        var _GravatarProfile = GravatarProfile;
        GravatarProfile = View({
          template: '\n    <img [src]=imageSrc />\n    <input #email\n           type="email"\n           (keyup)="doneTyping($event)"\n           placeholder="Enter your gravatar email"/>\n    <button (click)="getProfile(email.value)">Get profile for {{email.value}}</button>\n    '
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