import {Component, View, bootstrap} from 'angular2/angular2'


@Component({
  selector: 'gravatar-profile'
})
@View({
  template: `
    <img src="https://placehold.it/350x150" />
    <input #email type="email"/>
    `
})
class GravatarProfile {

}




bootstrap(GravatarProfile)
