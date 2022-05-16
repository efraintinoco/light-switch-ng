import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showLight:boolean = false
  showOff: boolean = true
  showLightText: boolean = false
  showOffText:boolean = true

  toggleLight() {
    this.showLight = !this.showLight;
    this.showOff = !this.showOff
  }
  toggleText() {
    this.showLightText = !this.showLightText
    this.showOffText = !this.showLightText
  }

}
