import {Component, View, bootstrap} from 'angular2/angular2'


@Component({
  selector: 'gravatar-profile'
})
@View({
  template: `
    <img src="{{imageSrc}}"/>
    <input #email type="email" (keyup)="doneTyping($event)"/>
    <button (click)="getProfile(email.value)">Get profile for {{email.value}}</button>
    `
})
class GravatarProfile {
  constructor() {
    this.imageSrc = "https://placehold.it/350x150"
  }

  doneTyping($event) {
    if($event.which === 13) {
      this.getProfile($event.target.value);
      $event.target.value = null;
    }
  }

  getProfile(val) {
    console.log(val)
    this.imageSrc = 'https://media3.giphy.com/media/Y8SqjWuohk8Rq/200_s.gif'
  }
}




bootstrap(GravatarProfile)
