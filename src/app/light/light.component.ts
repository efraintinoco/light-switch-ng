import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent{

@Input() showLight!:boolean
@Input() showLightText!: boolean

}
