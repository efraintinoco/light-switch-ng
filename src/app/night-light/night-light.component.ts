import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css']
})
export class NightLightComponent {

@Input() showOff!:boolean
@Input() showOffText!:boolean

}
