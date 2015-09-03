System.register(['angular2/angular2'], function (_export) {
  'use strict';

  var Component, View, bootstrap, GravatarProfile;

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
        }

        var _GravatarProfile = GravatarProfile;
        GravatarProfile = View({
          template: '\n    <img src="https://placehold.it/350x150" />\n    <input #email type="email"/>\n    '
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