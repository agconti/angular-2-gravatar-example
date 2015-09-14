import {Component, View, bootstrap} from 'angular2/angular2'
import md5 from 'md5'


@Component({
  selector: 'gravatar-profile'
})
@View({
  template:
    `
    <article class="gravatar-profile">
      <img [src]=imageSrc class="gravatar-profile__image"/>
      <input #email
             type="email"
             (keyup)="doneTyping($event)"
             placeholder="Enter your gravatar email"
             class="gravatar-profile__email"/>
      <button (click)="getProfile(email.value)" class="gravatar-profile__button">
        Get profile for {{email.value}}
      </button>
    </article>
    `
})
class GravatarProfile {
  constructor(size=300) {
    this.gravatarHost = 'http://www.gravatar.com/avatar'
    this.gravatarId = 'd41d8cd98f00b204e9800998ecf8427e'
    this.imageWidth = size
    this.getImageSrc()
  }

  doneTyping($event) {
    // 13 = enter key
    if($event.which === 13) {
      this.getProfile($event.target.value);
    }
  }

  getId(email){
    this.gravatarId = md5(email)
  }

  getImageSrc(){
    this.imageSrc = `${this.gravatarHost}/${this.gravatarId}?s=${this.imageWidth}`
  }

  getProfile(email) {
    this.getId(email)
    this.getImageSrc()
  }
}




bootstrap(GravatarProfile)
