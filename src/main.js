import {Component, View, bootstrap} from 'angular2/angular2'

@Component({
  selector: 'message'
})
@View({
  template: `<h1>{{ message }}</h1>`
})
class Message {
  constructor(){
    this.message = 'Hello World'
  }
}

@Component({
  selector: 'helloworld'
})
@View({
  template: `<message></message>`
, directives: [Message]
})
class HelloWorld {

}




bootstrap(HelloWorld)
